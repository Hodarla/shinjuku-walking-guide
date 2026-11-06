# 步行新宿

新宿車站周圍 2 公里景點與半日散步路線的繁體中文靜態網站。

## 本機預覽

```bash
python3 -m http.server 4173
```

開啟 `http://localhost:4173`。

## Firebase Hosting

此儲存庫已綁定已確認的 Firebase 專案 `hodarla`：

```bash
npx firebase-tools deploy --only hosting
```

若專案有多個 Hosting site，請先用 `firebase target:apply hosting` 設定 target，並相應調整 `firebase.json`。
