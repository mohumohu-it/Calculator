'use strict'

// 変数
let plus_straight = false;
let minus_straight = false;
let multiply_straight = false;
let division_straight = false;

// 入力
const result_text = (select_elm) => {
  if (result.value === "0") {
    result.value = "";
  }
  plus_straight = false;
  minus_straight = false;
  multiply_straight = false;
  division_straight = false;
  result.value = result.value + select_elm.value;
}

// 結果(=)
const result_calculator = () => {
  if (isNaN(result.value.slice(-1)) === false) {
    result.value = new Function("return " + result.value)();
  }
}

// オールクリア
const all_clear = (select_elm) => {
  result.value = select_elm.value;
}

// 和
const plus = (select_elm) => {
  if (plus_straight) {
    return
  }
  plus_straight = true;
  result.value = result.value + select_elm.value;
}

// 差
const minus = (select_elm) => {
  if (minus_straight) {
    return
  }
  minus_straight = true;
  result.value = result.value + select_elm.value;
}

// 積
const multiply = (select_elm) => {
  if (multiply_straight || division_straight) {
    return
  }
  multiply_straight = true;
  result.value = result.value + select_elm.value;
}

// 商
const division = (select_elm) => {
  if (division_straight || multiply_straight) {
    return
  }
  division_straight = true;
  result.value = result.value + select_elm.value;
}

// パーセント
const percentage = (select_elm) => {
  if (division_straight || multiply_straight) {
    return
  }
  division_straight = false;
  multiply_straight = false;
  result.value = result.value + select_elm.value;
}

// 小数点
const decimal = (select_elm) => {
  if (isNaN(result.value.slice(-1))) {
    return;
  }
  result.value = result.value + select_elm.value;
}
