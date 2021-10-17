//Task i
const fitst = (a, b, c) => {
  return second(a) + second(b) === second(c);
};
const second = (num) => {
  return third(num, num);
};
const third = (num1, num2) => {
  return num1 * num2;
};

//Task iv
console.log("first call");
setTimeout(() => console.log("second call"), 2000);
console.log("third call");

//Tasks v,vi,vii
let count = 0;
const colorChange = (time, color, callback, reject) => {
  count++;
  if (time < 1000) time = 1000;
  const num = Math.floor(Math.random() * 10 + 1);
  if (num > 5) {
    document.body.style.backgroundColor = color;
    console.log(count);
  } else {
    reject(count);
  }
  setTimeout(callback, time);
};

const rejectFunc = (count) =>
  console.log(`request number ${count} was rejected ☹️`);

colorChange(
  2000,
  "red",
  () => {
    colorChange(
      2000,
      "black",
      () => {
        colorChange(
          2000,
          "yellow",
          () => {
            colorChange(
              2000,
              "green",
              () => {
                colorChange(
                  2000,
                  "pink",
                  () => {
                    colorChange(
                      2000,
                      "blue",
                      () => {
                        colorChange(2000, "purple", () => {}, rejectFunc);
                      },
                      rejectFunc
                    );
                  },
                  rejectFunc
                );
              },
              rejectFunc
            );
          },
          rejectFunc
        );
      },
      rejectFunc
    );
  },
  rejectFunc
);
