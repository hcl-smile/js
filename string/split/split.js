function split() {
  const that = this + '';
  const args = arguments;
  const arr = [];

  if (!args) {
    for (let i = 0; i < that.length; i++) {
      arr[i] = str[i];
    }

    return arr;
  }

  if (typeof args[0] !== 'string') {
    return new Error('arguments must be string');
  }
}

export default split;
