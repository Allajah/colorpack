"use strict";

class Colorpack {
    /**
     * hexToInt - Transform Hex value to integer
     *
     * @param  {String} hex  ex: #FFFFFF
     * @return {Number}       ex: 0xFFFFFF
     */
    hexToInt(hex) {
        const c = parseInt('0x' + hex.split('#')[1]);
        if (!c && c !== 0) {
            console.error(`Specified color ${hex} is invalid`);
            return null;
        }
        return c;
    }

    intToHex(num){
        return '#' + num.toString(16).split('0x')[1];
    };

    hexToRGB(hex) {
        const parsed = /^#?([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})$/g.exec(hex);
        return parsed ? {
            r: parseInt(parsed[1], 16),
            g: parseInt(parsed[2], 16),
            b: parseInt(parsed[3], 16)
        } : {
          r: null,
          g: null,
          b: null
        };
    };
    rgbToHex(rgb) {
      return `#${rgb.r.toString(16)}${rgb.g.toString(16)}${rgb.b.toString(16)}`.toUpperCase();
    }

    rgbToInt(rgb) {
      return parseInt(`0x${rgb.r.toString(16)}${rgb.g.toString(16)}${rgb.b.toString(16)}`);
    }

    intToRGB(num) {
      const parsed = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/g.exec(num.toString(16));
      return parsed ? {
            r: parseInt(parsed[1], 16),
            g: parseInt(parsed[2], 16),
            b: parseInt(parsed[3], 16)
        } : {
          r: null,
          g: null,
          b: null
        };
    }
}

module.exports =  Colorpack;
