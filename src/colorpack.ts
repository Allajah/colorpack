export interface RGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}

export interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
    hex: string;
    h: number;
    s: number;
    v: number;
    integer: number;
}

export interface RGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}

export interface HSV {
    h: number;
    s: number;
    v: number;
}

export function colorpack(input: string): Color | null {
    if (!isValid(input)) return null;
    const rgba = HEXtoRGBA(input);
    const integer = HEXtoInteger(input);
    const hsv = HEXtoHSV(input);
    if(!rgba || !integer || !hsv) return null;
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
    }
}

export function HEXtoRGBA(hex: string): RGBA | null {
    const alpha = 0;
    if (!isValid(hex)) return null;
    let split = hex.match(/([a-fA-F0-9]{2})/g);
    if (!split || !split.length) return null;
    return {
        r: parseInt(split[0], 16),
        g: parseInt(split[1], 16),
        b: parseInt(split[2], 16),
        a: alpha
    }
}

export function HEXtoInteger(hex: string): number | null {
    if (!isValid(hex)) return null;
    const h = hex.match(/#([a-fA-F0-9]{6})/);
    if (!h || !h.length) return null;
    return parseInt(h[1], 16);
}

export function HEXtoHSV(hex: string): HSV | null {
    const hsv: HSV = { h: 0, s: 0, v: 0 };
    const rgba = HEXtoRGBA(hex);
    if (!rgba) return null;
    const r = rgba.r / 255;
    const g = rgba.g / 255;
    const b = rgba.b / 255;
    const min = Math.min(r, Math.min(g, b));
    const max = Math.max(r, Math.max(g, b));
    if (min === max) return {
        h: 0,
        s: 0,
        v: max
    };
    hsv.v = max;
    const delta = max - min;
    if (max === r) {
        hsv.h = 60 * ((g - b) / delta % 6);
    } else if (max === g) {
        hsv.h = 60 * ((b - r) / delta + 2);
    } else {
        hsv.h = 60 * ((r - g) / delta + 4);
    }
    hsv.s = delta / max;
    hsv.s = Math.floor(hsv.s * 1000 + 0.5) / 1000;
    hsv.v = Math.floor(hsv.v * 1000 + 0.5) / 1000;
    return hsv;
}

function isValid(hex: string): boolean {
    const regex = /#[a-fA-F0-9]{6}/g;
    const matched = regex.exec(hex);
    if (!matched) {
        console.error(`${hex} didn't matched`);
        return false;
    }
    return true;
}

