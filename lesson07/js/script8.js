`use srtrict`

if (confirm(`Почати тестування?`)) {
    function getRandomImg(img1, img2, img3, img4) {
        const randomNumber = Math.floor(Math.random() * 4) + 1;

        switch (randomNumber) {
            case 1:
                return img1;
            case 2:
                return img2;
            case 3:
                return img3;
            case 4:
                return img4;
        }
    }


     document.write(createBanner('<img src="../images/1.jpg" alt=" Image"/>, "Наш банер", "https://example.com"'));
}
