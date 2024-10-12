import { capitalize, reverseString, Calculator, caesarCipher } from "./index.js";

it("capitalize first letter", () => {
  expect(capitalize("brandon")).toBe("Brandon");
  expect(capitalize("for the very first time.")).toBe(
    "For the very first time."
  );
});

it("reverse string", () => {
    expect(reverseString("brandon")).toBe("nodnarb");
})

it("calculator", () => {
    expect(Calculator.add(1, 1)).toEqual(2);
    expect(Calculator.add(3, 3)).toEqual(6);
    expect(Calculator.subtract(1, 1)).toEqual(0);
    expect(Calculator.divide(4, 2)).toEqual(2);
    expect(Calculator.multiply(2, 2)).toEqual(4);
})

it("roman cipher", () => {
    expect(caesarCipher(1, 'abc')).toBe('bcd');
    expect(caesarCipher(2, 'abc')).toBe('cde');
    expect(caesarCipher(3, 'xyz')).toBe('abc');
    expect(caesarCipher(3, 'HeLLo')).toBe('KhOOr');
})