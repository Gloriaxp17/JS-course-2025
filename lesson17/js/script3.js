`use strict`

if (confirm(`Почати тестування?`)) {
    // Склад. База товарів, які зберігаються на складі:
    //  назва товару, одиниця виміру, кількість,
    //  фірма виробник (назва, реєстраційний номер).
    //  Організувати реєстрацію/відвантаження товарів,
    //  фільтрація за назвою товару, фільтрація за назвою фірми

    class Firm {
        constructor(name, registerNumber) {
            this.name = name;
            this.registerNumber = registerNumber;
        }
    }

    class Warehouse {
        constructor(name, quantity, unitOfMeasurement, firm) {
            this.name = name;
            this.quantity = quantity;
            this.unitOfMeasurement = unitOfMeasurement;
            this.firm = firm;
        }

        register(goods) {
            this.quantity += goods;
        }

        shipmentOfGoods(goods) {
            if (this.quantity >= goods) {
                this.quantity -= goods;
            } else {
                console.log("такої кількості товару немає");
            }
        }

        static filterByProductName(list, name) {
            return list.filter(item => item.name === name);
        }

        static filterByFirm(list, firmName) {
            return list.filter(item => item.firm.name === firmName);
        }
    }
    const firmaA = new Firm("Молокозавод", "12345");
    const firmaB = new Firm("Сирзавод", "67890");

    const склад1 = new Warehouse("Молоко", 50, "літрів", firmaA);
    const склад2 = new Warehouse("Сир", 30, "кілограмів", firmaB);
    const склад3 = new Warehouse("Молоко", 20, "літрів", firmaB);

    const склад = [склад1, склад2, склад3];

    console.log(Warehouse.filterByProductName(склад, "Молоко"));


    console.log(Warehouse.filterByFirm(склад, "Молокозавод"));

}


