const countDownAndUp = (number) => {
  console.log(number);

  if (number === 0) {
    return;
  } else {
    countDownAndUp(number - 1);
  }
};

countDownAndUp(3);
