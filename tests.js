// tests.js
const expect = chai.expect;

// Tests for integerToRoman
describe('integerToRoman', function () {
    it('should convert 1 to "I"', function () {
        expect(integerToRoman(1)).to.equal("I");
    });

    it('should convert 4 to "IV"', function () {
        expect(integerToRoman(4)).to.equal("IV");
    });

    it('should convert 9 to "IX"', function () {
        expect(integerToRoman(9)).to.equal("IX");
    });

    it('should convert 58 to "LVIII"', function () {
        expect(integerToRoman(58)).to.equal("LVIII");
    });

    it('should convert 1994 to "MCMXCIV"', function () {
        expect(integerToRoman(1994)).to.equal("MCMXCIV");
    });

    it('should convert 3999 to "MMMCMXCIX"', function () {
        expect(integerToRoman(3999)).to.equal("MMMCMXCIX");
    });

    it('should convert 500 to "D"', function () {
        expect(integerToRoman(500)).to.equal("D");
    });

    it('should convert 1987 to "MCMLXXXVII"', function () {
        expect(integerToRoman(1987)).to.equal("MCMLXXXVII");
    });

    it('should throw an error for 0', function () {
        expect(() => integerToRoman(0)).to.throw();
    });

    it('should throw an error for 4000', function () {
        expect(() => integerToRoman(4000)).to.throw();
    });

    it('should throw an error for negative numbers', function () {
        expect(() => integerToRoman(-5)).to.throw();
    });

    it('should throw an error for float input', function () {
        expect(() => integerToRoman(3.5)).to.throw();
    });
});

// Tests for romanToInteger
describe('romanToInteger', function () {
    it('should convert "I" to 1', function () {
        expect(romanToInteger("I")).to.equal(1);
    });

    it('should convert "IV" to 4', function () {
        expect(romanToInteger("IV")).to.equal(4);
    });

    it('should convert "IX" to 9', function () {
        expect(romanToInteger("IX")).to.equal(9);
    });

    it('should convert "LVIII" to 58', function () {
        expect(romanToInteger("LVIII")).to.equal(58);
    });

    it('should convert "MCMXCIV" to 1994', function () {
        expect(romanToInteger("MCMXCIV")).to.equal(1994);
    });

    it('should convert "MMMCMXCIX" to 3999', function () {
        expect(romanToInteger("MMMCMXCIX")).to.equal(3999);
    });

    it('should convert "X" to 10', function () {
        expect(romanToInteger("X")).to.equal(10);
    });

    it('should convert "XXI" to 21', function () {
        expect(romanToInteger("XXI")).to.equal(21);
    });

    it('should convert "MCMXC" to 1990', function () {
        expect(romanToInteger("MCMXC")).to.equal(1990);
    });

    it('should throw an error for "" (empty input)', function () {
        expect(() => romanToInteger("")).to.throw();
    });

    it('should throw an error for "IIII"', function () {
        expect(() => romanToInteger("IIII")).to.throw();
    });

    it('should throw an error for "IC"', function () {
        expect(() => romanToInteger("IC")).to.throw();
    });

    it('should throw an error for "VX"', function () {
        expect(() => romanToInteger("VX")).to.throw();
    });

    it('should throw an error for "MMMM"', function () {
        expect(() => romanToInteger("MMMM")).to.throw();
    });

    it('should throw an error for "ABC"', function () {
        expect(() => romanToInteger("ABC")).to.throw();
    });

    it('should throw an error for lowercase "x"', function () {
        expect(() => romanToInteger("x")).to.throw();
    });
});
