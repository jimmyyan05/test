// 基本的計算機功能
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("不能除以零！");
  }
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
