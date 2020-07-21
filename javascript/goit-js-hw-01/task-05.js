let deliveryCost;
let deliveryCountry = prompt(
  "Укажите страну доставки, пожалуйста"
).toLowerCase();

switch (deliveryCountry) {
  case "китай":
    deliveryCost = 100;
    console.log(
      alert(
        `Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов`
      )
    );
    break;

  case "чили":
    deliveryCost = 250;
    console.log(
      alert(
        `Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов`
      )
    );
    break;

  case "австралия":
    deliveryCost = 170;
    console.log(
      alert(
        `Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов`
      )
    );
    break;

  case "индия":
    deliveryCost = 80;
    console.log(
      alert(
        `Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов`
      )
    );
    break;

  case "ямайка":
    deliveryCost = 120;
    console.log(
      alert(
        `Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов`
      )
    );
    break;

  default:
    console.log(alert("В вашей стране доставка не доступна"));
    break;
}
