`use srtrict`

// if (confirm(`Почати тестування?`)) { 
// }

if (confirm(`Почати тестування?`)) {

    // ----- Властивості------
    // - назва компанії на час розробки(назву періодично змінюють)
    //     - власник компанії
    //         - споснсори(масив спонсорів)
    //         * прізвище спонсора
    //             * ім’я спонсора
    //                 * сума вкладень спонсора
    //                     - рік випуску
    //                         - вартість сайту

    let companies = [
        {
            name: "Sony",
            owner: "Mr. Tomiko",
            sponsors: [
                { name: "Ivan", surname: "Poliak", money: 3456 },
                { name: "Lora", surname: "Kloliak", money: 90456 },
                { name: "Ivanna", surname: "Zara", money: 9856 }
            ],
            year: 2020,
            sitesCost: 84014600
        },
        {
            name: "Webstorm",
            owner: "Lili",
            sponsors: [
                { name: "Ivan", surname: "Poliak", money: 2056 },
                { name: "Lora", surname: "Kloliak", money: 45456 },
                { name: "Ivanna", surname: "Zara", money: 656 }
            ],
            year: 2019,
            sitesCost: 222214600
        },
        {
            name: "Soho",
            owner: "Ms. Jolli",
            sponsors: [
                { name: "Ivan", surname: "Poliak", money: 1456 },
                { name: "Lora", surname: "Kloliak", money: 7456 },
                { name: "Ivanna", surname: "Zara", money: 709316 }
            ],
            year: 2008,
            sitesCost: 1111100
        }
    ];
    // Знайти:
    // 1) загальну вартість усіх сайтів

    let totalCost = companies.reduce((sum, company) => sum + company.sitesCost, 0);
    console.log(totalCost);

    // 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
    let sites = 0;
    for (let company of companies) {
        if (company.year >= 2000 && company.year <= 2009) {
            sites++;
        }
    }
    console.log(sites);

    // 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000

    let count = 0;
    for (let company of companies) {
        let totalSponsorship = company.sponsors.reduce((sum, sponsor) => sum + sponsor.money, 0);
        if (totalSponsorship > 100000) {
            count++;
        }
    }

    // 4) створити загальний список усіх спонсорів(поки можуть повторюватись, просто зібрати усі у масив)

    let sponsorsNames = [];
    for (let company of companies) {
        for (let sponsor of company.sponsors) {
            sponsorsNames.push(sponsor.name);
        }
    }

    // 5) знайти рік, коли прибуток був найбільшим

    function getYearBiggerProfit(companies) {
        let maxCompany = companies[0];

        for (let company of companies) {
            if (company.sitesCost > maxCompany.sitesCost) {
                maxCompany = company;
            }
        }

        return maxCompany.year;
    }

    console.log(getYearBiggerProfit(companies));

    // 6) упорядкувати список за спаданням прибутку

    let sortedCompanies = [...companies].sort((a, b) => b.sitesCost - a.sitesCost);
    console.log(sortedCompanies);

    // 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

    let companiesUnder100K = companies.filter(company => company.sitesCost < 100000)
        .map(company => ({ ...company }));

    let companiesOver100K = companies.filter(company => company.sitesCost >= 100000)
        .map(company => ({ ...company }));

    console.log("Companies with sites cost under 100K:", companiesUnder100K);
    console.log("Companies with sites cost over 100K:", companiesOver100K);

}




















