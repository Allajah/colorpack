"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function colorpack(input) {
    if (!isValid(input))
        return null;
    var rgba = HEXtoRGBA(input);
    var integer = HEXtoInteger(input);
    var hsv = HEXtoHSV(input);
    if (!rgba || !integer || !hsv)
        return null;
    return {
        r: rgba.r,
        g: rgba.g,
        b: rgba.b,
        a: rgba.a,
        hex: input,
        h: hsv.h,
        s: hsv.s,
        v: hsv.v,
        integer: integer,
    };
}
exports.colorpack = colorpack;
function HEXtoRGBA(hex) {
    var alpha = 0;
    if (!isValid(hex))
        return null;
    var split = hex.match(/([a-fA-F0-9]{2})/g);
    if (!split || !split.length)
        return null;
    return {
        r: parseInt(split[0], 16),
        g: parseInt(split[1], 16),
        b: parseInt(split[2], 16),
        a: alpha
    };
}
exports.HEXtoRGBA = HEXtoRGBA;
function HEXtoInteger(hex) {
    if (!isValid(hex))
        return null;
    var h = hex.match(/#([a-fA-F0-9]{6})/);
    if (!h || !h.length)
        return null;
    return parseInt(h[1], 16);
}
exports.HEXtoInteger = HEXtoInteger;
function HEXtoHSV(hex) {
    var hsv = { h: 0, s: 0, v: 0 };
    var rgba = HEXtoRGBA(hex);
    if (!rgba)
        return null;
    var r = rgba.r / 255;
    var g = rgba.g / 255;
    var b = rgba.b / 255;
    var min = Math.min(r, Math.min(g, b));
    var max = Math.max(r, Math.max(g, b));
    if (min === max)
        return {
            h: 0,
            s: 0,
            v: max
        };
    hsv.v = max;
    var delta = max - min;
    if (max === r) {
        hsv.h = 60 * ((g - b) / delta % 6);
    }
    else if (max === g) {
        hsv.h = 60 * ((b - r) / delta + 2);
    }
    else {
        hsv.h = 60 * ((r - g) / delta + 4);
    }
    hsv.s = delta / max;
    hsv.s = Math.floor(hsv.s * 1000 + 0.5) / 1000;
    hsv.v = Math.floor(hsv.v * 1000 + 0.5) / 1000;
    return hsv;
}
exports.HEXtoHSV = HEXtoHSV;
function isValid(hex) {
    var regex = /#[a-fA-F0-9]{6}/g;
    var matched = regex.exec(hex);
    if (!matched) {
        console.error(hex + " didn't matched");
        return false;
    }
    return true;
}
