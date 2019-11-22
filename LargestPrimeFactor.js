function largestPrimeFactor (n) {

  let i = 2;
  let numFact = n;
  let primeFactors = [];

      while(numFact != 1) {
            if(numFact % i == 0){
              numFact /= i;
              primeFactors.push(i);
              i = 2;
          } else {
              i++;
          }
      }
    let largest = primeFactors[primeFactors.length - 1];

  console.log(largest);
  console.log(primeFactors);
}
