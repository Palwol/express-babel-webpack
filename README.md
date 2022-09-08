# express-babel-webpack

node.js express, babel, webpack boilerplate입니다.

## 사용 기능

- babel : `@babel/presets-env` default 버전
- stylesheet : SCSS / SASS
- view-file : HTML
- webpack plugins : HtmlWebpackPlugin, MiniCssExtractPlugin
- linter : eslint + prettier
- express middleware : webpackDevMiddleware

## 폴더 구조

```bash
.
├── README.md
├── babel.config.json
├── package.json
├── public
│   ├── main.bundle.js
│   ├── main.bundle.js.map
│   ├── css
│   │   ├── main.style.css
│   │   └── main.style.css.map
│   └── index.html
├── server
│   └── app.js
├── src
│   ├── index.html
│   ├── main.js
│   └── scss
│       └── style.scss
└── webpack.config.js
```

## 실행방법

1. 패키지 설치 : `npm i`
2. build : `npm run build`

- src 폴더 안의 html, js, scss(sass) 파일을 번들링합니다. `--watch` 옵션이 적용되어 파일의 변화가 감지되면 자동으로 다시 번들링을 실행합니다.

3. 서버 실행

- 개발 : `npm run dev:start`
  - nodemon이 적용되어 파일에 변화가 생기면 자동으로 서버를 재시동합니다.
- 배포 : `npm run start`

## 빌드 결과

- src 폴더의 파일들이 build되며, build 결과물은 public 폴더에 생성됩니다.
- 생성되는 build 결과물 이름은 다음과 같습니다.

```bash
[name].js -> [name].bundle.js
[name].scss -> css/[name].style.css
[name].html -> [name].html
```
