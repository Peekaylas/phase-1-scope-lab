customerName = 'bob';
const leastFavoriteCustomer = 'not bob';

function upperCaseCustomerName() {
    let customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    globalThis.bestCustomer = 'not bob';
    return globalThis.bestCustomer;
}

function overwriteBestCustomer() {
    globalThis.bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob';
}

console.log(customerName);
upperCaseCustomerName();
console.log(customerName);
setBestCustomer();
console.log(globalThis.bestCustomer);
overwriteBestCustomer();
console.log(globalThis.bestCustomer);
console.log(leastFavoriteCustomer);
changeLeastFavoriteCustomer();