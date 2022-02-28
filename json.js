const user = {id:11, name: 'Gorib Amir', Job: 'actor'};
const stringi = JSON.stringify(user); 
// console.log(user);
// console.log(stringi);

const shop  = {
    name: 'Alia Store',
    address : 'Robin Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false,
    owner: {
        name: 'alia Vhat',
        job: 'Actor'
    }
}


const shopstirgi = JSON.stringify(shop);
// console.log(shop);
console.log(shopstirgi);

const coverted = JSON.parse(shopstirgi);
console.log(coverted)