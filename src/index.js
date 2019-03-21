module.exports = function check(str, bracketsConfig) {

  function getBracketsAmountOfType(bracketType, str) {
    let bracketAmount = 0;
    let strLength = str.length;
    for (let i = 0; i < strLength; ++i) {
      if (str[i] == bracketType) {
        bracketAmount++;
      }
    }

    return bracketAmount;
  }

  function checkBracketsAmountOfType(str) {
    let checkCount = 0;
    if (getBracketsAmountOfType('(', str) == getBracketsAmountOfType(')', str)) {
      checkCount++;
    }
    if (getBracketsAmountOfType('[', str) == getBracketsAmountOfType(']', str)) {
      checkCount++;
    }
    if (getBracketsAmountOfType('{', str) == getBracketsAmountOfType('}', str)) {
      checkCount++;
    }
    if (getBracketsAmountOfType('1', str) == getBracketsAmountOfType('2', str)) {
      checkCount++;
    }
    if (getBracketsAmountOfType('3', str) == getBracketsAmountOfType('4', str)) {
      checkCount++;
    }
    if (getBracketsAmountOfType('5', str) == getBracketsAmountOfType('6', str)) {
      checkCount++;
    }
    if ((getBracketsAmountOfType('|', str) == 0) || ((getBracketsAmountOfType('|', str) % 2) == 0)) {
      checkCount++;
    }
    if ((getBracketsAmountOfType('7', str) == 0) || ((getBracketsAmountOfType('7', str) % 2) == 0)) {
      checkCount++;
    }
    if ((getBracketsAmountOfType('8', str) == 0) || ((getBracketsAmountOfType('8', str) % 2) == 0)) {
      checkCount++;
    }

    if (checkCount == 9) {
      return false;
    } else {
      return true;
    }
  }

  function chechOpenSideBracketsExistence(str) {
    let checkCount = 0;
    let rightSideBracketStrIndex = str.length - 1;
    if (str[0] != ')') {
      checkCount++;
    }
    if (str[0] != ']') {
      checkCount++;
    }
    if (str[0] != '}') {
      checkCount++;
    }
    if (str[0] != '2') {
      checkCount++;
    }
    if (str[0] != '4') {
      checkCount++;
    }
    if (str[0] != '6') {
      checkCount++;
    }
    if (str[rightSideBracketStrIndex] != '(') {
      checkCount++;
    }
    if (str[rightSideBracketStrIndex] != '[') {
      checkCount++;
    }
    if (str[rightSideBracketStrIndex] != '{') {
      checkCount++;
    }
    if (str[rightSideBracketStrIndex] != '1') {
      checkCount++;
    }
    if (str[rightSideBracketStrIndex] != '3') {
      checkCount++;
    }
    if (str[rightSideBracketStrIndex] != '5') {
      checkCount++;
    }
    if (checkCount == 12) {
      return false;
    } else {
      return true;
    }
  }

  function checkMultidirectionalBrackets(str) {
    let checkCount = 0;
    let uplimit = str.length - 1;
    for (let i = 0; i < uplimit; i++) {
      if (str[i] == '(' && str[i + 1] == ']' ||
        str[i] == '(' && str[i + 1] == '}' ||
        str[i] == '(' && str[i + 1] == '2' ||
        str[i] == '(' && str[i + 1] == '4' ||
        str[i] == '(' && str[i + 1] == '6' ||
        str[i] == '[' && str[i + 1] == ')' ||
        str[i] == '[' && str[i + 1] == '}' ||
        str[i] == '[' && str[i + 1] == '2' ||
        str[i] == '[' && str[i + 1] == '4' ||
        str[i] == '[' && str[i + 1] == '6' ||
        str[i] == '{' && str[i + 1] == ')' ||
        str[i] == '{' && str[i + 1] == ']' ||
        str[i] == '{' && str[i + 1] == '2' ||
        str[i] == '{' && str[i + 1] == '4' ||
        str[i] == '{' && str[i + 1] == '6' ||
        str[i] == '1' && str[i + 1] == ')' ||
        str[i] == '1' && str[i + 1] == ']' ||
        str[i] == '1' && str[i + 1] == '}' ||
        str[i] == '1' && str[i + 1] == '4' ||
        str[i] == '1' && str[i + 1] == '6' ||
        str[i] == '3' && str[i + 1] == ')' ||
        str[i] == '3' && str[i + 1] == ']' ||
        str[i] == '3' && str[i + 1] == '}' ||
        str[i] == '3' && str[i + 1] == '2' ||
        str[i] == '3' && str[i + 1] == '6' ||
        str[i] == '5' && str[i + 1] == ')' ||
        str[i] == '5' && str[i + 1] == ']' ||
        str[i] == '5' && str[i + 1] == '}' ||
        str[i] == '5' && str[i + 1] == '2' ||
        str[i] == '5' && str[i + 1] == '4') {
        checkCount++
      }
    }
    if (checkCount > 0) {
      return true;
    } else {
      return false;
    }
  }

  function getReverseBracket(bracketType) {
    switch (bracketType) {
      case '(':
        return ')';
      case ')':
        return '(';
      case '[':
        return ']';
      case ']':
        return '[';
      case '{':
        return '}';
      case '}':
        return '{';
      case '|':
        return '|';
      case 1:
        return 2;
      case 2:
        return 1;
      case 3:
        return 4;
      case 4:
        return 3;
      case 5:
        return 6;
      case 6:
        return 5;
      case 7:
        return 7;
      case 8:
        return 8;
    }
  }

  function compareTwoHalvesOfBrackets(bracketsLine) {
    let leftBracketsArray = [];
    let rightBracketsArray = [];
    let bracketsLineLength = bracketsLine.length;
    let bracketsLineHalfLength = bracketsLine.length / 2;
    let bracketMatchCount = 0;

    for (let i = 0; i < bracketsLineLength; i++) {
      if ((bracketsLine[i] == '(') ||
        (bracketsLine[i] == '[') ||
        (bracketsLine[i] == '{') ||
        (bracketsLine[i] == '|') ||
        (bracketsLine[i] == 1) ||
        (bracketsLine[i] == 3) ||
        (bracketsLine[i] == 5) ||
        (bracketsLine[i] == 7) ||
        (bracketsLine[i] == 8)) {
        leftBracketsArray.push(bracketsLine[i]);
      } else {
        rightBracketsArray.unshift(bracketsLine[i]);
      }
    }

    for (let i = 0; i < bracketsLineHalfLength; i++) {
      if (leftBracketsArray[i] == getReverseBracket(rightBracketsArray[i])) {
        bracketMatchCount++;
      }
    }

    if (bracketMatchCount == bracketsLineHalfLength) {
      return true;
    } else {
      return false;
    }

  }

  if (checkBracketsAmountOfType(str)) {
    return false;
  }

  if (chechOpenSideBracketsExistence(str)) {
    return false;
  }

  if (checkMultidirectionalBrackets(str)) {
    return false;
  }

  switch ([].concat(bracketsConfig).join(',')) {
    case '(,)':
      {
        return true;
      }
    case '(,),[,]':
      {
        let uplimit = str.length - 1;
        let startLineIndex = 0;
        let tempLine;
        for (let i = 0; i < uplimit; i++) {
          if (str[i] == ')' && str[i + 1] == '(' ||
            str[i] == ')' && str[i + 1] == '[' ||
            str[i] == ']' && str[i + 1] == '[' ||
            str[i] == ']' && str[i + 1] == '(') {
            tempLine = str.slice(startLineIndex, i + 1);
            startLineIndex = i + 1;
            if (checkBracketsAmountOfType(tempLine)) {
              return false;
            }
            if (!compareTwoHalvesOfBrackets(tempLine)) {
              return false;
            }
          }
        }
        return true;
      }
    case '(,),[,],{,}':
      {
        let uplimit = str.length - 1;
        let startLineIndex = 0;
        let tempLine;
        for (let i = 0; i < uplimit; i++) {
          if (str[i] == ')' && str[i + 1] == '(' ||
            str[i] == ')' && str[i + 1] == '[' ||
            str[i] == ')' && str[i + 1] == '{' ||
            str[i] == ']' && str[i + 1] == '[' ||
            str[i] == ']' && str[i + 1] == '(' ||
            str[i] == ']' && str[i + 1] == '{' ||
            str[i] == '}' && str[i + 1] == '{' ||
            str[i] == '}' && str[i + 1] == '[' ||
            str[i] == '}' && str[i + 1] == '(') {
            tempLine = str.slice(startLineIndex, i + 1);
            startLineIndex = i + 1;
            if (checkBracketsAmountOfType(tempLine)) {
              return false;
            }
            if (!compareTwoHalvesOfBrackets(tempLine)) {
              return false;
            }
          }
        }
        return true;
      }
    case '|,|':
      {
        return true;
      }
    case '(,),|,|':
      {
        let strUpLimit = str.length;
        let checkCount = 0;
        let tempArray;
        let openClosedFlag = 'open';
        let tempArrayStartIndex;
        for (let i = 0; i < strUpLimit; i++) {
          if (openClosedFlag == 'open' && str[i] == '(') {
            openClosedFlag = 'closed';
            tempArrayStartIndex = i;
          }
          if (openClosedFlag == 'closed' && str[i] == ')') {
            openClosedFlag = 'open';
            tempArray = str.slice(tempArrayStartIndex, i + 1);
            for (let i = 0; i < tempArray.length; i++) {
              if (tempArray[i] == '|') {
                checkCount++;
              }
            }
            if (checkCount % 2 != 0) {
              return false;
            }
          }
        }
        return true;
      }
    case '1,2,3,4,5,6,7,7,8,8':
      {
        let strUpLimit = str.length;
        let checkCount = 0;
        let tempArray;
        let openClosedFlag = 'open';
        let tempArrayStartIndex;
        for (let i = 0; i < strUpLimit; i++) {
          if (openClosedFlag == 'open' && str[i] == '1') {
            openClosedFlag = 'closed';
            tempArrayStartIndex = i;
          }
          if (openClosedFlag == 'closed' && str[i] == '2') {
            openClosedFlag = 'open';
            tempArray = str.slice(tempArrayStartIndex, i + 1);
            for (let i = 0; i < tempArray.length; i++) {
              if (tempArray[i] == '7') {
                checkCount++;
              }
            }
            if (checkCount % 2 != 0) {
              return false;
            }
          }
        }
        openClosedFlag = 'open';
        checkCount = 0;
        for (let i = 0; i < strUpLimit; i++) {
          if (openClosedFlag == 'open' && str[i] == '3') {
            openClosedFlag = 'closed';
            tempArrayStartIndex = i;
          }
          if (openClosedFlag == 'closed' && str[i] == '4') {
            openClosedFlag = 'open';
            tempArray = str.slice(tempArrayStartIndex, i + 1);
            for (let i = 0; i < tempArray.length; i++) {
              if (tempArray[i] == '7') {
                checkCount++;
              }
            }
            if (checkCount % 2 != 0) {
              return false;
            }
          }
        }
        openClosedFlag = 'open';
        checkCount = 0;
        for (let i = 0; i < strUpLimit; i++) {
          if (openClosedFlag == 'open' && str[i] == '5') {
            openClosedFlag = 'closed';
            tempArrayStartIndex = i;
          }
          if (openClosedFlag == 'closed' && str[i] == '6') {
            openClosedFlag = 'open';
            tempArray = str.slice(tempArrayStartIndex, i + 1);
            for (let i = 0; i < tempArray.length; i++) {
              if (tempArray[i] == '7') {
                checkCount++;
              }
            }
            if (checkCount % 2 != 0) {
              return false;
            }
          }
        }
        openClosedFlag = 'open';
        checkCount = 0;
        for (let i = 0; i < strUpLimit; i++) {
          if (openClosedFlag == 'open' && str[i] == '1') {
            openClosedFlag = 'closed';
            tempArrayStartIndex = i;
          }
          if (openClosedFlag == 'closed' && str[i] == '2') {
            openClosedFlag = 'open';
            tempArray = str.slice(tempArrayStartIndex, i + 1);
            for (let i = 0; i < tempArray.length; i++) {
              if (tempArray[i] == '8') {
                checkCount++;
              }
            }
            if (checkCount % 2 != 0) {
              return false;
            }
          }
        }
        openClosedFlag = 'open';
        checkCount = 0;
        for (let i = 0; i < strUpLimit; i++) {
          if (openClosedFlag == 'open' && str[i] == '3') {
            openClosedFlag = 'closed';
            tempArrayStartIndex = i;
          }
          if (openClosedFlag == 'closed' && str[i] == '4') {
            openClosedFlag = 'open';
            tempArray = str.slice(tempArrayStartIndex, i + 1);
            for (let i = 0; i < tempArray.length; i++) {
              if (tempArray[i] == '8') {
                checkCount++;
              }
            }
            if (checkCount % 2 != 0) {
              return false;
            }
          }
        }
        openClosedFlag = 'open';
        checkCount = 0;
        for (let i = 0; i < strUpLimit; i++) {
          if (openClosedFlag == 'open' && str[i] == '5') {
            openClosedFlag = 'closed';
            tempArrayStartIndex = i;
          }
          if (openClosedFlag == 'closed' && str[i] == '6') {
            openClosedFlag = 'open';
            tempArray = str.slice(tempArrayStartIndex, i + 1);
            for (let i = 0; i < tempArray.length; i++) {
              if (tempArray[i] == '8') {
                checkCount++;
              }
            }
            if (checkCount % 2 != 0) {
              return false;
            }
          }
        }
        return true;
      }
    case '(,),[,],{,},|,|':
      {
        let strUpLimit = str.length;
        let checkCount = 0;
        let tempArray;
        let openClosedFlag = 'open';
        let tempArrayStartIndex;
        for (let i = 0; i < strUpLimit; i++) {
          if (openClosedFlag == 'open' && str[i] == '(') {
            openClosedFlag = 'closed';
            tempArrayStartIndex = i;
          }
          if (openClosedFlag == 'closed' && str[i] == ')') {
            openClosedFlag = 'open';
            tempArray = str.slice(tempArrayStartIndex, i + 1);
            for (let i = 0; i < tempArray.length; i++) {
              if (tempArray[i] == '|') {
                checkCount++;
              }
            }
            if (checkCount % 2 != 0) {
              return false;
            }
          }
        }
        openClosedFlag = 'open';
        checkCount = 0;
        for (let i = 0; i < strUpLimit; i++) {
          if (openClosedFlag == 'open' && str[i] == '{') {
            openClosedFlag = 'closed';
            tempArrayStartIndex = i;
          }
          if (openClosedFlag == 'closed' && str[i] == '}') {
            openClosedFlag = 'open';
            tempArray = str.slice(tempArrayStartIndex, i + 1);
            for (let i = 0; i < tempArray.length; i++) {
              if (tempArray[i] == '|') {
                checkCount++;
              }
            }
            if (checkCount % 2 != 0) {
              return false;
            }
          }
        }
        openClosedFlag = 'open';
        checkCount = 0;
        for (let i = 0; i < strUpLimit; i++) {
          if (openClosedFlag == 'open' && str[i] == '[') {
            openClosedFlag = 'closed';
            tempArrayStartIndex = i;
          }
          if (openClosedFlag == 'closed' && str[i] == ']') {
            openClosedFlag = 'open';
            tempArray = str.slice(tempArrayStartIndex, i + 1);
            for (let i = 0; i < tempArray.length; i++) {
              if (tempArray[i] == '|') {
                checkCount++;
              }
            }
            if (checkCount % 2 != 0) {
              return false;
            }
          }
        }
        return true;
      }
  }
}
