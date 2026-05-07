# Ferris University Library Website

フェリス女学院大学附属図書館の公式ウェブサイト。

## 概要

このウェブサイトは、フェリス女学院大学の学生・教職員・一般利用者を対象とした図書館サービスのポータルサイトです。MicroCMSを活用したコンテンツ管理システムを統合し、動的なコンテンツ更新を可能にしています。

## 主な機能

- **施設について**: 施設の案内や開館時間の案内
- **利用案内**: 提供しているサービスや対象となる人の案内
- **情報検索**: 情報検索のためのヒントを掲載
- **ニュース**: 図書館からのお知らせを掲載
- **トピックス**: 図書館の特別な活動を紹介
- **多言語対応**: 英語版ページの提供

## 技術スタック

- **フレームワーク**: Nuxt
- **言語**: TypeScript
- **UIライブラリ**: Vuetify
- **CMS**: MicroCMS
- **プラグイン**:
  - Vue Easy Lightbox (画像表示)
  - Vue PDF (PDF表示)
- **パッケージマネージャー**: pnpm
- **その他**: Day.js (日付処理), Markdown-it (マークダウン処理)

## インストール

依存関係をインストールします。

```bash
# pnpmを使用
pnpm install
```

## 開発環境のセットアップ

開発サーバーを起動します。

```bash
pnpm dev
```

ブラウザで `http://localhost:3000` にアクセスして確認できます。

### 環境変数の設定

MicroCMSとの連携には以下の環境変数を設定してください：

- `MICROCMS_SERVICE_DOMAIN`: MicroCMSのサービスドメイン
- `MICROCMS_API_KEY`: MicroCMSのAPIキー

`.env` ファイルを作成し、上記の変数を定義してください。

## ビルドとデプロイ

### 静的サイト生成

```bash
pnpm generate
```

### プレビュー

ローカルでプロダクションビルドをプレビューします。

```bash
pnpm preview
```

## プロジェクト構造

```text
├── app/                   # Nuxtアプリ設定
│   ├── assets/            # アセットファイル (CSS, 画像, JSON)
│   ├── components/        # Vueコンポーネント
│   │   ├── containers/    # コンテナコンポーネント
│   │   ├── parts/         # パーツコンポーネント
│   │   ├── sections/      # セクションコンポーネント
│   │   └── templates/     # テンプレートコンポーネント
│   ├── composables/       # Vue Composables
│   │   ├── common/        # 共通機能
│   │   ├── ebooks/        # 電子書籍関連
│   │   ├── exhibition/    # 展示関連
│   │   ├── layout/        # レイアウト関連
│   │   └── news/          # ニュース関連
│   ├── contents/          # コンテンツデータ (TypeScript)
│   ├── helpers/           # ヘルパー関数
│   ├── layouts/           # レイアウトファイル
│   ├── lib/               # ライブラリ設定
│   ├── pages/             # ページファイル
│   ├── plugins/           # Nuxtプラグイン
│   ├── types/             # TypeScript型定義
│   └── utils/             # ユーティリティ関数
├── docs/                  # ドキュメント
├── public/                # 静的ファイル
│   ├── documents/         # PDFなどのドキュメント
│   ├── dokupuro/          # 特定のコンテンツ
│   └── images/            # 画像ファイル
├── nuxt.config.ts         # Nuxt設定
├── package.json           # 依存関係とスクリプト
├── tsconfig.json          # TypeScript設定
└── eslint.config.mjs      # ESLint設定
```

## 開発ガイドライン

### コーディングスタイル

- TypeScriptを使用
- ESLintとPrettierでコードフォーマット
- Vuetifyのコンポーネントを使用

### スクリプト

```bash
# リンター実行
pnpm lint

# 自動修正
pnpm format

# 型チェック
pnpm typecheck
```

## 貢献

チームメンバーとして参加する場合：

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/新機能`)
3. 変更をコミット (`git commit -m 'Add 新機能'`)
4. ブランチをプッシュ (`git push origin feature/新機能`)
5. Pull Requestを作成

### コミットメッセージのガイドライン

- 英語で記述
- 簡潔に変更内容を説明
- プレフィックスを使用 (例: `feat:`, `fix:`, `docs:`)

## ライセンス

このプロジェクトは業務委託プロジェクトのため、ライセンス情報は契約に基づきます。詳細はプロジェクトオーナーに問い合わせください。

## 連絡先

質問や問題がある場合は、プロジェクトオーナーまたはチームリーダーに連絡してください。
