// get cost
function getCost(product) {
    const value = document.getElementById(product + '-cost').innerText;
    return value;
}
// calcualtion
function calculation() {
    const bestCost = getCost('best');
    const memoryCost = getCost('memory');
    const storageCost = getCost('storage');
    const deliveryCost = getCost('delivery');
    const cost = parseInt(bestCost) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    document.getElementById('total-cost').innerText = cost;
    document.getElementById('all-total').innerText = cost;
}
// extra Memory cost
function extraMemoryCost(value) {
    const extraMemory = document.getElementById('memory-cost');
    if (value == true) {
        extraMemory.innerText = 0;
    }
    else {
        extraMemory.innerText = 180;
    }
    calculation();
}
// extra Storage cost
function extraStorageCost(value) {
    const extraStorage = document.getElementById('storage-cost');
    if (value == 0) {
        extraStorage.innerText = 0;
    }
    else if (value == 100) {
        extraStorage.innerText = 100;
    }
    else {
        extraStorage.innerText = 180;
    }
    calculation();
}
// delivery charge
function extraDeliveryCost(value) {
    const deliveryCost = document.getElementById('delivery-cost');
    if (value == true) {
        deliveryCost.innerText = 0;
    }
    else {
        deliveryCost.innerText = 20;
    }
    calculation();
}
// memory button handling
document.getElementById('8gb-btn').addEventListener('click', function () {
    extraMemoryCost(true);
});
document.getElementById('16gb-btn').addEventListener('click', function () {
    extraMemoryCost(false);
});

// storage button handling
document.getElementById('256gb-btn').addEventListener('click', function () {
    extraStorageCost(0);
});
document.getElementById('512gb-btn').addEventListener('click', function () {
    extraStorageCost(100);
});
document.getElementById('1tb-btn').addEventListener('click', function () {
    extraStorageCost(180);
});
// delivery charge button handling
document.getElementById('free-btn').addEventListener('click', function () {
    extraDeliveryCost(true);
});
document.getElementById('charge-btn').addEventListener('click', function () {
    extraDeliveryCost(false);
});
// discount button handling
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