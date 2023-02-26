const data = {
  profile: {
    title: "Soy un:",
    info: "Full Stack Developer, que se mantiene continuamente expandiendo su conocimiento",
  },
  email: {
    title: "Mi correo es:",
    info: "julian.eduardo.aquino@gmail.com",
  }
  ,
  calendary: {
    title: "Nací el:",
    info: "20 de Marzo de 1990",
  },  
  location:{
    title: "Vivo en:",
    info: "Bella Vista, Buenos Aires, Argentina",
  },

  phone: {
    title: "Puede llamarme al:",
    info:"11-5097-3344",
  },

};

const getItemById = (id) =>{
  const item = document.getElementById(id);
  return item;
}

const setItemContentById = (id,data) =>{
  const item = getItemById(id);
  console.log("item",{item});
  item.textContent = data;
}

const buttons = document.getElementsByClassName("button");

let title = data.profile.title;
let info = data.profile.info;

setItemContentById("property",title);
setItemContentById("data",info);

for (var i=0; i< buttons.length; i++) {
  buttons[i].addEventListener("mouseover",function() {
     setItemContentById("property",data[this.id].title);
     setItemContentById("data",data[this.id].info);
  });
}



