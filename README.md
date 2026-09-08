# 禁羈街區 Kinkdom

以 Remix 3 建立的台灣 kink 社群網站。首頁會依裝置本地時間切換白天、夜晚兩種城市樣貌，也可從選單暫時切換時段。

## 開發

需要 Node.js 24.3 以上。

```sh
npm install
npm run dev
```

網站預設位於 `http://localhost:44100`。

## 驗證

```sh
npm run typecheck
npm test
```

## GitHub Pages 部署

推送到 `main` 後，GitHub Actions 會執行型別檢查與測試，產生靜態網站並部署至 GitHub Pages。自訂網域設定為 `welcome2kinkdom.trea.org.tw`。

```sh
npm run build:static
```

內容初稿位於 `content/`；路由定義在 `app/routes.ts`，共用 UI 在 `app/ui/`，瀏覽器端時間與 canvas 行為在 `app/actions/public/kinkdom.ts`。
