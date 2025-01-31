`use strict`
//4
// вік людини usersAge 
const usersAge = parseInt(prompt("Введіть свій вік"));
if (usersAge <= 3) {
    document.write(` Ви тоддлер`);
} else if (usersAge > 3 && usersAge < 10) {
    document.write(` Ви дитина`);
} else if (usersAge > 10 && usersAge < 16) {
    document.write(`Ви тінейджер `);
} else if (usersAge > 16 && usersAge < 40) {
    document.write(` Ви молода людина`);
} else if (usersAge > 40 && usersAge < 60) {
    document.write(` Ви доросла людина`);
} else
    document.write(`Ви зріла людина `);