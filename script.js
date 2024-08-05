// TASK 1 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Butun son berilgan. Agar, berilgan son musbat bo'lsa, 1 ga oshirilsin, aks holda o' zgartrilmasin. Hosil bo'lgan sonni ekranga chiqaruvchi programma 
// tuzilsin.


// let num = +prompt('Son kiriting');

// if (!isNaN(num)) {
//     if (num > 0) {
//         console.log(num += 1);
//     } else {
//         console.log(num);
//     }
// } else {
//     console.log(`Siz string ma'lumot turida ma'lumot kiritdingiz!`);
// }


// TASK 2 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Butun son berilgan. Agar, berilgan son musbat bolsa, 1 ga oshiring, aks holda 2 ga kamaytiring. Hosil bo'lgan sonni ekranga chiqaruvchi programma 
// tuzilsin.

// let num = Number(prompt(`Son kiriting`));

// if (isNaN(num)) {
//     console.log(`Siz string ma'lumot turida ma'lumot kiritdingiz!`);
// } else {
//     if (num > 0) {
//         console.log(num = num + 1);
//     } else {
//         console.log(num = num - 2);
//     }
// }


// TASK 3 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Butun son berilgan. Agar, berilgan son musbat bolsa, 1 ga oshiring, agar manfiy bo' lsa 2 ga kamaytiring. Agar 0 ga teng bolsa, 10 ni o'zlashtirsin.
// Hosil bolgan sonni ekranga chiqaruvchi programma tuzilsin.

// let num = +prompt(`Son kiriting`);

// if (!isNaN(num)) {
//     if (num > 0) {
//         console.log(num += 1);
//     } else if (num < 0) {
//         console.log(num -= 2);
//     } else {
//         console.log(num = 10);
//     }
// } else {
//     console.log(`Siz string ma'lumot turida ma'lumot kiritdingiz!`);
// }


// TASK 4 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.

// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);
// let c = +prompt(`Uchinchi sonni kiriting`);

// if (isNaN(a && b && c)) {
//     console.log(`Siz string ma'lumot turida ma'lumot kiritdingiz!`);
// } else {
//     if (a > 0 && b > 0 && c > 0) {
//         console.log(`Kiritilgan sonlarning uchalasi ham musbat`);
//     } else if (a > 0 && b > 0 || b > 0 && c > 0 || a > 0 && c > 0) {
//         console.log(`Kiritilgan sonlarning ikkitasi musbat sonlar`);
//     } else if (a > 0 || b > 0 || c > 0) {
//         console.log(`Kiritilgan sonlarning bittasi musbat son`);
//     } else if (a == 0 || b == 0 || c == 0) {
//         console.log(`Kiritilgan sonlarning barchasi 0 ga teng`);
//     } else {
//         console.log(`Kiritilgan sonlarning uchalasi ham manfiy`);
//     }
// }


// TASK 5 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Uchta butun son berilgan. Shu sonlar orasidan nechta musbat va manfiy son borigini aniqlovchi programma tuzilsin.

// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);
// let c = +prompt(`Uchinchi sonni kiriting`);

// if (!isNaN(a && b && c)) {
//     if (a > 0 && b > 0 && c > 0) {
//         console.log(`Kiritilgan sonlarning uchalasi ham musbat`);
//     } else if (a < 0 && b < 0 && c < 0) {
//         console.log(`Kiritilgan sonlarning uchalasi ham manfiy`);
//     } else if (a == 0 && b == 0 && c == 0) {
//         console.log(`Kiritilgan sonlarning uchalasi ham 0 ga teng`);
//     }

//     else if (a == 0 && b == 0 && c > 0 || a == 0 && c == 0 && b > 0 || b == 0 && c == 0 && a > 0) {
//         console.log(`Kiritilgan sonlarning bittasi musbat, qolgan ikkitasi esa 0 ga teng.`);
//     } else if (a == 0 && b == 0 && c < 0 || a == 0 && c == 0 && b < 0 || b == 0 && c == 0 && a < 0) {
//         console.log(`Kiritilgan sonlarning bittasi manfiy, qolgan ikkitasi esa 0 ga teng.`);
//     }

//     else if (a > 0 && b > 0 && c == 0 || b > 0 && c > 0 && a == 0 || a > 0 && c > 0 && b == 0) {
//         console.log(`Kiritilgan sonlarning ikkitasi musbat, qolgan bittasi esa 0 ga teng`)
//     } else if (a < 0 && b < 0 && c == 0 || b < 0 && c < 0 && a == 0 || a < 0 && c < 0 && b == 0) {
//         console.log(`Kiritilgan sonlarning ikkitasi manfiy, qolgan bittasi esa 0 ga teng`)
//     }

//     else if (a > 0 && b > 0 || a > 0 && c > 0 || b > 0 && c > 0) {
//         console.log(`Kiritilgan sonlarning ikkitasi musbat, qolgan bittasi esa manfiy`);
//     } else /* if (a > 0 || b > 0 || c > 0)*/ {
//         console.log(`Kiritilgan sonlarning bittasi musbat, qolgan ikkitasi esa manfiy`);
//     }
// } else {
//     console.log(`Siz string ma'lumot turida ma'lumot kiritdingiz!`);
// }


// TASK 6 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Ikkita butun son berigan. Shu sonlarning kattasini aniqlovchi programma tuzilsin.

// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);

// if (!isNaN(a && b)) {
//     if (a > b) {
//         console.log(`${a} soni katta`);
//     } else if (b > a) {
//         console.log(`${b} soni katta`);
//     } else {
//         console.log(`Sonlar bir biriga teng`);
//     }
// } else {
//     console.log(`Siz string ma'lumot turida ma'lumot kiritdingiz!`);
// }


// TASK 7 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniqlovchi programma tuzilsin.

// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);

// if (!isNaN(a && b)) {
//     if (a > b) {
//         console.log(`1`);
//     } else if (b > a) {
//         console.log(`2`);
//     } else {
//         console.log(`Sonlar bir biriga teng`);
//     }
// } else {
//     console.log(`Siz string ma'lumot turida ma'lumot kiritidingiz!`);
// }


// TASK 8 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Ikkita butun son berilgan. Shu sonlaming avval kattasini keyin kichigini ekranga chiqaruvchi programma tuzilsin.

// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);

// if (isNaN(a && b)) {
//     console.log(`Siz string ma'lumot turida ma'lumot kiritidingiz!`);
// } else {
//     if (a > b) {
//         console.log(a);
//         console.log(b);
//     } else {
//         console.log(b);
//         console.log(a);
//     }
// }


// TASK 9 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// A va B haqiqiy sonian beringan. Shu sonami shunday o'zgartirish kerakki, A son kichik B son katta bo'lsin. A va B ning qiymati ekranga chiqarilsin.

// let a = +prompt(`A sonni kiriting`); // a = 15;
// let b = +prompt(`B sonni kiriting`); // b = 10;
// let c = null;

// if (!isNaN(a && b)) {
//     if (a > b) {
//         c = a; // c = 15;
//         a = b; // a = 10;
//         b = c; // b = 15;
//         console.log(`A = ${a}`);
//         console.log(`B = ${b}`);
//     } else if (a == b) {
//         console.log(`Sonlar bir biriga teng`)
//     } else {
//         console.log(`A = ${a}`);
//         console.log(`B = ${b}`);
//     }
// } else {
//     console.log(`Siz string ma'lumot turida ma'lumot kiritdingiz!`);
// }


// TASK 10 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// A va B butun sonlari berilgan. Agar o'zgaruvchilar o'zaro teng bo'lmasa, A va B o'zgaruvchilar ularning yig'indisini o'zlashtirsin. 
// Agar teng bo'lsa, 0 ni o'zlashtirsin. A va B ning qiymati ekranga chigarilsin.

// let a = Number(prompt(`A sonni kiriting`));
// let b = Number(prompt(`B sonni kiriting`));

// if (!isNaN(a && b)) {
//     if (a != b) {
//         a += b; // a = a + b;
//         console.log(`A = ${a}`);
//         a -= b;
//         b += a; // b = b + a;
//         console.log(`B = ${b}`);
//     } else {
//         a = 0;
//         b = 0;
//         console.log(`A = ${a}`);
//         console.log(`B = ${b}`);
//     }
// } else {
//     console.log(`Siz string ma'lumot turida ma'lumot kiritdingiz!`);
// }


