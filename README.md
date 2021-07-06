# 帳號密碼檢查機制 User authentication
一個用 Express 和 MongoDB 所建立簡單的帳號密碼檢查機制網路應用程式。

## 特色 Features
- 預覽「帳號密碼檢查機制」需要用到的頁面、路由與資料
- 用 cookie 保存使用者登入狀態

## 環境建置 Environment Setup

1. nvm & Node.js
2. nodemon
3. MongoDB

## 安裝 Installing

1. 在終端機輸入指令 Clone 此專案至本機電腦
```
git clone https://github.com/Whaleep/user-authentication.git
```
2. 進入專案目錄
```
cd user-authentication
```
3. 安裝相關套件
```
npm install
```
4. 新增種子資料
```
npm run seed
```
5. 啟動專案
```
npm run dev
```
6. 出現以下訊息後，即可在 http://localhost:3000 開始使用
```
Express is listening on localhost:3000
```

## 版本階段 Version

在終端機輸入指令切換到對應進度
- v0 學期2-3 A10進度
- v1 學期2-3 A11進度
```
git checkout v0
git checkout v1
```
