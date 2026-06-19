# client-side constraint bypass sandbox

HTML/JS の「フロントエンドの制約」がセキュリティ境界にならないことを実演する教材サイトです。
`maxlength`、ファイルの `accept` / サイズ、`disabled` / `readonly`、`required` / `pattern`、
`hidden` フィールド、`select` の選択肢、`number` の `min`/`max`、JS バリデーション、
禁止ワードフィルタなどを、ブラウザ上の操作だけで突破できることを確認できます。

> **目的は防御教育です。** 「クライアント検証は UX のため、本当の検証はサーバーで」を体感するためのもの。
> 自分が権限を持たないシステムに対して使わないでください。

## 構成（静的サイト / バックエンド不要）

```
web-sandbox/
├── index.html                  デモ一覧・総論
├── css/style.css               最低限のスタイル
├── js/common.js                共通ヘルパー（送信内容インスペクタ）
└── demos/
    ├── maxlength.html          1. maxlength を突破
    ├── file-upload.html        2. accept / サイズ制限を突破
    ├── disabled-readonly.html  3. disabled / readonly を解除
    ├── required-pattern.html   4. required / pattern / type を突破
    ├── hidden-field.html       5. hidden 改ざん（価格改ざん）
    ├── select-options.html     6. select の選択肢制限を突破
    ├── number-range.html       7. number の min/max を突破
    ├── js-validation.html      8. JS バリデーションを無効化
    └── textarea-filter.html    9. 禁止ワードフィルタ / textarea を突破
```

各デモは「送信」ボタンで FormData を読み取り、**サーバーが実際に受け取る値**を黒いパネルに表示します。
本物のサーバーがない静的ホスティングでも、突破の結果を可視化できます。

## ローカルで開く

ファイルを直接開いても動きますが、サーバー経由のほうが実挙動に近いです。

```bash
python -m http.server 8000
# http://localhost:8000/ を開く
```

## GitHub Pages で公開

1. このディレクトリを GitHub リポジトリとして push する。
2. リポジトリの **Settings → Pages** を開く。
3. **Build and deployment → Source** を **Deploy from a branch** にする。
4. Branch を `main`（または対象ブランチ）、フォルダを `/ (root)` に設定して **Save**。
5. 数十秒後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開される。

`index.html` がルートにあるため追加設定は不要です。
