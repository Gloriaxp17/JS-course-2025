`use srtrict`

// if (confirm(`Почати тестування?`)) { 
// }

if (confirm(`Почати тестування?`)) {
    let j = 1;
    for (let i = 1; i <= 5; i++) {
        for (let s = 5 - i; s > 0; s--) {
            document.write("&nbsp;");
        }
        for (let k = 0; k < j; k++) {
            document.write("o");
        }
        document.write("<br>");
        j += 2;
    }

}

















