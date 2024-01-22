const baseURl = `https://kushal-koder-api.onrender.com/packagesNational`;
const internationaURl = `https://kushal-koder-api.onrender.com/packagesInternational`;


let container = document.getElementById("container-card");
let international = document.getElementById("container-card-international");
let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("filterButton");
let paginationWrapper = document.getElementById("pagination-wrapper");
let paginationWrapper2 = document.getElementById("pagination-wrapper2");
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
const limit = 5 ;

async function fetchData(url,query=""){
    try{
        let res = await fetch(`${url}&${query}`);
        let totalPage = +res.headers.get("X-Total-Count");
        let limit = 5 ;
        let perPage = Math.ceil(totalPage/limit);
        pagination(perPage,limit,query);
        let data = await res.json();
         appendData(data);
    }catch(error){
        console.log(error);
    }
}
function pagination(perPage,limit,query){
    paginationWrapper.innerHTML = "";
  
    for(let i = 1 ; i<= perPage ; i++){
      let button = document.createElement("button");
      button.classList.add("paginate")
      button.textContent = i ;
      button.addEventListener("click",()=>{
        fetchData(`${baseURl}?_page=${i}&_limit=${limit}`,query);
      })
      paginationWrapper.append(button);
    }
  }
function appendData(data){
     container.innerHTML = "";
    data.forEach((item,index)=>{
        let card = createCard(item,index);
        container.append(card);
    })
   
}

function createCard(item,index) {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardimg = document.createElement("div");
    let image = document.createElement("img");
    image.src = item.imageURL;

    cardimg.append(image);

    let cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    let cardTitle = document.createElement("h3");
    cardTitle.textContent = item.city;

    let titlePriceContainer = document.createElement("div");
    titlePriceContainer.classList.add("title-price-container");

    let price = document.createElement("p");
    price.classList.add("price");
    let priceLabel = document.createTextNode("Price: ");
    let priceAmount = document.createElement("span");
    priceAmount.classList.add("amount");
    priceAmount.textContent =  item.Price; 

    let numberOfDays = document.createElement("p");
    numberOfDays.textContent = "Days: " + item.Packages; 

    let offerPrice = document.createElement("p");
    offerPrice.textContent = "Offer Price: " + item.OfferPrice; 

    let bookNow = document.createElement("button");
    bookNow.classList.add("btn");
    bookNow.textContent = "Book Now";
     bookNow.addEventListener("click",()=>{
        window.location.href = 'payment.html';
     });

    titlePriceContainer.append(cardTitle, price);

    price.append(priceLabel, priceAmount);
    cardContent.append(titlePriceContainer, numberOfDays, offerPrice, bookNow);

    card.append(cardimg, cardContent);

    return card;
}
searchByButton.addEventListener('click', async () => {
    const selectedOption = searchBySelect.value;
    const searchTerm = searchByInput.value;
  
    if (searchTerm !== '') {
      try {
        let response;
  
        if (selectedOption === 'city') {
          response = await fetch(`${baseURl}?city_like=${searchTerm}`);
          res = await fetch(`${internationaURl}?city_like=${searchTerm}`);
        } else if (selectedOption === 'country') {
          response = await fetch(`${baseURl}?Country_like=${searchTerm}`);
          res = await fetch(`${internationaURl}?Country_like=${searchTerm}`);
        }
  
        if (response.ok&& res.ok) {
          const data = await response.json();
          const data2 = await res.json();
          console.log(data);
          console.log(data2);
          appendData(data);
          appendData2(data2);
        } else {
          console.log('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('Please enter a search term.');
    }
  });
  sortAtoZBtn.addEventListener("click",()=>{
    fetchData(`${baseURl}?_page=1&_limit=5`,`_sort=Price&_order=asc`);
    fetchDataInternational(`${internationaURl}?_page=1&_limit=5`,`_sort=Price&_order=asc`);
    
  })
  sortZtoABtn.addEventListener("click",()=>{
    fetchData(`${baseURl}?_page=1&_limit=5`,`_sort=Price&_order=desc`);
    fetchDataInternational(`${internationaURl}?_page=1&_limit=5`,`_sort=Price&_order=desc`);
  })

  //International data //

  async function fetchDataInternational(url,query=""){
    try{
        let res = await fetch(`${url}&${query}`);
        let totalPage = +res.headers.get("X-Total-Count");
        let limit = 5 ;
        let perPage = Math.ceil(totalPage/limit);
         pagination2(perPage,limit,query);
        let data = await res.json();
         appendData2(data);
    }catch(error){
        console.log(error);
    }
}
function pagination2(perPage,limit,query){
    paginationWrapper2.innerHTML = "";
  
    for(let i = 1 ; i<= perPage ; i++){
      let button = document.createElement("button");
      button.classList.add("paginate2")
      button.textContent = i ;
      button.addEventListener("click",()=>{
        fetchDataInternational(`${internationaURl}?_page=${i}&_limit=${limit}`,query);
      })
      paginationWrapper2.append(button);
    }
  }
function appendData2(data){
    international.innerHTML = "";
    data.forEach((item,index)=>{
        let card = createCard(item,index);
        international.append(card);
    })
   
}

function createCard(item,index) {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardimg = document.createElement("div");
    let image = document.createElement("img");
    image.src = item.imageURL;

    cardimg.append(image);

    let cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    let cardTitle = document.createElement("h3");
    cardTitle.textContent = item.city;

    let titlePriceContainer = document.createElement("div");
    titlePriceContainer.classList.add("title-price-container");

    let price = document.createElement("p");
    price.classList.add("price");
    let priceLabel = document.createTextNode("Price: ");
    let priceAmount = document.createElement("span");
    priceAmount.classList.add("amount");
    priceAmount.textContent =  item.Price; 

    let numberOfDays = document.createElement("p");
    numberOfDays.textContent = "Days: " + item.Packages; 

    let offerPrice = document.createElement("p");
    offerPrice.textContent = "Offer Price: " + item.OfferPrice; 

    let bookNow = document.createElement("button");
    bookNow.classList.add("btn");
    bookNow.textContent = "Book Now";
     bookNow.addEventListener("click",()=>{
        window.location.href = 'payment.html';
     });

    titlePriceContainer.append(cardTitle, price);

    price.append(priceLabel, priceAmount);
    cardContent.append(titlePriceContainer, numberOfDays, offerPrice, bookNow);

    card.append(cardimg, cardContent);

    return card;
}
 fetchData(`${baseURl}?_page=${1}&_limit=${limit}`);
 fetchDataInternational(`${internationaURl}?_page=${1}&_limit=${limit}`)