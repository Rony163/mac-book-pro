
// memory
document.getElementById('8gb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-memory');
    extraMemory.innerText = 0;
});
document.getElementById('16gb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-memory');
    extraMemory.innerText = 180;
    const priceFirst = document.getElementById('total-price');
    const curentPrice = priceFirst.innerText;
    const totalPrice = parseFloat(curentPrice) + parseFloat(extraMemory.innerText);
    priceFirst.innerText = totalPrice;
});

// storage
document.getElementById('256gb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-storage');
    extraMemory.innerText = 0;
});
document.getElementById('512gb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-storage');
    extraMemory.innerText = 100;
    const priceFirst = document.getElementById('total-price');
    const curentPrice = priceFirst.innerText;
    const totalPrice = parseFloat(curentPrice) + parseFloat(extraMemory.innerText);
    priceFirst.innerText = totalPrice;
});
document.getElementById('1tb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-storage');
    extraMemory.innerText = 180;
    const priceFirst = document.getElementById('total-price');
    const curentPrice = priceFirst.innerText;
    const totalPrice = parseFloat(curentPrice) + parseFloat(extraMemory.innerText);
    priceFirst.innerText = totalPrice;
});

// delivery charge
document.getElementById('free-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('delivery-cost');
    extraMemory.innerText = 0;
});
document.getElementById('charge-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('delivery-cost');
    extraMemory.innerText = 20;
    const priceFirst = document.getElementById('total-price');
    const curentPrice = priceFirst.innerText;
    const totalPrice = parseFloat(curentPrice) + parseFloat(extraMemory.innerText);
    priceFirst.innerText = totalPrice;
});