`use srtrict`

// if (confirm(`Почати тестування?`)) { 
// }

if (confirm(`Почати тестування?`)) {

    // Тир
    // Поля(властивості) Масив, у якому зберігається поле з зайцями
    // Методи (дії) Метод пострілу (задається позиція пострілу)

    // Виведення ігрового поля

    let tir = {
        field: [0, 1, 0, 0, 1, 1, 1, 0],

        shot(position) {
            if (this.field[position] === 1) {
                this.field[position] = 0;
                return "влучили"
            } else {
                return "не влучили"
            }
        },

        showRes() {
            console.log("Поле:", this.field.join(" "));
        }
    };
    tir.showRes();
    console.log(tir.shot(1));
    console.log(tir.shot(0));





}


