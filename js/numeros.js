let a = 5, 
    b = 2, 
    resultado = 0;

resultado = a + b;

resultado = a - b;

resultado = a * b;

resultado = a / b;

//modulo 
resultado = a % b;

// potencia (a=base y b=exponente)
resultado = a ** b;

//---------------------------------------
// Orden de precedencia

resultado = 2 + 2 * 5;

resultado = (2 + 2) * 5;

resultado = (2 + 2) * 5 / (2 + 3);
resultado = (4) * 5 / (5);
resultado = (20) / (5);

//----------------------------------------

a = 10
a += 5; // a = a + 5;

a -= 5; // a = a - 5;

a *= 5; // a = a * 5;

a /= 5; // a = a / 5;

a %= 5; // a = a % 5;

a **= 5; // a = a ** 5;
console.log(a);