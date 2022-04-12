/*const userBank = {
  fullName: 'Petrov Petr Petrovich',
  clientLevel: 'basic',
  money: 980,
};
const userBank2 = {
  fullName: 'Ivanov Ivan Ivanovich',
  clientLevel: 'pro',
  money: 659,
};
const userBank3 = {
  fullName: 'Vasiliev Vasiliy Vasilievich',
  clientLevel: 'platinum',
  money: 786,
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

function sale (user, price){
  if(map.get(user.clientLevel) === undefined){
    return price;
  }if(user.money < price){
    let debet = (`${price}` - `${user.money}`);
    throw new Error ('Не хватает средств' + ' ' + `${debet}`);
  }else{
  let result = (`${price}` - (`${price}`*`${map.get(user.clientLevel)}` / `${100}`));
  user.money = (`${user.money}` - `${result}`);
  return user.money;
} 
}*/
 

