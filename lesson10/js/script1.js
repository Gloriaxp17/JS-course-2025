`use srtrict`

// if (confirm(`Почати тестування?`)) { 
// }

if (confirm(`Почати тестування?`)) {
    //Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
    let ar = [];

    for (let i = 0; i < 12; i++) {
        ar.push(Math.floor(1 + Math.random() * 10000));
    }

    console.log(ar);
    //-----------------------------------------------------
    //1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
    let numbers = [23, 456, 6543, 77, 9087, 1000, 487, 421, 2850, 65];
    let numbersGret1000 = numbers.filter((number) => number > 1000);
    console.log(numbersGret1000);
    //--------------------------------------------------------------
    //2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
    let arr = [23, 456, 6543, 77, 9087, 1000, 487, 421, 2850, 65];
    let indexGreat1000 = [];

    arr.forEach((number, index) => {
        if (number > 1000) {
            indexGreat1000.push(index);
        }
    });

    console.log(indexGreat1000);
    //---------------------------------------------------------------------------
    //3)Сформувати список з тих цін, які більші за попереднє значення

    let biggerThanPrevious = [];

    arr.forEach((number, index) => {
        if (index > 0 && number > arr[index - 1]) {
            biggerThanPrevious.push(number);
        }
    });

    console.log(biggerThanPrevious);
    //----------------------------------------------------------------------
    //4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

    let maxNumber = Math.max(...arr);

    let percentToMax = arr.map((number) => (number / maxNumber) * 100);

    console.log(percentToMax);
    //---------------------------------------------------------------------------
    //5)Підрахувати кількість змін цін

    let pricesChanges = 0;

    arr.forEach((number, index) => {
        if (index > 0 && number !== arr[index - 1]) {
            pricesChanges++;
        }
    });

    console.log(pricesChanges);
    //-----------------------------------------------------------
    //6)Визначити, чи є ціна, що менше 1000

    let someLess1000 = arr.some((number) => number < 1000);
    console.log(someLess1000);
    //--------------------------------------------------
    //7)Визначати, чи усі ціни більше за 1000

    let everyGreat1000 = arr.every((number) => number > 1000);
    console.log(everyGreat1000);
    //--------------------------------------------------------------------------
    //8)Підрахувати кількість цін, що більше за 1000

    let countGreaterThan1000 = arr.filter((number) => number > 1000).length;
    console.log(countGreaterThan1000);
    //------------------------------------------------------------------
    //9)Підрахувати суму цін, що більше за 1000


    let sumNumbersGreater1000 = arr.reduce((acc, num) => {
        if (num > 1000) {
            return acc + num;
        }
        return acc;
    }, 0);

    console.log(sumNumbersGreater1000);
    //---------------------------------------------------------
    //10)Знайти першу ціну, що більше за 1000


    let greaterThan1000num = arr.find((num) => num > 1000);

    console.log(greaterThan1000num);
    //-------------------------------------------------------------------------
    //11)Знайти індекс першої ціни, що більше за 1000


    let indexGreater1000num = arr.findIndex((num) => num > 1000);

    console.log(indexGreater1000num);
    //--------------------------------------------------------------------------
    //12)Знайти останню ціну, що більше за 1000


    let lastGreaterThan1000 = arr.findLast((num) => num > 1000);

    console.log(lastGreaterThan1000);
    //-----------------------------------------------------------------------------------
    //13)Знайти індекс останньої ціни, що більше за 1000



    let lastIndexGreater1000 = arr.findLastIndex((num) => num > 1000);

    console.log(lastIndexGreater1000);




}

















