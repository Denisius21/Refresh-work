/*const userBank = {
  fullName: 'Petrov Petr Petrovich',
  clientLevel: 'basic',
};
const userBank2 = {
  fullName: 'Ivanov Ivan Ivanovich',
  clientLevel: 'pro',
};
const userBank3 = {
  fullName: 'Vasiliev Vasiliy Vasilievich',
  clientLevel: 'platinum',
};

const Bank = {
  bankName: 'Best of The Best Bank',
  clientLevels:{
    basic:{
      discountBasic: 0.5,
    },
    pro:{
      discountPro: 1.5,
    },
    platinum:{
      discountPlatinum: 2.5,
    },
  },
  };

  const {clientLevels:{basic:{discountBasic}}} = Bank;
  const {clientLevels:{pro:{discountPro}}} = Bank;
  const {clientLevels:{platinum:{discountPlatinum}}} = Bank;

const map = new Map();
map.set('basic', discountBasic);
map.set('pro', discountPro);
map.set('platinum', discountPlatinum);

function sale(user, price){
  if(map.get(user.clientLevel) === undefined){
    return price;
  }else{
  return (`${price}` - (`${price}`*`${map.get(user.clientLevel)}` / `${100}`));
}
}*/


