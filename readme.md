# Bootstrap4のカスタマイズ

[Bootstrap · The most popular HTML, CSS, and JS library in the world.](https://getbootstrap.com/)

## はじめに

`Bootstrap4` が 2018-01-18 にリリースされた

前バージョンと比較して、カスタマイズが非常にやりやすくなった

簡単なサンプルを例に、カスタマイズ手順について紹介する

https://kazunori-kimura.github.io/bootstrap4-customize/index.html

## インストール方法

```sh
$ npm install --save-dev bootstrap
```

## CSSのカスタマイズ

`Sass` によって書かれているので、必要な定義を `import` して使用できる。

前バージョンはデフォルトが `less` だったのでクセがあった

### sassとは

[Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/)

> Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

CSS extension language > *CSS拡張言語*

### sassとscss

sass: cssで頻出するセミコロンや波括弧を省略可能にする
scss: cssの構文そのままに、セレクターの入れ子や変数などの機能を追加

### インストール

Node.js版を使用する [node-sass](https://www.npmjs.com/package/node-sass)

```sh
npm install --save-dev node-sass
```

### フォルダ構成

```
[root]
  +- docs
  |   `- bundle.css
  |
  +- node_modules
  |   `- bootstrap
  |       `- scss
  |           `- xxx.scss
  |
  `- src
      `- custom.scss
```

### src/custom.scss

カスタマイズの例

使用する項目のみをimportする

```scss
// custom.scss
// Required
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";
@import "node_modules/bootstrap/scss/mixins";

// Optional
@import "node_modules/bootstrap/scss/root";
@import "node_modules/bootstrap/scss/reboot";
@import "node_modules/bootstrap/scss/type";
@import "node_modules/bootstrap/scss/images";
//@import "node_modules/bootstrap/scss/code";
@import "node_modules/bootstrap/scss/grid";
//@import "node_modules/bootstrap/scss/tables";
//@import "node_modules/bootstrap/scss/forms";
@import "node_modules/bootstrap/scss/buttons";
//@import "node_modules/bootstrap/scss/transitions";
//@import "node_modules/bootstrap/scss/dropdown";
//@import "node_modules/bootstrap/scss/button-group";
//@import "node_modules/bootstrap/scss/input-group";
//@import "node_modules/bootstrap/scss/custom-forms";
@import "node_modules/bootstrap/scss/nav";
@import "node_modules/bootstrap/scss/navbar";
@import "node_modules/bootstrap/scss/card";
//@import "node_modules/bootstrap/scss/breadcrumb";
//@import "node_modules/bootstrap/scss/pagination";
//@import "node_modules/bootstrap/scss/badge";
@import "node_modules/bootstrap/scss/jumbotron";
//@import "node_modules/bootstrap/scss/alert";
//@import "node_modules/bootstrap/scss/progress";
//@import "node_modules/bootstrap/scss/media";
//@import "node_modules/bootstrap/scss/list-group";
//@import "node_modules/bootstrap/scss/close";
//@import "node_modules/bootstrap/scss/modal";
//@import "node_modules/bootstrap/scss/tooltip";
//@import "node_modules/bootstrap/scss/popover";
//@import "node_modules/bootstrap/scss/carousel";
@import "node_modules/bootstrap/scss/utilities";
//@import "node_modules/bootstrap/scss/print";

body {
  padding-top: 50px;
}

section {
  padding: 60px 0;
}

section#hero {
  // size
  padding: 200px 0;
  
  // background-image
  background-image: url(./images/hero.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  h1 {
    color: $white;
    text-shadow: 3px 3px 0 $black;
  }

  p {
    color: $white;
    text-shadow: 0 0 3px $black;
  }
}

footer {
  padding: 30px 0;
  background-color: $secondary;
  color: $light;
}
```

### scssをcssに変換

scssはブラウザは解釈できないので、cssに変換する

```sh
$ npx node-sass src/custom.scss docs/bundle.css
```

### サイズ比較

```sh
# 全SCSSファイルをimport
-rw-r--r--  1 kimurakazunori  staff  151910  3 16 16:59 bundle.css
# 必要なファイルのみimport
-rw-r--r--  1 kimurakazunori  staff   91320  3 16 16:17 bundle.css
```

ファイルサイズが約60KB削減

## JavaScriptのカスタマイズ

`node_module/bootstrap/js/src`に機能ごとに分割して存在

`ECMAScript2017`で記述

`jQuery`, `popper.js` に依存

結合とトランスパイルが必要

### フォルダ構成

```
[root]
  +- docs
  |   `- bundle.js
  |
  +- node_modules
  |   +- bootstrap
  |   |   `- js/src
  |   |       `- xxx.js
  |   +- jquery
  |   `- popper.js
  |
  +- src
  |   `- index.js
  |
  `- tmp
      `- bundle.js
```

### src/index.js

カスタマイズの例

必要な機能のみimportする

```js
//import Alert from 'bootstrap/js/src/alert'
//import Button from 'bootstrap/js/src/button'
//import Carousel from 'bootstrap/js/src/carousel'
import Collapse from 'bootstrap/js/src/collapse'
//import Dropdown from 'bootstrap/js/src/dropdown'
//import Modal from 'bootstrap/js/src/modal'
//import Popover from 'bootstrap/js/src/popover'
import Scrollspy from 'bootstrap/js/src/scrollspy'
//import Tab from 'bootstrap/js/src/tab'
//import Tooltip from 'bootstrap/js/src/tooltip'
//import Util from 'bootstrap/js/src/util'
```


### docs/bundle.js生成の流れ

`WebPack`で複数のjsファイルをひとつに結合 (バンドル)

`babel`で結合したjsファイルをトランスパイル

### WebPackのインストール

```sh
$ npm install --save-dev webpack webpack-cli
```

### WebPackの実行

```sh
$ npx webpack src/index.js --output-path="tmp" --output-filename="bundle.js" --mode=production
```

### babelのインストール

```sh
$ npm install --save-dev babel-cli babel-preset-env babel-plugin-transform-object-rest-spread
```

### babelの設定

`.babelrc`を作成

```json
{
  "presets": ["env"],
  "plugins": ["transform-object-rest-spread"]
}
```

### babelの実行

```sh
$ npx babel tmp/bundle.js -o docs/bundle.js
```

### サイズ比較

```sh
# 全機能をimport
-rw-r--r--  1 kimurakazunori  staff  232358  3 16 17:29 bundle.js
# 必要なファイルのみimport
-rw-r--r--  1 kimurakazunori  staff  146176  3 16 16:59 bundle.js
```

ファイルサイズが約86KB削減
