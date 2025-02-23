`use srtrict`

if (confirm(`Почати тестування?`)) {
    function createBanner(image, title, link) {
        return `<a href="${link}"><img src="${image}" alt="${title}"></a>`;
    }

   document.write(createBanner('<img src="../images/1.jpg" alt=" Image"/>, "Наш банер", "https://example.com"'));
}
