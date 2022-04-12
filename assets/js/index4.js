const client = {
  fullName: 'Petrov Petr Petrovich',
  bankName: 'Best of The Best Bank',
  clientLevel: 'basic',
  money: 980,
};
const client2 = {
  fullName: 'Ivanov Ivan Ivanovich',
  bankName: 'Best Bank',
  clientLevel: 'pro',
  money: 659,
};
const client3 = {
  fullName: 'Vasiliev Vasiliy Vasilievich',
  bankName: 'Best of The Best of The Best Bank',
  clientLevel: 'platinum',
  money: 786,
};

const Bank = {
  bankName: 'Best Bank',
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
  const Bank2 = {
    bankName: 'Best of The Best Bank',
    clientLevels:{
      basic:{
        discountBasic: 1.7,
      },
      pro:{
        discountPro: 2.1,
      },
      platinum:{
        discountPlatinum: 2.9,
      },
    },
    };
    const Bank3 = {
      bankName: 'Best of The Best of The Best Bank',
      clientLevels:{
        basic:{
          discountBasic: 0.9,
        },
        pro:{
          discountPro: 1.8,
        },
        platinum:{
          discountPlatinum: 2.65,
        },
      },
      };

      const {bankName2, clientLevels:{basic:{discountBasic}}} = Bank2;
      const {bankName, clientLevels: {pro:{discountPro}}} = Bank;
      const {bankName3, clientLevels:{platinum:{discountPlatinum}}} = Bank3;



      const map = new Map();
      map.set()