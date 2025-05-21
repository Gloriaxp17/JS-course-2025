`use strict`

if (confirm(`Почати тестування?`)) {
    const container = document.getElementById("wishesContainer");
    const wishes = ["новий ноутбук", "здоров'я", "пікниця", "подорож", "вільний час", "машина", "квартира"];

    function createElem() {
        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * wishes.length);
            let newDiv = document.createElement("div");
            newDiv.textContent = wishes[randomIndex];
            container.appendChild(newDiv);
        }
    }

    window.onload = createElem


}

