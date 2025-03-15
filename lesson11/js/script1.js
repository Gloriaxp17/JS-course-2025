`use srtrict`

// if (confirm(`Почати тестування?`)) { 
// }

if (confirm(`Почати тестування?`)) {
    //1) номери рядків від 0 до половини, стовпці від 0 до половини

    //2) номери рядків від 0 до половини, стовпці від половини до кінця

    //3)номери рядків (від половини до кінця, стовпці від 0 до половини
    function sumRegion(matrix, rowStart, rowEnd, colStart, colEnd) {
        let sum = 0;
        for (let i = rowStart; i < rowEnd; i++) {
            for (let j = colStart; j < colEnd; j++) {
                sum += matrix[i][j];
            }
        }
        return sum;
    }

    function processMatrix(matrix) {
        let n = matrix.length;
        let m = matrix[0].length;

        let sum1 = sumRegion(matrix, 0, Math.floor(n / 2), 0, Math.floor(m / 2)); // Верхній лівий кут
        let sum2 = sumRegion(matrix, 0, Math.floor(n / 2), Math.floor(m / 2), m); // Верхній правий кут
        let sum3 = sumRegion(matrix, Math.floor(n / 2), n, 0, Math.floor(m / 2)); // Нижній лівий кут
        let sum4 = sumRegion(matrix, Math.floor(n / 2), n, Math.floor(m / 2), m); // Нижній правий кут

        return { sum1, sum2, sum3, sum4 };
    }


    let matrix = [
        [1, 598, 2, 3, 4],
        [5, 6, 7, 768, 8],
        [234, 9, 10, 11, 12],
        [13, 14, 15, 16, 905]
    ];

    console.log(processMatrix(matrix));
    //4) номери рядків від половини до кінця , стовпці від половини до кінця
    function sumRegion(matrix, startRow, endRow, startCol, endCol) {
        let sum = 0;
        for (let i = startRow; i < endRow; i++) {
            for (let j = startCol; j < endCol; j++) {
                sum += matrix[i][j];
            }
        }
        return sum;
    }

    function processMatrix(matrix) {
        let n = matrix.length;
        let m = matrix[0].length;

        let sum1 = sumRegion(matrix, 0, Math.floor(n / 2), 0, Math.floor(m / 2));
        let sum2 = sumRegion(matrix, 0, Math.floor(n / 2), Math.floor(m / 2), m);
        let sum3 = sumRegion(matrix, Math.floor(n / 2), n, 0, Math.floor(m / 2));
        let sum4 = sumRegion(matrix, Math.floor(n / 2), n, Math.floor(m / 2), m);

        return { sum1, sum2, sum3, sum4 };
    }


    console.log(processMatrix(matrix));
    //5) Суму парних рядків
    function sumEvenRows(matrix) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i += 2) {
            for (let j = 0; j < matrix[0].length; j++) {
                sum += matrix[i][j];
            }
        }
        return sum;
    }
    //6) Суму непарних стовпців
    function sumOddCol(matrix) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 1; j < matrix[0].length; j += 2) {
                sum += matrix[i][j];
            }
        }
        return sum;
    }

    console.log(sumOddCol(matrix));
    //7) У парних рядках – непарні стовпці, у непарних – парні.
    function sumOppositeRowCol(matrix) {
        let n = matrix.length;
        let m = matrix[0].length;
        let sum = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if ((i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0)) {
                    sum += matrix[i][j];
                }
            }
        }
        return sum;
    }

    console.log(sumOppositeRowCol(matrix));
}

















