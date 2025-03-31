`use strict`

if (confirm(`Почати тестування?`)) {

    // (весь текст масиву, що в кінці документу скопіюєте в код).
    let dataList = [
        { id: 344277463, old_price: 1395, price: 1099, sell_status: "available", usd_price: "29.70" },
        { id: 363766641, old_price: 0, price: 90, sell_status: "unavailable", usd_price: "2.43" },
        { id: 339273715, old_price: 38, price: 25, sell_status: "available", usd_price: "0.68" },
        { id: 330746665, old_price: 3087, price: 2548, sell_status: "available", usd_price: "68.86" },
        { id: 344972806, old_price: 699, price: 549, sell_status: "available", usd_price: "14.84" },
        { id: 318302299, old_price: 0, price: 8500, sell_status: "available", usd_price: "229.73" },
        { id: 361430565, old_price: 3500, price: 1999, sell_status: "available", usd_price: "54.03" },
    ];
    // 1) Загальну вартість (нові ціни - price)

    let totalPrice = dataList.reduce((sum, item) => sum + item.price, 0);
    console.log(totalPrice);

    // 2)Знайти кількість товарів, у яких ціна зменшилась (price &lt; old_price).

    let count = 0;
    for (let obj of dataList) {
        if (obj.price < obj.old_price) {
            count++;
        }
    }
    console.log(count);

    // 3) Товари, які доступні (sell_status:&quot;available&quot;)
    let availableProducts = dataList.filter(item => item.sell_status === "available");
    console.log("Доступні товари:", availableProducts);
    // 4) сформувати новий список об”єктів тільки доступних для продажу товарів, які міститимуть тільки
    // ідентифікатор товару (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price)
    let formattedProducts = availableProducts.map(item => ({
        id: item.id,
        price: item.price,
        old_price: item.old_price,
        usd_price: item.usd_price
    }));
    console.log("Сформований список:", formattedProducts);
}

