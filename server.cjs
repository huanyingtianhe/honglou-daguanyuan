const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const root = path.join(__dirname, 'web');
const port = Number(process.env.HONGLOU_PORT || 18752);
const url = `http://127.0.0.1:${port}/`;
const identity = 'honglou-portable-v1';
const open = () => {
  if (process.env.HONGLOU_NO_BROWSER === '1') return;
  const child = spawn('explorer.exe', [url], { detached: true, stdio: 'ignore', windowsHide: true });
  child.on('error', () => console.log(`请手动打开 ${url}`));
  child.unref();
};
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml', '.webp':'image/webp', '.mp3':'audio/mpeg', '.wav':'audio/wav', '.ogg':'audio/ogg', '.woff2':'font/woff2', '.ico':'image/x-icon' };
const server = http.createServer((req, res) => {
  if (!['GET','HEAD'].includes(req.method)) { res.writeHead(405); return res.end(); }
  let name;
  try { name = decodeURIComponent(new URL(req.url, url).pathname); }
  catch { res.writeHead(400); return res.end(); }
  if (name === '/__honglou_health') { res.writeHead(200, {'Content-Type':'text/plain'}); return res.end(identity); }
  const target = path.resolve(root, '.' + name);
  if (target !== root && !target.startsWith(root + path.sep)) { res.writeHead(403); return res.end(); }
  let file = target;
  if (['/', '/classic', '/classic/'].includes(name)) file = path.join(root, 'index.html');
  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) { res.writeHead(404); return res.end('Not found'); }
    const headers = {'Content-Type':mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-cache', 'Accept-Ranges':'bytes', 'X-Content-Type-Options':'nosniff'};
    let start = 0, end = stat.size - 1, status = 200;
    if (req.headers.range) {
      const match = /^bytes=(\d+)-(\d*)$/.exec(req.headers.range);
      if (!match) { res.writeHead(416, {'Content-Range':`bytes */${stat.size}`}); return res.end(); }
      start = Number(match[1]); end = match[2] ? Math.min(Number(match[2]), end) : end;
      if (start > end || start >= stat.size) { res.writeHead(416, {'Content-Range':`bytes */${stat.size}`}); return res.end(); }
      status = 206; headers['Content-Range'] = `bytes ${start}-${end}/${stat.size}`;
    }
    headers['Content-Length'] = Math.max(0, end - start + 1);
    res.writeHead(status, headers);
    if (req.method === 'HEAD' || stat.size === 0) return res.end();
    fs.createReadStream(file, {start, end}).on('error', () => res.destroy()).pipe(res);
  });
});
server.on('error', async err => {
  if (err.code === 'EADDRINUSE') {
    try {
      const response = await fetch(url + '__honglou_health', {signal:AbortSignal.timeout(2000)});
      if (await response.text() === identity) { open(); return; }
    } catch {}
    console.error(`端口 ${port} 已被其他程序占用，请关闭占用程序后重试。`);
  } else console.error('启动失败：', err.message);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => {
  console.log(`红楼 · 大观园已启动：${url}\n请保留本窗口；关闭窗口或按 Ctrl+C 可停止游戏服务。\n游戏进度自动保存在当前浏览器中，也可在游戏中导出备份。`);
  open();
});
