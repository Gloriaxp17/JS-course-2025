`use srtrict`

if (confirm(`Почати тестування?`)) {
    function createBanner(image, title, link) {
        return `<a href="${link}"><img src="${image}" alt="${title}"></a>`;
    }

    console.log(createBanner("images/banner.jpg", "Наш банер", "https://example.com"));
}