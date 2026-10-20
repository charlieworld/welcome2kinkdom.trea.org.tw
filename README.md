# 台灣禁羈資訊導航站 Taiwan Kink Navigator

以 Remix 3 建立的台灣 BDSM／kink 社群資源入口。首頁把活動、資源、節目、文庫、討論區的外部連結整理成一頁；另有 CD 事件聲明頁與關於頁。中文在 `/`，英文在 `/en/`，每頁都預先渲染成靜態 HTML。頁面會依裝置本地時間切換白天、夜晚兩種城市樣貌，也可從選單暫時切換。

## 開發

需要 Node.js 24.3 以上。

```sh
npm install
npm run dev
```

網站預設位於 `http://localhost:44100`。

## 內容維護

- 資源連結：`app/data/links.ts`，一筆一物件；新增時直接追加即可，頁面渲染時會依中文名稱筆畫序（英文版依英文名）排序。沒有英文名稱的連結在英文版顯示中文原名。
- CD 事件聲明：`app/data/statement-cd.ts`，中英文各一份；引用區只放摘要與原文連結。
- 介面文案：`app/i18n/index.ts`，`zh` 與 `en` 兩本字典，型別會強制兩邊鍵完整。
- 路由：`app/routes.ts`；靜態建置的頁面清單由路由表自動產生。
- 社群分享圖：首頁等共用 `public/og-day.jpg`、`og-night.jpg`；年表與禁羈空間各有專屬圖（`og-chronicle.jpg`、`og-kink-space.jpg`），由 `node --import remix/node-tsx scripts/og-templates.ts` 從資料產生 HTML 模板到 `tmp/og/`，再用無頭瀏覽器以 1200×630 截圖存回 `public/`。

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
