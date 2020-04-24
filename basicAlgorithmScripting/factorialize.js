// Factorialize a number

function factorialize(number) {
  if (number === 0) {
    return 1;
  } else if (number < 1) {
    return -1;
  } else {
    return (number * (factorialize(number -1)));
  }
}

factorialize(5);