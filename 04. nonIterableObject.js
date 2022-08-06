// На основе неперебираемого объекта {from: 0, to: 10} необходимо получить перебираемый, а именно такой, по которому можно итерироваться оператором for..of. Какие для этого есть способы в современном JS (ES6+)?

const nonIterableObjFirst = {
  'from': 0,
  'to': 10
};

// 1. Самое простое - использование Object.keys, Object.values, Object.entries:

for (const key of Object.keys(nonIterableObjFirst)) {
  console.log(nonIterableObjFirst[key]);
}

for (const value of Object.values(nonIterableObjFirst)) {
  console.log(value);
}

for (const [key, value] of Object.entries(nonIterableObjFirst)) {
  console.log(key, ":", value);
}

// 2. Можно добавить метод [Symbol.Iterator] в объект:
// В данном случае получим только записанные значения:

const nonIterableObjSecond = {
  'from': 5,
  'to': 15
};

nonIterableObjSecond[Symbol.iterator] = function () {
  const totalValues = Object.keys(this).length;
  const keys = Object.keys(this);

  let index = 0;
  return {
    next: () => {
      if (index <= totalValues - 1) {
        return { done: false, value: this[keys[index++]] };
      } else {
        return { done: true };
      }
    }
  };
};

console.log('Items in nonIterableObjSecond:');
const answerSecond = [];
for (const value of nonIterableObjSecond) {
  answerSecond.push(value);
}
console.log(answerSecond);

// 2. Можно добавить метод [Symbol.Iterator] в объект:
// В данном случае получим все значения from...to:
const nonIterableObjThird = {
  'from': 25,
  'to': 35
};

nonIterableObjThird[Symbol.iterator] = function () {
  const maxValue = this.to;
  let currentValue = this.from;

  return {
    next: () => {
      if (currentValue <= maxValue) {
        return { done: false, value: currentValue++ };
      } else {
        return { done: true };
      }
    }
  };
};

console.log(`From ${nonIterableObjThird.from} to ${nonIterableObjThird.to} consequently:`);
const answerThird = [];
for (const value of nonIterableObjThird) {
  answerThird.push(value);
}
console.log(answerThird);