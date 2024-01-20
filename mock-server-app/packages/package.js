const baseURl = `https://kushal-koder-api.onrender.com/packagesNational`;


let container = document.getElementById("container-card");
let page = 1;
const limit = 8;
let priceFilter = ''; 
let cityFilter = ''; 

async function fetchData(){
    try{
        let res = await fetch(`${baseURl}?_page=${page}&_limit=${limit}`);
        let data = await res.json();
        console.log(data);
         appendData(data);
         page++;
    }catch(error){
        console.log(error);
    }
}
function appendData(data){
    data.forEach((item)=>{
        let card = createCard(item);
        container.append(card);
    })
   
}

function createCard(item) {
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

    titlePriceContainer.append(cardTitle, price);

    price.append(priceLabel, priceAmount);
    cardContent.append(titlePriceContainer, numberOfDays, offerPrice, bookNow);

    card.append(cardimg, cardContent);

    return card;
}

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    console.log(scrollHeight,scrollTop,clientHeight)
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        fetchData();
    }
});

 fetchData();