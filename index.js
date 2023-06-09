// Universal module definition
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser
    root.jsRect = factory();
  }
})(this, function() {
  'use strict';

  function cover(sw, sh, dw, dh) {
    var ar = sw / sh;
    if (ar < dw / dh) {
      return {
        width: dw,
        height: dw / ar
      }
    } else {
      return {
        width: dh * ar,
        height: dh
      }
    }
  }

  function contain(sw, sh, dw, dh) {
    var ar = sw / sh;
    if (ar < dw / dh) {
      return {
        width: dh * ar,
        height: dh
      }
    } else {
      return {
        width: dw,
        height: dw / ar
      }
    }
  }

  function inside(sw, sh, mxw, mxh, mnw, mnh) {
    var ar = sw / sh;
    if (!mnw) {
      mnw = 0;
    }
    if (!mnh) {
      mnh = 0;
    }
    if (ar < mxw / mxh) {
      mxw = mxh * ar;
    } else {
      mxh = mxw / ar;
    }
    if (ar < mnw / mnh) {
      mnh = mnw / ar;
    } else {
      mnw = mnh * ar;
    }
    return {
      width: Math.min(mxw, Math.max(mnw, sw)),
      height: Math.min(mxh, Math.max(mnh, sh))
    }
  }

  function rotate(sw, sh, deg) {
    var radians = deg * Math.PI / 180;
    var sinFraction = Math.sin(radians);
    var cosFraction = Math.cos(radians);
    if (sinFraction < 0) {
      sinFraction = -sinFraction;
    }
    if (cosFraction < 0) {
      cosFraction = -cosFraction;
    }
    return {
      width: (sw * cosFraction) + (sh * sinFraction),
      height: (sw * sinFraction) + (sh * cosFraction)
    }
  }

  return {
    cover: cover,
    contain: contain,
    inside: inside,
    rotate: rotate,
  }
});