function calculation() {
    const bestCost = document.getElementById('best-cost').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const cost = parseInt(bestCost) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    document.getElementById('total-cost').innerText = cost;
    document.getElementById('all-total').innerText = cost;
}

// memory
document.getElementById('8gb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('memory-cost');
    extraMemory.innerText = 0;
    calculation();
});
document.getElementById('16gb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('memory-cost');
    extraMemory.innerText = 180;
    calculation();
});

// storage
document.getElementById('256gb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('storage-cost');
    extraMemory.innerText = 0;
    calculation();
});
document.getElementById('512gb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('storage-cost');
    extraMemory.innerText = 100;
    calculation();
});
document.getElementById('1tb-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('storage-cost');
    extraMemory.innerText = 180;
    calculation();
});
// delivery charge
document.getElementById('free-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('delivery-cost');
    extraMemory.innerText = 0;
    calculation();
});
document.getElementById('charge-btn').addEventListener('click', function () {
    const extraMemory = document.getElementById('delivery-cost');
    extraMemory.innerText = 20;
    calculation();
});
document.getElementById('apply-btn').addEventListener('click', function () {
    const applyInput = document.getElementById('apply-input').value;
    if (applyInput.toLowerCase() == 'stevekaku'.toLowerCase()) {
        document.getElementById('apply-input').value = '';
        const finalTotal = parseInt(document.getElementById('all-total').innerText);
        document.getElementById('all-total').innerText = finalTotal - (finalTotal * 20 / 100);
    } else {
        document.getElementById('apply-input').value = '';
    }
});