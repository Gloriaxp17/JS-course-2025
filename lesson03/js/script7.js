`use strict`

// 7
// номер місяця
const numberOfSeason = parseInt(prompt("Введіть число місяця (1 - 12)"));
switch (numberOfSeason) {
    case 1:
    case 2:
    case 12:
        document.write(` зима`);
        break;
    case 3:
    case 4:
    case 5:
        document.write(` весна`);
        break;
    case 6:
    case 7:
    case 8:
        document.write(` літо`);
        break;
    case 9:
    case 10:
    case 11:
        document.write(` осінь`);
        break;
    default:
        document.write(` такої пори року не існує`);
}

