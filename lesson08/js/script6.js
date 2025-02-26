`use strict`
if (confirm(`Почати тестування?`)) {
    function canBuy(groceryListArr, costArr, money) {
        let affordable = [];

        for (let i = 0; i < costArr.length; i++) {
            if (money >= costArr[i]) {
                affordable.push(groceryListArr[i]);
            }
        }

        return affordable;
    }


    let products = ["cheese", "juice", "bread"];
    let prices = [1000, 20, 31];
    let userMoney = 1060;


    document.write("Ви можете купити: " + canBuy(products, prices, userMoney));


}