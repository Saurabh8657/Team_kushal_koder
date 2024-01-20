/// urls
const baseURL = 'https://kushal-koder-api.onrender.com/';

const destinationURL = `${baseURL}destinations`;
const nationalPackageURL = `${baseURL}packagesNational`;
const internationalPackageURL = `${baseURL}packagesInternational`;



////////containers
let adminContainer_1 = document.querySelector(".admin-container1") ;
let adminContainer_2 = document.querySelector(".admin-container2") ;
let adminContainer_3 = document.querySelector(".admin-container3") ;
let updateDataForm = document.querySelector(".update-data-form") ;
let destinationList = document.querySelector(".destination-list") ;
let nationalPackageList = document.querySelector(".national-package-list") ;
let internationalPackageList = document.querySelector(".international-package-list") ;


/// add---update Destintion form 
let destintionInputId = document.querySelector(".id") ;
let destintionInputCity = document.querySelector(".city") ;
let destintionInputCountry = document.querySelector(".country") ;
let destintionInputDescription = document.querySelector(".description") ;
let destintionInputImageURL = document.querySelector(".imageURL") ;


///// update Package form 

//// National Pacakages
let packageInputId = document.querySelector(".id2") ;
let packageInputCity = document.querySelector(".city2") ;
let packageInputCountry = document.querySelector(".country2") ;
let packageInputPackage = document.querySelector(".package2") ;
let packageInputPrice = document.querySelector(".price2") ;
let packageInputOfferPrice = document.querySelector(".offerPrice2") ;
let packageInputImageURL = document.querySelector(".imageURL2") ;
//// Inter-National Pacakages



////////// Destination buttons
let addNewDestinationBtn = document.querySelector("#add-new-destination") ;
let addDestinationBtn = document.querySelector(".add-destination-btn") ;
/// for modal
addNewDestinationBtn.classList.add("btn", "btn-info", "btn-lg") ;
addNewDestinationBtn.setAttribute( "data-toggle","modal" ) ;
addNewDestinationBtn.setAttribute( "data-target","#myModal" ) ;

addDestinationBtn.addEventListener("click",()=>{

})


let addNewNationalPackageBtn = document.querySelector("#add-new-national-package") ;
let addNewInternationalPackageBtn = document.querySelector("#add-new-international-package") ;

///// event listners




///// Destination update & add buttons
// let updateDestinationBtn = document.querySelector(".update-destination-btn") ;
// let addDestinationBtn = document.querySelector(".add-destination-btn") ;
// // ////// event listners
// updateDestinationBtn.addEventListener( "click" , updateDestination ) ;
// addDestinationBtn.addEventListener( "click" , addDestination ) ;



// ///// National Package update & add buttons
// let updatePackageBtn = document.querySelector(".update-package-btn") ;
// let addPackageBtn = document.querySelector(".add-package-btn") ;
// ////// event listners
// updatePackageBtn.addEventListener( "click" , updatePackage ) ;
// addPackageBtn.addEventListener( "click" , addPackage ) ;

// ///// Inter National Package update & add buttons
// let updatePackageBtn = document.querySelector(".update-package-btn") ;
// let addPackageBtn = document.querySelector(".add-package-btn") ;
// ////// event listners
// updatePackageBtn.addEventListener( "click" , updatePackage ) ;
// addPackageBtn.addEventListener( "click" , addPackage ) ;

console.log("data");
fetchData(`${destinationURL}`,`?_page=1&_limit=8`);
// fetchData(`${nationalPackageURL}`);
// fetchData(`${internationalPackageURL}`);
// fetchData(`${destinationURL}`,`?_page=1&_limit=8`);
// fetchData(`${nationalPackageURL}`,`?_page=1&_limit=8`);
// fetchData(`${internationalPackageURL}`,`?_page=1&_limit=8`);
async function fetchData(url,query="") {
    try {
        let userAuthToken = JSON.parse(localStorage.getItem("userAuthToken")) ;
        let userId = JSON.parse(localStorage.getItem("userId")) ;
        const response = await fetch(`${url}${query}`);
        const data = await response.json();
        console.log(data);
        // if( url===destinationURL ){
            displayDestinations(data);
        // }else if( url===nationalPackageURL ){
        //     displayNationalPackages(data);
        // }else if( url===internationalPackageURL ){
        //     displayInternationalPackages(data);
        // }
        
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

function displayNationalPackages(packages){
    nationalPackageList.innerHTML = '';
    packages.forEach( (item,index) => {
        const card = createPackageCard(item,index) ;
        nationalPackageList.append(card);
    });
}
function displayInternationalPackages(packages){
    internationalPackageList.innerHTML = '';
    packages.forEach( (item,index) => {
        const card = createPackageCard(item,index) ;
        internationalPackageList.append(card);
    });
}


function createPackageCard(item,index){
    let card = document.createElement("div") ;
    card.classList.add("card");

    let cardImg = document.createElement("div") ;
    cardImg.classList.add("card-img");
  
    let img = document.createElement("img") ;
    img.src = item.image ; 

    let cardBody = document.createElement("div") ;           
    cardBody.classList.add("card-body");
  
    // let id = document.createElement("p") ;
    // id.classList.add("card-id");
    // id.innerText = item.id ; 
  
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


    let edit = document.createElement("button") ;
    edit.innerText = "Edit";
    /// for modal
    edit.classList.add("edit" ,"btn", "btn-info", "btn-lg") ;
    edit.setAttribute( "data-toggle","modal" ) ;
    edit.setAttribute( "data-target","#myModal" ) ;

    edit.addEventListener("click",() => {
      packageInputId.value = item.id ;
      packageInputCity.value = item.city ;
      packageInputCountry.value = item.country ;
      packageInputPackage.value = item.package ;
      packageInputPrice.value = item.price ;
      packageInputOfferPrice.value = item.offerPrice ;
      packageInputImageURL.value = item.image ;
    })

    let deleteBtn = document.createElement("button") ;
    deleteBtn.classList.add("delete") ;
    deleteBtn.innerText = "Delete" ;

    deleteBtn.addEventListener("click",() => {
        if(item.country==="India"){
            deleteNationalPackage(item,index) ;
        }else{
            deleteInternationalPackage(item,index) ;
        }
    })

    let details = document.createElement("div") ;
    details.classList.add("details");

    let editBtnsdiv = document.createElement("div") ;
    editBtnsdiv.classList.add("edit-buttons");

    cardImg.append( img ) ;
    details.append( city, offerPrice, price ) ;
    editBtnsdiv.append( edit, deleteBtn ) ;
    cardBody.append( details, editBtnsdiv) ;
  
    card.append( cardImg,cardBody ) ;
    return card ;
}

function displayDestinations(destinations) {
    console.log(destinations);
    destinationList.innerHTML = '';
    destinations.forEach( (item,index) => {
        const card = createDestinationsCard(item,index) ;
        destinationList.append(card);
    });
}
function createDestinationsCard(item,index){

// Country: "Ireland"
// Description: "Charming Dublin, history, Temple Bar, Guinness, Irish culture, hospitality."
// city: "Dublin"
// id: 1

    let card = document.createElement("div") ;
    card.classList.add("card");

    let cardImg = document.createElement("div") ;
    cardImg.classList.add("card-img");
  
    let img = document.createElement("img") ;
    img.src = item.image ; 

    let cardBody = document.createElement("div") ;           
    cardBody.classList.add("card-body");

    let city = document.createElement("p") ;
    city.classList.add("card-city");
    city.innerText = item.city ;
  
    let country = document.createElement("p") ;
    country.classList.add("card-country");
    country.innerText = item.Country ;
  
    let edit = document.createElement("button") ;
    edit.innerText = "Edit";
    /// for modal
    edit.classList.add("edit" ,"btn", "btn-info", "btn-lg") ;
    edit.setAttribute( "data-toggle","modal" ) ;
    edit.setAttribute( "data-target","#myModal" ) ;

    edit.addEventListener("click",() => {
      destintionInputId.value = item.id ;
      destintionInputCity.value = item.city ;
      destintionInputCountry.value = item.country ;
      destintionInputDescription.value = item.description ;
      destintionInputImageURL.value = item.image ;
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
    details.append( city,country )
    editBtnsdiv.append( edit,deleteBtn )
    cardBody.append( details, editBtnsdiv)
  
    card.append( cardImg,cardBody ) ;
    return card ;
}


///////////// packages
async function addNationalPackage(){
    let obj = {
        "id": packageInputId.value,
        "city": packageInputCity.value ,
        "country": packageInputCountry.value,
        "package": packageInputPackage.value,
        "price": packageInputPrice.value,
        "offerPrice": packageInputOfferPrice.value,
        "image": packageInputImageURL.value,
    }
 try{
    let userAuthToken = JSON.parse(localStorage.getItem("userAuthToken")) ;
    let userId = JSON.parse(localStorage.getItem("userId")) ;
    let response = await fetch(`${nationalPackageURL}`,{
        method : "PUT",
        headers : { 
            "content-type" : "application/json",
            Authorization: `Bearer ${userAuthToken}`
        },
        body : JSON.stringify(obj)
    } );
    let data = await response.json();
    console.log(data) ;
    fetchData(`${nationalPackageURL}`,`?_page=1&_limit=8`) ;
 }
 catch(error){
    console.log(`from add National Package : `,error) ;
 }
}

async function addInternationalPackage(){
    let obj = {
        "id": packageInputId.value,
        "city": packageInputCity.value ,
        "country": packageInputCountry.value,
        "package": packageInputPackage.value,
        "price": packageInputPrice.value,
        "offerPrice": packageInputOfferPrice.value,
        "image": packageInputImageURL.value,
    }
 try{
    let userAuthToken = JSON.parse(localStorage.getItem("userAuthToken")) ;
    let userId = JSON.parse(localStorage.getItem("userId")) ;
    let response = await fetch(`${internationalPackageURL}`,{
        method : "PUT",
        headers : { 
            "content-type" : "application/json",
            Authorization: `Bearer ${userAuthToken}`
        },
        body : JSON.stringify(obj)
    } );
    let data = await response.json();
    console.log(data) ;
    fetchData(`${internationalPackageURL}`,`?_page=1&_limit=8`) ;
 }
 catch(error){
    console.log(`from add International Package : `,error) ;
 }
}

async function updateNationalPackage(){
    let obj = {
        "id": packageInputId.value,
        "city": packageInputCity.value ,
        "country": packageInputCountry.value,
        "package": packageInputPackage.value,
        "price": packageInputPrice.value,
        "offerPrice": packageInputOfferPrice.value,
        "image": packageInputImageURL.value,
    }
 try{
    let userAuthToken = JSON.parse(localStorage.getItem("userAuthToken")) ;
    let userId = JSON.parse(localStorage.getItem("userId")) ;
    let response = await fetch(`${nationalPackageURL}/${packageInputId.value}`,{
        method : "PATCH",
        headers : { 
            "content-type" : "application/json",
            Authorization: `Bearer ${userAuthToken}`
        },
        body : JSON.stringify(obj)
    } );
    let data = await response.json();
    console.log(data) ;
    fetchData(`${nationalPackageURL}`,`?_page=1&_limit=8`) ;
 }
 catch(error){
    console.log(`from update National Package : `,error) ;
 }
}

async function updateInternationalPackage(){
    let obj = {
        "id": packageInputId.value,
        "city": packageInputCity.value ,
        "country": packageInputCountry.value,
        "package": packageInputPackage.value,
        "price": packageInputPrice.value,
        "offerPrice": packageInputOfferPrice.value,
        "image": packageInputImageURL.value,
    }
 try{
    let userAuthToken = JSON.parse(localStorage.getItem("userAuthToken")) ;
    let userId = JSON.parse(localStorage.getItem("userId")) ;
    let response = await fetch(`${internationalPackageURL}/${packageInputId.value}`,{
        method : "PATCH",
        headers : { 
            "content-type" : "application/json",
            Authorization: `Bearer ${userAuthToken}`
        },
        body : JSON.stringify(obj)
    } );
    let data = await response.json();
    console.log(data) ;
    fetchData(`${internationalPackageURL}`,`?_page=1&_limit=8`) ;
 }
 catch(error){
    console.log(`from update international Package : `,error) ;
 }
}

async function deleteNationalPackage(item,index){
    try {
        let userAuthToken = JSON.parse(localStorage.getItem("userAuthToken")) ;
        let userId = JSON.parse(localStorage.getItem("userId")) ;
        const response = await fetch(`${nationalPackageURL}/${item.id}`,{
            method : "DELETE" ,
            headers : {
                Authorization : `Bearer ${userAuthToken}`
            }
        });
        const data = await response.json();
        console.log(data);
        fetchData(`${nationalPackageURL}`,`?_page=1&_limit=8`) ;
    } catch (error) {
        console.error('delete National Package:', error);
    }
}

async function deleteInternationalPackage(item,index){
    try {
        let userAuthToken = JSON.parse(localStorage.getItem("userAuthToken")) ;
        let userId = JSON.parse(localStorage.getItem("userId")) ;
        const response = await fetch(`${internationalPackageURL}/${item.id}`,{
            method : "DELETE" ,
            headers : {
                Authorization : `Bearer ${userAuthToken}`
            }
        });
        const data = await response.json();
        console.log(data);
        fetchData(`${internationalPackageURL}`,`?_page=1&_limit=8`) ;
    } catch (error) {
        console.error('delete InterNational Package:', error);
    }
}
///////////// Destinations
async function addDestination(){
    let obj = {
        "id": destintionInputId.value,
        "city": destintionInputCity.value ,
        "country": destintionInputCountry.value,
        "description": destintionInputDescription.value
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

async function updateDestination(){
    let obj = {
        "id": destintionInputId.value,
        "city": destintionInputCity.value ,
        "country": destintionInputCountry.value,
        "description": destintionInputDescription.value
    }
 try{
    let userAuthToken = JSON.parse(localStorage.getItem("userAuthToken")) ;
    let userId = JSON.parse(localStorage.getItem("userId")) ;
    let response = await fetch(`${destinationURL}/${destintionInputId.value}`,{
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
        const data = await response.json();
        console.log(data);
        fetchData(`${destinationURL}`,`?_page=1&_limit=8`) ;
    } catch (error) {
        console.error('Delete Destination Error:', error);
    }
}
