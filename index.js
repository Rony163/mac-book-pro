
// memory
document.getElementById('8gb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-memory');
    extraMemory.innerText = 0;
    const priceFirst = document.getElementById('total-price');
    const curentPrice = priceFirst.innerText;
    const totalPrice = parseInt(curentPrice) - parseInt(180);
    priceFirst.innerText = totalPrice;

});
document.getElementById('16gb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-memory');
    extraMemory.innerText = 180;
    const priceFirst = document.getElementById('total-price');
    const curentPrice = priceFirst.innerText;
    const totalPrice = parseInt(curentPrice) + parseInt(extraMemory.innerText);
    priceFirst.innerText = totalPrice;
});

// storage
document.getElementById('256gb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-storage');
    extraMemory.innerText = 0;
    const priceFirst = document.getElementById('total-price');
    const curentPrice = priceFirst.innerText;
});
document.getElementById('512gb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-storage');
    extraMemory.innerText = 100;
    const priceFirst = document.getElementById('total-price');
    const curentPrice = priceFirst.innerText;
    const totalPrice = parseInt(curentPrice) + parseInt(extraMemory.innerText);
    priceFirst.innerText = totalPrice;
});
document.getElementById('1tb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-storage');
    extraMemory.innerText = 180;
    const priceFirst = document.getElementById('total-price');
    const curentPrice = priceFirst.innerText;
    const totalPrice = parseInt(curentPrice) + parseInt(extraMemory.innerText);
    priceFirst.innerText = totalPrice;
});
// delivery charge
document.getElementById('free-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-cost');
    extraMemory.innerText = 0;
    const priceFirst = document.getElementById('total-price');
    const curentPrice = priceFirst.innerText;
    const totalPrice = parseInt(curentPrice) - parseInt(20);
    priceFirst.innerText = totalPrice;
});
document.getElementById('charge-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-cost');
    extraMemory.innerText = 20;
    const priceFirst = document.getElementById('total-price');
    const curentPrice = priceFirst.innerText;
    const totalPrice = parseInt(curentPrice) + parseInt(extraMemory.innerText);
    priceFirst.innerText = totalPrice;
});