const imagelinksArray =['https://plus.unsplash.com/premium_photo-1663088722056-f399c902c6ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',"https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1476958526483-36efcaa80b1b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1676182255054-7e5d81cbaa9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
const baseURL = 'http://localhost:3000/';
// http://localhost:3000/destinations
const destinationURL = 'http://localhost:3000/destinations/';
const packageURL = 'http://localhost:3000/packages';



let imgSlider = document.querySelector("#img-slider") ;
let img = document.createElement("img");
imgSlider.append(img) ;
let index = 0;
let id = setInterval( ()=>{
    if( index>=imagelinksArray.length ) index = 0;
    img.src = imagelinksArray[index++];
},1200 )

///section2 
let searchInput = document.querySelector("#search") ;
let searchBtn = document.querySelector("#search-btn") ;
searchBtn.addEventListener("click",()=>{
    fetchData(`${destinationURL}`,`?country=${searchInput.value}&_page=1&_limit=5`)
} ) ;



async function fetchData( url,query="" ) {
    try {
        const response = await fetch(`${url}${query}`);
        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        const data = await response.json();
        console.log(data);
        appendData(data) ;
    } catch (error) {
        console.error('from fetchData :', error);
    }
}

let section2 = document.querySelector(".section2") ;
function appendData(data){
    section2.innerHTML = "";

    let dynamicList = document.createElement("div");
    dynamicList.classList.add("dynamic-list")
    section2.append(dynamicList);
    data.forEach( (item,index) => {
        const card = createCard(item,index) ;
        dynamicList.append(card) ;
    });
}

function createCard(item,index){
    let card = document.createElement("div") ;
    card.classList.add("card");
    card.classList.add("wave-up");

    let cardImg = document.createElement("div") ;
    cardImg.classList.add("card-img");
  
    let img = document.createElement("img") ;
    img.src = item.imageURL ; 

    let cardBody = document.createElement("div") ;           
    cardBody.classList.add("card-body");
  
    let country = document.createElement("p") ;
    country.classList.add("card-country");
    country.innerText = item.country ;
  
    let city = document.createElement("p") ;
    city.classList.add("card-city");
    city.innerText = item.city ;
  
    let price = document.createElement("span") ;
    price.classList.add("card-strikethroughprice");
    price.innerText = item.price ;
  
    let offerPrice = document.createElement("span") ;
    offerPrice.classList.add("card-offerPrice");
    offerPrice.innerText = item.offerPrice ;

    let bookNowBtn = document.createElement("button") ;
    bookNowBtn.classList.add("card-bookNow");
    bookNowBtn.innerText = "Book Now";

    let details = document.createElement("div") ;
    details.classList.add("details");

    let detailsLeftDiv = document.createElement("div") ;
    detailsLeftDiv.classList.add("details-left");

    let detailsRightDiv = document.createElement("div") ;
    detailsRightDiv.classList.add("details-right");
    
    cardImg.append( img ) ;

    detailsLeftDiv.append( country, city ) ;
    detailsRightDiv.append( price, offerPrice )  ;
    details.append( detailsLeftDiv, detailsRightDiv ) ;

    cardBody.append( details, bookNowBtn ) ;
  
    card.append( cardImg, cardBody ) ;
    return card ;
}