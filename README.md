# client-side constraint bypass sandbox

HTML/JS の「フロントエンドの制約」がセキュリティ境界にならないことを実演する1ページ教材です。
`maxlength`、ファイルの `accept` / サイズ、`disabled` / `readonly`、`required` / `pattern`、
`hidden` フィールド、`select` の選択肢、`number`/`range` の `min`/`max`、JS バリデーション、
禁止ワードフィルタを、ブラウザ操作だけで突破できることを確認できます。

> 防御教育目的。クライアント検証は UX のためで、本当の検証はサーバーで行うべきという例です。
> 自分が権限を持たないシステムに使わないでください。

## 構成（静的サイト / バックエンド不要）

```
web-sandbox/
├── index.html      全デモを1ページに収録
├── css/style.css   最低限のスタイル
└── js/common.js    送信内容インスペクタ（FormData を可視化）
```

各デモの「送信」で、サーバーが実際に受け取る値を黒いパネルに表示します。

## ローカルで開く

```bash
python -m http.server 8000
# http://localhost:8000/ を開く
```

## GitHub Pages で公開

Settings → Pages → Source を「Deploy from a branch」、Branch を `main` / `/ (root)` に設定。
更新は `git add -A; git commit; git push` で自動再ビルドされます。

公開URL: https://ganondorofu.github.io/web-sandbox/
