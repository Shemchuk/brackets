module.exports = function check(str, bracketsConfig) {

  function isOpenBracket(char) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (char == bracketsConfig[i][0]) {
        return i;
      }
    };
    return -1;
  }

  function isCloseBracket(char) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (char == bracketsConfig[i][1]) {
        return i;
      }
    };
    return -1;
  }

  let stack = [];
  for (let i = 0; i < str.length; i++) {

    let indexOpenBracket = isOpenBracket(str[i]);
    let indexCloseBracket = isCloseBracket(str[i]);

    //если открывающая и закрывающая скобки одинаковы
    if (indexOpenBracket > -1 && indexCloseBracket > -1 && bracketsConfig[indexOpenBracket][0] == bracketsConfig[indexCloseBracket][1]) {
      //если предыдущая скобка в стеке равна найденной в str
      if (stack[stack.length - 1] === str[i]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else { //если открывающая и закрывающая скобки различные
      if (indexOpenBracket > -1) {
        stack.push(str[i]);
      }

      if (indexCloseBracket > -1) {
        let bracket = stack.pop();
        if (isOpenBracket(bracket) != indexCloseBracket) {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}
