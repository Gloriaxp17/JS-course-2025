`use strict`
//2

if (confirm(`Почати тестування?`)) {
    //1) загальний прибуток кожного масиву за тиждень;
    function sumWeeksProfit(shops) {
        let sum = 0;
        for (let i = 0; i < shops.length; i++) {
            for (let j = 0; j < shops[i].length; j++) {
                for (let n = 0; n < shops[i][j].length; n++) {
                    sum += shops[i][j][n];
                }
            }
        }
        return sum;
    }
    //2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за
    //вівторок, і т.д.);
    //2.2
    function sumProfitByDays(shops, dayIndex) {
        let sum = 0;
        for (let i = 0; i < shops.length; i++) {
            for (let j = 0; j < shops[i].length; j++) {
                sum += shops[i][j][dayIndex];
            }
        }
        return sum;
    }
    let profits = [
        [[100, 200, 150, 130, 170, 90, 120], [110, 210, 160, 140, 180, 95, 125]],
        [[90, 180, 140, 120, 160, 85, 110], [100, 190, 150, 130, 170, 90, 120]]
    ];

    console.log(sumProfitByDays(profits, 0));
    console.log(sumProfitByDays(profits, 1));
    //-------------Or-----------
    function sumProfitByDays(shops, dayIndex) {
        return shops.reduce((total, shop) =>
            total + shop.reduce((weekSum, week) => weekSum + week[dayIndex], 0), 0
        );
    }


    console.log(sumProfitByDays(profits, 0));

    //3) загальний прибуток за робочі дні

    function profitWorksDays(shops) {
        let sum = 0;
        for (let i = 0; i < shops.length; i++) {
            for (let j = 0; j < 5; j++) {
                sum += shops[i][j];
            }
        }
        return sum;
    }

    let shops = [
        [45, 56, 76, 23, 78, 98, 87],
        [12, 54, 87, 90, 76, 45, 34]
    ];

    console.log(profitWorksDays(shops));
    //4) загальний прибуток за вихідні дні

    function profitWeekends(shops) {
        let sum = 0;
        let rowNum = shops.length;
        let colNum = shops[0].length;

        for (let i = 0; i < rowNum; i++) {
            for (let j = 5; j < colNum; j++) {
                sum += shops[i][j];
            }
        }
        return sum;
    }



    console.log(profitWeekends(shops));
    //5) максимальний прибуток за середу

    function maxProfitWednesday(shops) {
        let max = -Infinity;

        for (let i = 0; i < shops.length; i++) {
            max = Math.max(max, shops[i][2]);
        }

        return max;
    }


    console.log(maxProfitWednesday(shops));
    //6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200

    function createNewArrGreater200(shops) {
        return shops.flat(1).filter(item => item > 200);
    }


    console.log(createNewArrGreater200(shops));
    //7) відсортувати кожен тиждень за зростанням

    function sortWeeksToLonger(shops) {
        shops.forEach((week) => {
            week.sort((a, b) => a - b);
        });
        return shops;
    }
    //8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при
    // порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків

    function sortWeeks(shops) {

        for (let week of shops) {
            for (let day of week) {
                day.sort((a, b) => a - b);
            }
        }


        shops.sort((weekA, weekB) => {
            const maxA = Math.max(...weekA.flat());
            const maxB = Math.max(...weekB.flat());
            return maxB - maxA;
        });

        return shops;
    }
    //9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків
    //треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з
    //елементів повинен іти раніше).

    function compareWeeksSum(shops) {
        shops.sort((weekA, weekB) => {
            const sumA = weekA.reduce((sum, day) => sum + day, 0);
            const sumB = weekB.reduce((sum, day) => sum + day, 0);
            return sumB - sumA;
        });

        return shops;
    }

}
