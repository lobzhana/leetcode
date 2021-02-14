import * as color from 'chalk';

const assert = {
  equals: (actual: any, expected: any) => {
    if (actual === expected) {
      const message = `${color.greenBright(
        'assertion completed, actual: '
      )} ${color.greenBright(`${actual}`)} ${color.greenBright(
        'equal to expected:'
      )} ${color.greenBright(`${expected}`)}`;

      console.log(message);
    } else {
      const message = `${color.redBright(
        'assertion failed, actual: '
      )} ${color.blueBright(`${actual}`)} ${color.redBright(
        'does not equal to:'
      )} ${color.greenBright(`${expected}`)}`;

      console.log(message);
    }
  },
};

export default assert;
