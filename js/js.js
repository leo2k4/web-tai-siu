const button = document.querySelector('.button');
const resultDiv = document.querySelector('.result');
const resultThongbao = document.querySelector('.thongbao');


button.addEventListener('click', () => {
    var xx1 = Math.floor(Math.random() * 6) + 1;
    var xx2 = Math.floor(Math.random() * 6) + 1;
    var xx3 = Math.floor(Math.random() * 6) + 1;
    var kq = xx1 + xx2 + xx3;
    // console.log(xx1, xx2, xx3);
    var diceImageSrc1 = `../img/so${xx1}.jpg`;
    var diceImageSrc2 = `../img/so${xx2}.jpg`;
    var diceImageSrc3 = `../img/so${xx3}.jpg`;

    var htmlContent = `<img class="dice-image" src="${diceImageSrc1}" alt="Dice ${xx1}">
    <img class="dice-image" src="${diceImageSrc2}" alt="Dice ${xx2}">
    <img class="dice-image" src="${diceImageSrc3}" alt="Dice ${xx3}">`;

    if (kq > 10) {
        resultThongbao.innerHTML = '<p>Tài</p>';
    } else {
        resultThongbao.innerHTML = '<p>Xỉu</p>';
    }

    // Gán chuỗi HTML vào phần tử resultDiv
    resultDiv.innerHTML = htmlContent;

});