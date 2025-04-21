`use strict`

if (confirm(`Почати тестування?`)) {
    // поля ▪ назва фірми;

    // ▪ дата заснування (рік, місяць);
    // ▪ послуги (назва послуги, вартість, термін виконання);
    // ▪ адреси філіалів (країна, місто, вулиця, номер будинку);

    // методи ▪ визначення кількості років існування фірми;
    // ▪ виведення всіх філіалів фірми у вказаному місті;
    // ▪ виведення на екран послуг, що можуть бути виконані за вказану
    // суму грошей та вказаний термін часу;

    class Services {
        constructor(name, price, duration) {
            this.name = name;
            this.price = price;
            this.duration = duration;
        }

        toString() {
            return `Назва: ${this.name}, Ціна: ${this.price}, Термін: ${this.duration}`;
        }
    }

    class Address {
        constructor(country, city, street, building) {
            this.country = country;
            this.city = city;
            this.street = street;
            this.building = building;
        }

        toString() {
            return `Адреса: країна: ${this.country}, місто: ${this.city}, вулиця: ${this.street}, будинок: ${this.building}`;
        }
    }

    class TFirma {
        constructor(name, foundationYear, foundationMonth) {
            this.name = name;
            this.foundationDate = { year: foundationYear, month: foundationMonth };
            this.services = [];
            this.branches = [];
        }

        addService(service) {
            this.services.push(service);
        }

        addBranch(branch) {
            this.branches.push(branch);
        }

        getYearsActive() {
            const currentYear = 2025;
            return currentYear - this.foundationDate.year;
        }

        getBranchesInCity(city) {
            return this.branches.filter(branch => branch.city === city);
        }

        getServicesByBudgetAndTime(budget, maxDuration) {
            return this.services.filter(service =>
                service.price <= budget && service.duration <= maxDuration
            );
        }

        toString() {
            return `Фірма ${this.name}, заснована у ${this.foundationDate.month}.${this.foundationDate.year}`;
        }
    }
}


