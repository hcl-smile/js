function eachString(str, start, end) {
  let resStr = '';
  start = start || 0;
  end = end || str.length;

  for (let i = start; i < end; i++) {
    resStr += str[i];
  }

  return resStr;
}

function substring() {
  const that = this + '';
  const args = arguments;

  if (args.length === 1) {
    // 传入一个参数
    const arg = args[0];

    if (isNaN(Number(arg))) {
      // 传入的参数非数字
      return that;
    } else {
      return eachString(that, Number(arg));
    }
  } else if (args.length === 2) {
    // 传入参数为2
    let start = isNaN(Number(args[0])) ? 0 : args[0];
    let end = isNaN(Number(args[1])) ? 0 : args[1];

    // 开始位置大于结束位置
    if (start > end) {
      const _start = start;
      start = end;
      end = _start;

      return eachString(that, start, end);
    }

    // 开始位置等于结束位置
    if (start === end) {
      return eachString(that, start);
    }

    return eachString(that, start, end);
  }

  return that;
}

export default substring;
