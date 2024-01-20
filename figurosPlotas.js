// Naudojant šios uždoties formatą, išsirinkti kitą ir apskaičiuoti jos plotą, atlikti būtinus patikrinimus ir pateikti ataskymą
//trikampis (tema:funkcijos)

// 1. Prašykite funckiją, kuri apskaičiuoja trikampio plotą, kai duotos trys trikampio kraštinės.

// Duota Kraštinių a, b, c ilgiai, surašyti į masyvą.

let a = [1, 2, 3, 4, 1, ];
let b = [1, 2, 4, 5, 7];
let c = [1, 8, 8, 8, 8];

function triangleArea ( a, b, c) {
let halfTriangleArea = (a + b + c) / 2; 
let fullTriangleArea = Math.sqrt(halfTriangleArea * (halfTriangleArea - a) * (halfTriangleArea - b) * (halfTriangleArea - a));
return fullTriangleArea;
}

for (let i = 0; i < a.length; i++) {
    let fullTriangleArea = triangleArea(a[i], b[i], c[i]);
    console.log(`Triangle ${i + 1}: Area = ${fullTriangleArea.toFixed(2)}`);
};

//Parašykite funkciją, kuri patikrina, ar iš duotų trikampio kraštinių galima sudaryti trikampį.

function isTriangleCorrect(a, b, c) {

    let test1 = a + b > c;
    let test2 = a + c > b;
    let test3 = b + c > a;
 return test1 && test2 && test3;
};

for (let i = 0; i < a.length; i++) {
    let testIsATriangle = isTriangleCorrect(a[i], b[i], c[i]);
    console.log(`Triangle ${i+1}: Is a triangle? ${testIsATriangle}`)
};

// parašykite funkciją, kuri atspausdina atsakymą tokiu formatu:
// "Trikampis, kurio kraštinės a = 1, b = 1 ir c = 1, plotas yra: 1"
//arba 
//"Trikampis, kurio kraštinė a = 1, b = 9, ir c = 1, neegzistuoja."

function printTriangleInfo1(a, b, c, area) {
console.log(`Trikampis, kurio kraštinės a = ${a}, b = ${b} ir c = ${c}, plotas yra: ${area}`)
};

printTriangleInfo1(1,1,1,1);

function printTriangleInfo2(a, b, c) {
    console.log(`Trikampis, kurio kraštinės a = ${a}, b = ${b} ir c = ${c}, negzistuoja.`)
    };

   printTriangleInfo2(1, 9, 1);

//ARBA

function printTriangleInfo3(a, b, c, area) {
    if (area) {
        console.log(`Trikampis, kurio kraštinės a = ${a}, b = ${b} ir c = ${c}, plotas yra: ${area}`);
    } else {console.log(`Trikampis, kurio kraštinės a = ${a}, b = ${b} ir c = ${c}, negzistuoja.`);
}
};

printTriangleInfo3(1,1,1,1);
printTriangleInfo3(1, 9, 1);
