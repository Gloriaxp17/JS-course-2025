`use strict`
// 6
// день тижня weeksDay
const weeksDay = parseInt(prompt("Введіть число дня тижня (1 - 7)"));
switch (weeksDay) {
    case 1:
        document.write(` понеділок`);
        break;
    case 2:
        document.write(` вівторок`);
        break;
    case 3:
        document.write(` середа`);
        break;
    case 4:
        document.write(` четвер`);
        break;
    case 5:
        document.write(` п'ятниця`);
        break;
    case 6:
        document.write(` субота`);
        break;
    case 7:
        document.write(` неділя`);
        break;
    default:
        document.write(` такого дня не існує`);
}