const calculator = require("./calculator");

describe("計算機測試", () => {
  // 測試加法
  test("加法功能測試", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(0, 0)).toBe(0);
  });

  // 測試減法
  test("減法功能測試", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(1, 1)).toBe(0);
    expect(calculator.subtract(-1, -1)).toBe(0);
  });

  // 測試乘法
  test("乘法功能測試", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
    expect(calculator.multiply(0, 5)).toBe(0);
  });

  // 測試除法
  test("除法功能測試", () => {
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(0, 5)).toBe(0);
    expect(() => calculator.divide(5, 0)).toThrow("不能除以零！");
  });
});
