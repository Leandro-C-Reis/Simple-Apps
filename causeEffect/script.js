
const users = {
  person1: {
    shortName: "Leandro",
    name: "Leandro Rodrigues",
    Street: "Avenida Andrades",
    City: "Belo Horizonte",
    State: "MG",
    Country: "Brasil",
    Telephone: "98932-3882",
    Birthday: "02/03/2002",
  },

  person2: {
    shortName: "Carol",
    name: "Carol Rodrigues",
    Street: "Julio Cezar",
    City: "São Paulo",
    State: "SP",
    Country: "Brasil",
    Telephone: "23432-3542",
    Birthday: "08/11/1997",
  },
  person3: {
    shortName: "Anderson",
    name: "Anderson Galvão",
    Street: "João Carlos",
    City: "Curitiba",
    State: "PR",
    Country: "Brasil",
    Telephone: "97382-4367",
    Birthday: "21/07/2005",
  },

  person4: {
    shortName: "Felipe",
    name: "Felipe De Carlos",
    Street: "Six Town",
    City: "New York",
    State: "NY",
    Country: "EUA",
    Telephone: "555-3232",
    Birthday: "01/28/1979",
  },
}

document.getElementById("person1").addEventListener('click', () => { showList(1); });
document.getElementById("person2").addEventListener('click', () => { showList(2); });
document.getElementById("person3").addEventListener('click', () => { showList(3); });
document.getElementById("person4").addEventListener('click', () => { showList(4); });

document.getElementById("name1").innerHTML = users.person1.shortName;
document.getElementById("name2").innerHTML = users.person2.shortName;
document.getElementById("name3").innerHTML = users.person3.shortName;
document.getElementById("name4").innerHTML = users.person4.shortName;

function showList(n) {
  document.querySelector('.perfil').classList.remove("show");
  
  let user;
  switch(n) {
    case 1: user = users.person1;
    break;
    case 2: user = users.person2;
    break;
    case 3: user = users.person3;
    break;
    case 4: user = users.person4;
    break;
  }

  //select user
  document.getElementById("name").innerHTML = user.name;
  document.getElementById("street").innerHTML = user.Street;
  document.getElementById("city").innerHTML = user.City;
  document.getElementById("State").innerHTML = user.State;
  document.getElementById("country").innerHTML = user.Country;
  document.getElementById("telephone").innerHTML = user.Telephone;
  document.getElementById("birthday").innerHTML = user.Birthday;

  setTimeout(() => {
    document.querySelector('.perfil').classList.add("show");
  }, 50);
}
