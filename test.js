import test from 'ava';
const Colorpack = require('./colorpack.js');
const colorpack = new Colorpack();
test('hexToInt', t => {
    const res = colorpack.hexToInt('#FFFFFF')
    if (res === 0xFFFFFF) {
        t.pass();
    } else {
        console.error(res);
        t.fail();
    }
});

test('intToHex', t => {
    const res = colorpack.intToHex('0xFFFFFF');
    if (res === '#FFFFFF') {
        t.pass();
    } else {
        console.error(res);
        t.fail();
    }
});

test('hexToRGB', t => {
    const res = colorpack.hexToRGB('#FFFFFF');
    if (res.r === 255 && res.g === 255 && res.b === 255) {
        t.pass();
    } else {
        console.error(res);
        t.fail();
    }
});

test('rgbToHex', t => {
    const rgb = {
            r: 255,
            g: 255,
            b: 255
        },
        res = colorpack.rgbToHex(rgb);
    if (res === '#FFFFFF') {
        t.pass();
    } else {
        console.error(res);
        t.fail();
    }
});

test('rgbToInt', t => {
    const rgb = {
            r: 255,
            g: 255,
            b: 255
        },
        res = colorpack.rgbToInt(rgb);
    if (res === 0xFFFFFF) {
        t.pass();
    } else {
        console.error(res);
        t.fail();
    }
});

test('intToRGB', t => {
    const res = colorpack.intToRGB(0xFFFFFF);
    if (res.r === 255 && res.g === 255 && res.b === 255) {
        t.pass();
    } else {
        console.error(res);
        t.fail();
    }
});
