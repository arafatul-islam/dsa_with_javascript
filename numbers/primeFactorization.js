function primeFactorization(n) {
  // print the number of 2s that divide n
  while (n % 2 == 0) {
    console.log(2);
    n /= 2;
  }

  //   n must be odd at this point . so we can skip one element (i=i+2)
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i == 0) {
      console.log(i);
      n /= i;
    }
  }

  if (n > 2) {
    console.log(n);
  }
}

primeFactorization(100);
