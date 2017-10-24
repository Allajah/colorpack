import { Color, colorpack, HEXtoHSV, HEXtoInteger, HEXtoRGBA } from '../colorpack';

describe('test', () => {
    it('must validate color string', () => {
        expect(colorpack('FEFEFE')).toBe(null);
        expect(colorpack('#GTGTGT')).toBe(null);
    });
    it('', () => {
        const color: Color = {
            r: 175,
            g: 143,
            b: 79,
            a: 0,
            hex: '#AF8F4F',
            h: 40,
            s: 0.549,
            v: 0.686,
            integer: 11505487
        };
        expect(colorpack('#AF8F4F')).toEqual(color)
    });
});
describe('hex to rgba', () => {
    it('', () => {
        const hex = '#af8f4f';
        const rgba = {
            r: 175,
            g: 143,
            b: 79,
            a: 0,
        };
        expect(HEXtoRGBA(hex)).toEqual(rgba);
    });
});

describe('hex to integer', () => {
    it('', () => {
        const hex = '#af8f4f';
        const integer = 11505487;
        expect(HEXtoInteger(hex)).toEqual(integer);
    });
});


describe('hex to hsv', () => {
    it('', () => {
        const hex = '#af8f4f';
        const hsv = {
            h: 40,
            s: 0.549,
            v: 0.686
        };
        expect(HEXtoHSV(hex)).toEqual(hsv);
    });
});
