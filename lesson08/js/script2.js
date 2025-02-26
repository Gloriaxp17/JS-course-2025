`use strict`
//2

if (confirm(`Почати тестування?`)) {
    function getMinDay(visitorsQarray) {
        let min = visitorsQarray[0];


        for (let i = 0; i < visitorsQarray.length; i++) {
            if (visitorsQarray[i] < min) {
                min = visitorsQarray[i];
            }
        }

        let minIndexArray = [];


        for (let i = 0; i < visitorsQarray.length; i++) {
            if (visitorsQarray[i] === min) {
                minIndexArray.push(i);
            }
        }

        return minIndexArray;
    }
    //2
    function getDaysLess20(visitersQarray) {
        let less20index = [];
        for (let i = 0; i < visitersQarray.length; i++) {
            if (visitersQarray[i] < 20) {
                less20index.push(i);
            }
        }
        return less20index
    }
    //3
    function getSumOfVisitors(visitorsQarray) {
        let workDaysSum = 0;
        let weekendDaysSum = 0;

        for (let i = 0; i < visitorsQarray.length; i++) {
            if (i % 7 < 5) {
                workDaysSum += visitorsQarray[i];
            } else {
                weekendDaysSum += visitorsQarray[i];
            }
        }

        return { workDaysSum, weekendDaysSum };
    }


    const visitorsQarray = [12, 34, 56, 78, 9, 13, 43];

    console.log(getSumOfVisitors(visitorsQarray));




}
