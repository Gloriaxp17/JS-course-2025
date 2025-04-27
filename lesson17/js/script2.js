`use strict`
//2

if (confirm(`Почати тестування?`)) {
    // Створити службове авто (водій, марка, номер).
    //  Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.

    class Car {
        constructor(driver, mark, number) {
            this.driver = driver;
            this.mark = mark;
            this.number = number;
        }
    }

    class CarService {
        constructor(driver, mark, number) {
            if (CarService.instance) {
                return CarService.instance;
            }
            this.car = new Car(driver, mark, number);
            CarService.instance = this;
        }

        getCar() {
            return this.car;
        }
    }


    const service1 = new CarService("Іван", "Toyota", "AA1234BB");
    console.log(service1.getCar());

    const service2 = new CarService("Петро", "BMW", "CC5678DD");
    console.log(service2.getCar());

    //------------or------------

    class Car {
        constructor(name, mark, number) {
            if (Car.instance) {
                return Car.instance;
            }
            this.name = name;
            this.mark = mark;
            this.number = number;
            Car.instance = this;
        }

        getCar() {
            return {
                name: this.name,
                mark: this.mark,
                number: this.number
            };
        }
    }
}
