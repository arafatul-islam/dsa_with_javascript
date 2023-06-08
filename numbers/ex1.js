// modular exponentiation.
// Given three numbers x, y, and p, compute (xˆy) % p. (This is
//     modular exponentiation.)
//     Here, x is the base, y is exponent, and p is the modulus.
//     Modular exponentiation is a type of exponentiation performed
//     over a modulus, which is useful in computer science and used in
//     the field of public-key encryption algorithms.

// const modularExponentiation = (base, exponent, mod) => {
//   return Math.pow(base, exponent) % mod;
// };

// console.log(modularExponentiation(14, 4, 1));

// for larger exponent the above code will not work

const modularExponentiation = (base, exponent, modulus) => {
  if (modulus == 1) return 0;

  let value = 1;

  for (let i = 0; i < exponent; i++) {
    value = (value * base) % modulus;
  }

  return value;
};

console.log(modularExponentiation(14, 1035, 5));
