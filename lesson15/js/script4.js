`use strict`

if (confirm(`Почати тестування?`)) {
    // Поля Масив об’єктів ( графічних зображень та посилань на сайти)
    // методи Метод випадкового вибору об’єкта (графічного зображення та посилання)

    // Метод виведення випадкового банера

    class Banner {
        constructor(items) {
            this.items = items;
        }


        choose() {
            const randomIndex = Math.floor(Math.random() * this.items.length);
            return this.items[randomIndex];
        }


        show() {
            const banner = this.choose();
            console.log(`Показуємо банер: Зображення - ${banner.image}, Посилання - ${banner.link}`);
        }
    }


    const banners = [
        { image: "https://cms-imgp.jw-cdn.org/img/p/1102025385/univ/art/1102025385_univ_cnt_3_lg.jpg", link: "https://www.jw.org/uk/%D1%81%D0%B2%D1%96%D0%B4%D0%BA%D0%B8-%D1%94%D0%B3%D0%BE%D0%B2%D0%B8/%D1%81%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD/" },
        { image: "https://cms-imgp.jw-cdn.org/img/p/102020007/univ/art/102020007_univ_lsr_xl.jpg", link: "https://www.jw.org/uk/%D0%B1%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B8/%D0%BF%D1%80%D0%BE%D0%B1%D1%83%D0%B4%D0%B8%D1%81%D1%8C-1-2020-%D0%B1%D0%B5%D1%80-%D0%BA%D0%B2%D1%96/%D1%8F%D0%BA-%D0%B4%D0%BE%D0%BB%D0%B0%D1%82%D0%B8-%D1%81%D1%82%D1%80%D0%B5%D1%81/" },
        { image: "https://cms-imgp.jw-cdn.org/img/p/502014219/univ/art/502014219_univ_lsr_xl.jpg", link: "https://www.jw.org/uk/%D0%B1%D1%96%D0%B1%D0%BB%D1%96%D0%B9%D0%BD%D1%96-%D0%B2%D1%87%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B7%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%BD%D1%8F/%D1%89%D0%BE-%D1%82%D0%B0%D0%BA%D0%B5-%D1%81%D0%B2%D1%8F%D1%82%D0%B8%D0%B9-%D0%B4%D1%83%D1%85/" }
    ];

    const myBanner = new Banner(banners);
    myBanner.show();
}

