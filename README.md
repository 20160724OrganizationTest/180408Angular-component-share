# Angularの親と子の間でのデータを受け渡しする。
タイトルで書いた、データの親子は``chaild01(親),link-items (子)``です。
```
─ app
   ├── link-items 【子】 タブのボタン
   └── parent 動作部分　[chaild01]を呼び出し
        └── chaild01 【親】 タブ内のコンテンツ内容 タブボタンを[link-items]呼び出し
```

下記の値を親と子間で受け渡しさせる。
``currentLinkIndex,selectLinkIndex``

複数のコンポーネントからなる、タブのサンプル。

![画面画像](https://raw.github.com/wiki/20160724OrganizationTest/180408Angular-component-share/images/Angular-component-share.png)


