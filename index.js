const currentDate = new Date();
const root = document.getElementById("root");
const cardCount = document.getElementById("totalCount");

const delivery = document.getElementById("delivery");
const alpha = document.getElementById("alphabet");
const price = document.getElementById("price");

const ranks = document.getElementsByClassName("ranks");

// shoe data tom put on the DOM
const productData = [
{
  shoeName: "NIKE",
  shoePrice: 1800,
  starRating: 5.0,
  deliveryTime: new Date("14 feb 2022"),
  shoeImg: "shoe 1.jpg",
},
{
  shoeName: "NIKE",
  shoePrice: 2500,
  starRating: 5.0,
  deliveryTime: new Date("15 feb 2022"),
  shoeImg: "shoe 2.jpg  ",
},
{
  shoeName: "Addidas",
  shoePrice: 3000,
  starRating: 3.0,
  deliveryTime: new Date("20 feb 2022"),
  shoeImg: "shoe 3.jpg",
},
{
  shoeName: "Reebok",
  shoePrice: 3550,
  starRating: 5.0,
  deliveryTime: new Date("19 feb 2022"),
  shoeImg: "shoe 4.jpg",
},
{
  shoeName: "REDTAPE",
  shoePrice: 1300,
  starRating: 2.0,
  deliveryTime: new Date("19 feb 2022"),
  shoeImg: "shoe 8.jpg",
},
{
  shoeName: "Addidas",
  shoePrice: 4000,
  starRating: 1.0,
  deliveryTime: new Date("18 feb 2022"),
  shoeImg: "shoe 8.jpg",
},
{
  shoeName: "Nike",
  shoePrice: 5000,
  starRating: 5.0,
  deliveryTime: new Date("17 feb 2022"),
  shoeImg: "shoe 5.jpg",
},
{
  shoeName: "Nike",
  shoePrice: 3000,
  starRating: 4.0,
  deliveryTime: new Date("11 feb 2022"),
  shoeImg: "shoe 7.jpg",
},
];

// function for generating card to show product
const cardGenerator = (element) => {
return `
 <div class="card m-3 mx-4 p-1" style="width: 18rem;">
<img src="./sample images/${
  element.shoeImg
}" class="card-img-top" alt="shoe image" height="250px">
</img>

<div class="card-body">

    <div class="d-flex justify-content-between align-items-center">           
        <h5 class="card-title fw-bolder">${element.shoeName}</h5>
        <span id="star" class="d-flex justify-content-center align-items-center rounded p-1 px-2">
            <img src="./sample images/star..png" alt="star image" class="mx-1" height="17"> <span id="star-rating" class="fw-bold">${
              element.starRating
            }</span>
        </span>
    </div>
  
    <h4 class="fs-1 fw-bold">&#8377;${element.shoePrice}</h4>
  <p class="card-text">Delivery by: ${element.deliveryTime.toDateString()}</p>
</div>

</div>`;
};

// for sorting in the alphabatical order
alpha.addEventListener("click", () => {
console.log("click on alpha");
root.innerHTML = "";
const alphaSort = (first, second) => {
  if (first.shoeName > second.shoeName) {
    return 1;
  } else if (first.shoeName < second.shoeName) {
    return -1;
  } else {
    return 0;
  }
};

cardCount.innerHTML = 9;
productData.sort(alphaSort).forEach((element) => {
  root.innerHTML += cardGenerator(element);
});
});

//for sorting in pricing (high to low)
price.addEventListener("click", () => {
console.log("click on price");
root.innerHTML = "";
const priceSort = (first, second) => {
  if (parseInt(first.shoePrice) > parseInt(second.shoePrice)) {
    return -1;
  } else if (parseInt(first.shoePrice) < parseInt(second.shoePrice)) {
    return 1;
  } else {
    return 0;
  }
};

cardCount.innerHTML = 9;
productData.sort(priceSort).forEach((element) => {
  root.innerHTML += cardGenerator(element);
});
});

// sorting for delivery time
delivery.addEventListener("click", () => {
root.innerHTML = "";

const deliveryTimeSort = (first, second) => {
  if (first.deliveryTime - currentDate > second.deliveryTime - currentDate) {
    return 1;
  } else if (
    first.deliveryTime - currentDate <
    second.deliveryTime - currentDate
  ) {
    return -1;
  } else {
    return 0;
  }
};

cardCount.innerHTML = 9;
productData.sort(deliveryTimeSort).forEach((element) => {
  root.innerHTML += cardGenerator(element);
});
});

// this will handle the click event on the filters
Array.from(ranks).forEach((element) => {
element.addEventListener("click", (e) => {
  root.innerHTML = "";
  let i = 0;
  const targetRank = parseInt(e.target.innerHTML.split("")[0]);

  productData.forEach((element) => {
    if (parseInt(element.starRating) == targetRank) {
      root.innerHTML += cardGenerator(element);
      i += 1;
    }
  });

  cardCount.innerHTML = i;
});
});

// to populate the root element with product
productData.forEach((element) => {
root.innerHTML += cardGenerator(element);
});
      