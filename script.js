var list = document.getElementById("list");
var fruits = [
  {
    name: "Mango",
    title: "King Of Fruit",
    types: ["Chounsa", "Sindhri", "Langra", "Anwaratol"],
    desc: "Aaj kal kay mosam may baraf daal ker mango juice 😋😋😋😋😋😋😋😋😋😋 AAYE HAYE",
    image:
      "https://cdn.pixabay.com/photo/2023/09/29/07/58/mango-8283268_1280.jpg",
  },
  {
    name: "Watermelon",
    title: "Garmi ka dushman",
    types: ["Red Melon", "Green Melon"],
    image:
      "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Falsa",
    title: "Strong Heat Peotector",
    types: ["Pait me thandak kernay wala fruit khaaskerkay faalsay ka juice aajkal ki garmiyon mai"],
    image:
      "https://i.dawn.com/primary/2016/05/5747fa8177215.jpg",
  },

];

fruits.forEach(function (data, ind) {
  var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
    <div class="flex relative h-[250px]">
      <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
        data.image
      }">
      <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
          data.name
        }</h2>
        <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
          data.title
        }</h1>
        <p class="leading-relaxed">${data.types.join(" , ")}</p>
        <p class="leading-relaxed">${data.desc} </p>
        <button onclick="updateDesc(this)">update</button>
      </div>
    </div>
  </div>`;
  list.innerHTML += ele;
});

function updateDesc(ele) {
  console.log("ele=>", ele.previousElementSibling);
  console.log("ele parentr=>", ele.parentElement);

  var index = ele.parentElement.id;
  fruits[index].desc = prompt("Desc");
  console.log("fruits-->", fruits);
  list.innerHTML = "";
  fruits.forEach(function (data, ind) {
    var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
      <div class="flex relative h-[250px]">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
          data.image
        }">
        <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
            data.name
          }</h2>
          <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
            data.title
          }</h1>
          <p class="leading-relaxed">${data.types.join(" , ")}</p>
          <p class="leading-relaxed">${data.desc} </p>
          <button onclick="updateDesc(this)">update</button>
        </div>
      </div>
    </div>`;
    list.innerHTML += ele;
  });
  //   var desc = prompt("Desc");
  //   ele.previousElementSibling.innerText = desc;
}
