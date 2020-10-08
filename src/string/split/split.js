function split() {
  const that = this + '';
  const args = arguments;
  const arr = [];

  // 不传参
  if (!args.length) {
    for (let i = 0; i < that.length; i++) {
      arr[i] = str[i];
    }

    return arr;
  }

  if (typeof args[0] !== 'string') {
    return new Error('arguments must be string');
  }

  if (args.length > 1) {
    return new Error('Error');
  }

  const arg = args[0];
  const res = [];
  let prev = 0;

  for (let i = 0; i < that.length; i++) {
    if (that[i] === arg) {
      res.push(that.substring(prev, i));

      prev = i + 1;
    }
  }

  if (prev <= that.length) {
    res.push(that.substring(prev, that.length));
  }

  return res;
}

export default split;
