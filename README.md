## Usage

```js
import jsRect from "js-rect";
```

```js
// Rect 100 x 200
var sw = 100;
var sh = 200;

// Rect 1000 x 1000
var dw = 1000;
var dh = 1000;

var deg = 45;

jsRect.cover(sw, sh, dw, dh); // {width: 1000, height: 2000}
jsRect.contain(sw, sh, dw, dh); // {width: 500, height: 1000}
jsRect.inside(sw, sh, dw, dh, 0, 0); // {width: 100, height: 200}
jsRect.inside(dw, dh, sw, sh, 0, 0); // {width: 100, height: 100}
jsRect.rotate(sw, sh, deg); // {width: 212.13203435596427, height: 212.13203435596427}
```