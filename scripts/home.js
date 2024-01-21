const imagelinksArray =['https://plus.unsplash.com/premium_photo-1663088722056-f399c902c6ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',"https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1476958526483-36efcaa80b1b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1676182255054-7e5d81cbaa9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
let imgSlider = document.querySelector("#img-slider") ;
let img = document.createElement("img");
imgSlider.append(img) ;
let index = 0;
let id = setInterval( ()=>{
    if( index>=imagelinksArray.length ) index = 0;
    img.src = imagelinksArray[index++];
},1200 )

/// urls
const baseURL = 'https://kushal-koder-api.onrender.com/';
//// diffrent urls
const destinationURL = `${baseURL}destinations/`;
const nationalPackageURL = `${baseURL}packagesNational/`;
const internationalPackageURL = `${baseURL}packagesInternational/`;


///section2  //// search feature
let section2 = document.querySelector(".section2") ;
let dynamicList = document.createElement("div");
dynamicList.classList.add("dynamic-list") ;

let dynamicListCard = document.createElement("div");
dynamicListCard.classList.add("dynamic-list-card") ;

let dynamicListpages = document.createElement("div");
dynamicListpages.classList.add("dynamic-list-page") ;

let searchBtn = document.querySelector("#search-btn") ;
searchBtn.addEventListener("click",()=>{
    let searchBySelect = document.querySelector("#searchBy") ;
    let searchInput = document.querySelector("#search") ;
    fetchData(`${destinationURL}`,`?${searchBySelect.value}=${searchInput.value}&_page=1&_limit=6`)

    // fetchData(`${nationalPackageURL}`,`?${searchBySelect.value}=${searchInput.value}&_page=1&_limit=10`)
} ) ;


//// for debouncing realtime searach 
let searchInput = document.querySelector("#search") ;
searchInput.addEventListener("input",()=>{
    storedDebounceFunc();
} ) ;



function searchDebounce( fetchfun,delay){
    let searchBySelect = document.querySelector("#searchBy") ;
    // let searchInput = document.querySelector("#search") ;
    let timer ;
    return function(){
        if(timer){
            clearTimeout(timer) ;
        }
        timer = setTimeout( ()=>{ 
            fetchfun(`${nationalPackageURL}?${searchBySelect.value}_like=${searchInput.value}&_page=1&_limit=6`) 
        },delay )  ;
    }
}

let storedDebounceFunc = searchDebounce(fetchData,500) ;


///  locatins click redirect to destination 
// let WavingBookCards = document.querySelector(".wave-up") ;
// WavingBookCards.addEventListener( "click",()=>{
//     window.location.href = "destination.html";
// } )

///// packages-card click redirect to packages 

let packagesCard = document.querySelector(".packages-card") ;
packagesCard.addEventListener( "click" , ()=>{
    window.location.href = 'packages.html';
} )

async function fetchData( url,query="" ) {
    try {
        const response = await fetch(`${url}${query}`);

        let totalData = response.headers.get("X-Total-Count") ;
        let limit = 6 ;
        let totalPages = Math.ceil(totalData/limit) ;
        console.log(totalData,totalPages) ; 

        const data = await response.json();
        console.log(data);

        section2.innerHTML = "";
        dynamicListCard.innerHTML = "";
        dynamicListpages.innerHTML = "";

        appendData(data) ;

        pagination( totalPages,limit,url,query ) ;
    } catch (error) {
        console.error('from fetchData :', error);
    }
}

/// for pagination
function pagination( totalPages,limit,url,query ){
   for(let i=1; i<=totalPages; i++){
        let btn = document.createElement("button") ;
        btn.classList.add("pagination-button") ;
        btn.innerText = `${i}`;
        btn.addEventListener("click",() => { 
            let searchBySelect = document.querySelector("#searchBy") ;
            let searchInput = document.querySelector("#search") ;
            dynamicList.innerHTML = "";
            
            fetchData(`${nationalPackageURL}?${searchBySelect.value}_like=${searchInput.value}&_page=${i}&_limit=${limit}`)
        } )  
        dynamicListpages.append(btn) ;
        console.log("hey"); 
    }
}


function appendData(data){
    // section2.innerHTML = "";
    // dynamicListCard.innerHTML = "";
    // dynamicListpages.innerHTML = "";
    dynamicList.append( dynamicListCard, dynamicListpages )
    section2.append(dynamicList);
    data.forEach( (item,index) => {
        const card = createCard(item,index) ;
        setTimeout( ()=>{
            dynamicListCard.append(card) ;
        },500 )
    });
    flag = true ;
}

///// infinite horizontal
// let flag = true ;
// page = 1 ;
// dynamicList.addEventListener( "scroll",() => {
//     let clientHeight = document.documentElement.clientLeft ;
//     let scrollHeight = document.documentElement.scroll ;
//     let scrollLeft = document.documentElement.scrollLeft ;
//     console.log( scrollHeight, clientHeight, scrollLeft ) ;
//     if( (scrollHeight-clientHeight) <= Math.ceil(scrollLeft) && flag ){
//         console.log("reached bottom") ;
//         page++;
//         let searchBySelect = document.querySelector("#searchBy") ;
//         let searchInput = document.querySelector("#search") ;
//         // fetchfun(`${destinationURL}`,`?${searchBySelect.value}_like=${searchInput.value}&_page=${page}&_limit=6`)
//         fetchfun(`${nationalPackageURL}`,`?${searchBySelect.value}_like=${searchInput.value}&_page=${page}&_limit=10`)
//         flag = false ;
//     }
// } )




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
    country.innerText = item.Country ;
  
    let city = document.createElement("p") ;
    city.classList.add("card-city");
    city.innerText = item.city ;

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

    detailsLeftDiv.append( city, country  ) ;
    detailsRightDiv.append( bookNowBtn )  ;
    details.append( detailsLeftDiv, detailsRightDiv ) ;

    cardBody.append( details ) ;
  
    card.append( cardImg, cardBody ) ;
    return card ;
}




