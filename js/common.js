// 共通ヘルパー。各デモページから読み込む。
// 目的: 「フロントエンドの制約はサーバーを守らない」ことを可視化する。

function logLine(outId, text, cls) {
  const out = document.getElementById(outId);
  if (!out) return;
  const div = document.createElement('div');
  if (cls) div.className = cls;
  div.textContent = text;
  out.appendChild(div);
  out.scrollTop = out.scrollHeight;
}

function clearLog(outId) {
  const out = document.getElementById(outId);
  if (out) out.innerHTML = '';
}

// フォームを FormData として読み取り、「サーバーが受け取る生の値」を表示する。
// これが突破の証拠になる: 画面の制約に関係なく、この内容がそのまま送られる。
function inspect(form, outId) {
  clearLog(outId);
  logLine(outId, '=== サーバーが受け取る値（モック送信） ===', 'head');
  const fd = new FormData(form);
  let any = false;
  for (const [k, v] of fd.entries()) {
    any = true;
    if (v instanceof File) {
      logLine(outId, `${k} = [File] name="${v.name}" type="${v.type || '(空)'}" size=${v.size} バイト`, 'warn');
    } else {
      const s = String(v);
      logLine(outId, `${k} = ${JSON.stringify(s)}  (文字数 ${s.length})`);
    }
  }
  if (!any) logLine(outId, '(送信フィールドなし)');
}

// data-mock 属性付きフォームの送信を横取りして inspect する（実サーバー不要）。
// 注意: required/pattern などのネイティブ検証を突破しないと submit 自体が発火しない。
//       それ自体がデモの一部。
document.addEventListener('submit', function (e) {
  const f = e.target;
  if (f && f.matches && f.matches('form[data-mock]')) {
    e.preventDefault();
    inspect(f, f.getAttribute('data-out') || 'out');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  if (nav) nav.innerHTML = '<a href="../index.html">&larr; 一覧へ戻る</a>';
});
