/// urls
const baseURL = 'http://localhost:3000/';
// http://localhost:3000/destinations
const destinationURL = 'http://localhost:3000/destinations/';
const packageURL = 'http://localhost:3000/packages';



////////containers
let adminContainer_1 = document.querySelector(".admin-container1") ;
let updateDataForm = document.querySelector(".update-data-form") ;
let destinationList = document.querySelector(".destination-list") ;
let packageList = document.querySelector(".package-list") ;


///// update Destintion form 
// let adminInputId = document.querySelector(".id") ;
// let adminInputCountry = document.querySelector(".country") ;
// let adminInputCity = document.querySelector(".city") ;
// let adminInputImageURL = document.querySelector(".imageURL") ;
// let adminInputDescription = document.querySelector(".description") ;
// let adminInputPrice = document.querySelector(".price") ;
// let adminInputOfferPrice = document.querySelector(".offerPrice") ;
// let adminInputPackage = document.querySelector(".package") ;
// let adminInputStart = document.querySelector(".start") ;
// let adminInputEnd = document.querySelector(".end") ;
// let adminInputRatings = document.querySelector(".ratings") ;
// let adminInputLovedBy = document.querySelector(".lovedBy") ;

///// update Package form 
let packageInputId = document.querySelector(".id2") ;
// let packageInputCountry = document.querySelector(".country2") ;
// let packageInputCity = document.querySelector(".city2") ;
// let packageInputImageURL = document.querySelector(".imageURL2") ;
// let packageInputDescription = document.querySelector(".description2") ;
// let packageInputPrice = document.querySelector(".price2") ;
// let packageInputOfferPrice = document.querySelector(".offerPrice2") ;
// let packageInputPackage = document.querySelector(".package2") ;
// let packageInputStart = document.querySelector(".start2") ;
// let packageInputEnd = document.querySelector("#.id2") ;
// let packageInputRatings = document.querySelector(".ratings2") ;
// let packageInputLovedBy = document.querySelector(".lovedBy2") ;


// ///// Destination update & add buttons
// let updateDestinationBtn = document.querySelector(".update-destination-btn") ;
// let addDestinationBtn = document.querySelector(".add-destination-btn") ;
// ////// event listners
// updateDestinationBtn.addEventListener( "click" , updateDestination ) ;
// addDestinationBtn.addEventListener( "click" , addDestination ) ;



// ///// Package update & add buttons
// let updatePackageBtn = document.querySelector(".update-package-btn") ;
// let addPackageBtn = document.querySelector(".add-package-btn") ;
// ////// event listners
// updatePackageBtn.addEventListener( "click" , updatePackage ) ;
// addPackageBtn.addEventListener( "click" , addPackage ) ;


async function addPackage(){
    let obj = {
        "city": packageInputCity.value ,
        "country": packageInputCountry.value,
        "date": {"start": packageInputStart.value, "end": packageInputEnd.value},
        "description": packageInputDescription.value,
        "id": packageInputId.value,
        "imageURL": packageInputImageURL.value,
        "lovedBy": packageInputLovedBy.value,
        "offerPrice": packageInputOfferPrice.value,
        "package": packageInputPackage.value,
        "price": packageInputPrice.value,
        "ratings": packageInputRatings.value
    }
 try{
    let userAuthToken = JSON.parse(localStorage.getItem("userAuthToken")) ;
    let userId = JSON.parse(localStorage.getItem("userId")) ;
    let response = await fetch(`${packageURL}/${packageInputId.value}`,{
        method : "PUT",
        headers : { 
            "content-type" : "application/json",
            Authorization: `Bearer ${userAuthToken}`
        },
        body : JSON.stringify(obj)
    } );
    let data = await response.json();
    console.log(data) ;
    fetchData(`${destinationURL}`,`?_page=1&_limit=8`) ;
 }
 catch(error){
    console.log(`from add desination : `,error) ;
 }
}

async function updatePackage(){
    let obj = {
        "city": packageInputCity.value ,
        "country": packageInputCountry.value,
        "date": {"start": packageInputStart.value, "end": packageInputEnd.value},
        "description": packageInputDescription.value,
        "id": packageInputId.value,
        "imageURL": packageInputImageURL.value,
        "lovedBy": packageInputLovedBy.value,
        "offerPrice": packageInputOfferPrice.value,
        "package": packageInputPackage.value,
        "price": packageInputPrice.value,
        "ratings": packageInputRatings.value
    }
 try{
    let userAuthToken = JSON.parse(localStorage.getItem("userAuthToken")) ;
    let userId = JSON.parse(localStorage.getItem("userId")) ;
    let response = await fetch(`${packageURL}/${packageInputId.value}`,{
        method : "PATCH",
        headers : { 
            "content-type" : "application/json",
            Authorization: `Bearer ${userAuthToken}`
        },
        body : JSON.stringify(obj)
    } );
    let data = await response.json();
    console.log(data) ;
    fetchData(`${packageURL}`,`?_page=1&_limit=8`) ;
 }
 catch(error){
    console.log(`from update Package : `,error) ;
 }
}

async function updateDestination(){
    let obj = {
        "city": adminInputCity.value ,
        "country": adminInputCountry.value,
        "date": {"start": adminInputStart.value, "end": adminInputEnd.value},
        "description": adminInputDescription.value,
        "id": adminInputId.value,
        "imageURL": adminInputImageURL.value,
        "lovedBy": adminInputLovedBy.value,
        "offerPrice": adminInputOfferPrice.value,
        "package": adminInputPackage.value,
        "price": adminInputPrice.value,
        "ratings": adminInputRatings.value
    }
 try{
    let userAuthToken = JSON.parse(localStorage.getItem("userAuthToken")) ;
    let userId = JSON.parse(localStorage.getItem("userId")) ;
    let response = await fetch(`${destinationURL}/${adminInputId.value}`,{
        method : "PATCH",
        headers : { 
            "content-type" : "application/json",
            Authorization: `Bearer ${userAuthToken}`
        },
        body : JSON.stringify(obj)
    } );
    let data = await response.json();
    console.log(data) ;
    fetchData(`${destinationURL}`,`?_page=1&_limit=8`) ;
 }
 catch(error){
    console.log(`from update desination : `,error) ;
 }
}

async function addDestination(){
    let obj = {
        "city": adminInputCity.value ,
        "country": adminInputCountry.value,
        "date": {"start": adminInputStart.value, "end": adminInputEnd.value},
        "description": adminInputDescription.value,
        "id": adminInputId.value,
        "imageURL": adminInputImageURL.value,
        "lovedBy": adminInputLovedBy.value,
        "offerPrice": adminInputOfferPrice.value,
        "package": adminInputPackage.value,
        "price": adminInputPrice.value,
        "ratings": adminInputRatings.value
    }
 try{
    let userAuthToken = JSON.parse(localStorage.getItem("userAuthToken")) ;
    let userId = JSON.parse(localStorage.getItem("userId")) ;
    let response = await fetch(`${destinationURL}`,{
        method : "PUT",
        headers : { 
            "content-type" : "application/json",
            Authorization: `Bearer ${userAuthToken}`
        },
        body : JSON.stringify(obj)
    } );
    let data = await response.json();
    console.log(data) ;
    fetchData(`${destinationURL}`,`?_page=1&_limit=8`) ;
 }
 catch(error){
    console.log(`from add desination : `,error) ;
 }
}

// <input type="text" id="country" name="country" placeholder="Country"  value="">
        
// <input type="text" id="city" name="city" placeholder="City" value="">

// <input type="text" id="imageURL" name="imageURL" placeholder="imageURL" value="">

// <textarea id="description" name="description" placeholder="Description" rows="4"></textarea>

// <input type="number" id="price" name="price" placeholder="Price"  value="">

// <input type="number" id="offerPrice" name="offerPrice" placeholder="Offer Price"  value="">

// <input type="text" id="package" name="package" placeholder="Package" value="">

// <input type="date" id="start" name="start" placeholder="Start Date ex:2024-07-10" value="">

// <input type="date" id="end" name="end" placeholder="End Date ex:2024-07-18" value="">

// <input type="number" id="ratings" name="ratings" placeholder="Ratings" step="0.1" value="">

// <input type="number" id="lovedBy" name="lovedBy" placeholder="Loved By" value="">


fetchData(`${destinationURL}`,`?_page=1&_limit=8`);
// fetchData(`${packageURL}`,`?_page=1&_limit=8`);
async function fetchData(url,query="") {
    try {
        let userAuthToken = JSON.parse(localStorage.getItem("userAuthToken")) ;
        let userId = JSON.parse(localStorage.getItem("userId")) ;
        const response = await fetch(`${url}${query}`,{
            method : "GET" ,
            headers : {
                Authorization : `Bearer ${userAuthToken}`
            }
        });
        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        const data = await response.json();
        console.log(data);
        if( url===destinationURL ){
            displayDestinations(data);
        }else if( url===packageURL ){
            displayPackages(data);
        }
        
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayPackages(packages){
    packageList.innerHTML = '';
    packages.forEach( (item,index) => {
        const card = createCard(item,index) ;
        packageList.append(card);
    });
}

function displayDestinations(destinations) {
    destinationList.innerHTML = '';
    destinations.forEach( (item,index) => {
        const card = createCard(item,index) ;
        destinationList.append(card);
    });
}

async function deleteDestination(item,index){
    try {
        let userAuthToken = JSON.parse(localStorage.getItem("userAuthToken")) ;
        let userId = JSON.parse(localStorage.getItem("userId")) ;
        const response = await fetch(`${destinationURL}/${item.id}`,{
            method : "DELETE" ,
            headers : {
                Authorization : `Bearer ${userAuthToken}`
            }
        });
        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        const data = await response.json();
        console.log(data);
        fetchData(`${destinationURL}`,`?_page=1&_limit=8`) ;
    } catch (error) {
        console.error('Error:', error);
    }
}

function createCard(item,index){
    let card = document.createElement("div") ;
    card.classList.add("card");

    let cardImg = document.createElement("div") ;
    cardImg.classList.add("card-img");
  
    let img = document.createElement("img") ;
    img.src = item.imageURL ; 

    let cardBody = document.createElement("div") ;           
    cardBody.classList.add("card-body");
  
    let id = document.createElement("p") ;
    id.classList.add("card-id");
    id.innerText = item.id ; 
  
    let country = document.createElement("p") ;
    country.classList.add("card-country");
    country.innerText = item.country ;
  
    let city = document.createElement("p") ;
    city.classList.add("card-city");
    city.innerText = item.city ;

    let description = document.createElement("p") ;
    description.classList.add("card-description");
    description.innerText = item.description ;
  
    let price = document.createElement("span") ;
    price.classList.add("card-strikethroughprice");
    price.innerText = item.price ;
  
    let offerPrice = document.createElement("span") ;
    offerPrice.classList.add("card-offerPrice");
    offerPrice.innerText = item.offerPrice ;
  
    let package = document.createElement("p") ;
    package.classList.add("card-package");
    package.innerText = item.package ;

    let edit = document.createElement("button") ;
    edit.classList.add("edit") ;
    edit.innerText = "Edit";

    edit.addEventListener("click",() => {
      // adminInputId.value = item.id ;
      adminInputCountry.value = item.country ;
      adminInputCity.value = item.city ;
      adminInputImageURL.value = item.imageURL ;
      adminInputDescription.value = item.description ;
      adminInputPrice.value = item.price ;
      adminInputOfferPrice.value = item.offerPrice ;
      adminInputPackage.value = item.package ;
      adminInputStart.value = item.date.start ;
      adminInputEnd.value = item.date.end ;
      adminInputRatings.value = item.ratings ;
      adminInputLovedBy.value = item.lovedBy ;
    })

    let deleteBtn = document.createElement("button") ;
    deleteBtn.classList.add("delete") ;
    deleteBtn.innerText = "Delete" ;
    deleteBtn.addEventListener("click",() => {
      deleteDestination(item,index) ;
    })

    let details = document.createElement("div") ;
    details.classList.add("details");

    let editBtnsdiv = document.createElement("div") ;
    editBtnsdiv.classList.add("edit-buttons");

    cardImg.append( img ) ;
    details.append( city,price,offerPrice )
    editBtnsdiv.append( edit,deleteBtn )
    cardBody.append( details, editBtnsdiv)
  
    card.append( cardImg, cardBody ) ;
    return card ;
}




  // city: "Singapore"
// country: "Australia"
// date: {start: '2024-07-10', end: '2024-07-18'}
// description: "Experience the breathtaking beauty of Sydney, with its iconic Opera House and stunning harbor views."
// id: 1
// imageURL: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2514/singapore1.jpg?crop=156:227&downsize=156:227"
// lovedBy: 82
// offerPrice: 1199
// package: "7 Days / 6 Nights"
// price: 1400
// ratings: 4.5