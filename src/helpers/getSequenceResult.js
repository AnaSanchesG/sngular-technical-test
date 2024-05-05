const getTriangularSequence = (number) => {
  console.log(`valor entrada: ${number}`);

    if (number <= 0 || typeof number !== 'number') {
        return 0;
      }

  let triangular = (number * (number + 1)) / 2;

  return triangular;
};

const getFibonnaciSequence = (number) => {
  console.log(`valor entrada: ${number}`);

  if (number <= 1 || typeof number !== 'number') {
    return 0;
  }

  let prevValue = 0;
  let lastState = 1;
  let fibonacci = 0;

  for (let i = 2; i <= number; i++) {
    fibonacci = prevValue + lastState;
    prevValue = lastState;
    lastState = fibonacci;
  }

  return fibonacci;
};

const isPrime = (number) => {

  if (number <= 1) return false;

  for (let i = 2; i <= number - 1; i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
};

const getPrimeSequence = (number) => {
  console.log(`valor entrada: ${number}`);

  const primeArray = [];
  let prime;

  if(number <= 1 || typeof number !== 'number'){
    return 0;
  }

  for (let i = 1; primeArray.length < number; i++) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }

  prime = primeArray[primeArray - 1];

  return prime;
};

export const getSequenceResult = (number) => {
  let result = 0;

  const triangular = getTriangularSequence(number - 1);
  const fibonacci = getFibonnaciSequence(number + 2);
  const prime = getPrimeSequence(number - 1);

  console.log(`Valores individuales: ${ triangular} ${fibonacci} ${prime}`)

  result = 4*triangular - 2*prime + fibonacci;

  return result;
};