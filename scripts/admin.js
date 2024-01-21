/// urls
const baseURL = 'https://kushal-koder-api.onrender.com/';

const destinationURL = `${baseURL}destinations/`;
const nationalPackageURL = `${baseURL}packagesNational/`;
const internationalPackageURL = `${baseURL}packagesInternational/`;



////////containers
let adminContainer_1 = document.querySelector(".admin-container1") ;
let adminContainer_2 = document.querySelector(".admin-container2") ;
let adminContainer_3 = document.querySelector(".admin-container3") ;
let updateDataForm = document.querySelector(".update-data-form") ;
let destinationList = document.querySelector(".destination-list") ;
let nationalPackageList = document.querySelector(".national-package-list") ;
let internationalPackageList = document.querySelector(".international-package-list") ;
let paginationWrapper1 = document.querySelector(".paginationWrapper1") ;
let paginationWrapper2 = document.querySelector(".paginationWrapper2") ;
let paginationWrapper3 = document.querySelector(".paginationWrapper3") ;

/// add---update Destintion form 
let destintionInputId = document.querySelector(".id") ;
let destintionInputCity = document.querySelector(".city") ;
let destintionInputCountry = document.querySelector(".country") ;
let destintionInputDescription = document.querySelector(".description") ;
let destintionInputImageURL = document.querySelector(".imageURL") ;


///// update Package form 

//// National Pacakages
let packageInputId = document.querySelector(".id") ;
let packageInputCity = document.querySelector(".city") ;
let packageInputCountry = document.querySelector(".country") ;
let packageInputPackage = document.querySelector(".package") ;
let packageInputPrice = document.querySelector(".price") ;
let packageInputOfferPrice = document.querySelector(".offerPrice") ;
let packageInputImageURL = document.querySelector(".imageURL") ;
//// Inter-National Pacakages



////////// Destination buttons
let addNewDestinationBtn = document.querySelector("#add-new-destination") ;
let addNewNationalPackageBtn = document.querySelector("#add-new-national-package") ;
let addNewInternationalPackageBtn = document.querySelector("#add-new-international-package") ;

/// for modal
addNewDestinationBtn.classList.add("btn", "btn-info", "btn-lg") ;
addNewDestinationBtn.setAttribute( "data-toggle","modal" ) ;
addNewDestinationBtn.setAttribute( "data-target","#myModal" ) ;
addNewDestinationBtn.setAttribute( "id","add-new-destination" ) ;

addNewNationalPackageBtn.classList.add("btn", "btn-info", "btn-lg") ;
addNewNationalPackageBtn.setAttribute( "data-toggle","modal" ) ;
addNewNationalPackageBtn.setAttribute( "data-target","#myModal" ) ;
addNewNationalPackageBtn.setAttribute( "id","add-new-destination" ) ;

addNewInternationalPackageBtn.classList.add("btn", "btn-info", "btn-lg") ;
addNewInternationalPackageBtn.setAttribute( "data-toggle","modal" ) ;
addNewInternationalPackageBtn.setAttribute( "data-target","#myModal" ) ;
addNewInternationalPackageBtn.setAttribute( "id","add-new-destination" ) ;



//// inside modal buttons
let ModalAddDestinationBtn = document.querySelector(".add-destination-btn") ;
let ModalUpdateDestinationBtn = document.querySelector(".update-destination-btn") ;

let ModalAddNationalPackageBtn = document.querySelector(".add-national-btn") ;
let ModalUpdateNationalPackageBtn = document.querySelector(".update-national-btn") ;

let ModalAddInternationalPackageBtn = document.querySelector(".add-international-btn") ;
let ModalUpdateInternationalPackageBtn = document.querySelector(".update-international-btn") ;

///// event listner
ModalAddDestinationBtn.addEventListener("click",addDestination ) ;
ModalUpdateDestinationBtn.addEventListener("click",updateDestination ) ;

ModalAddNationalPackageBtn.addEventListener("click",addNationalPackage ) ;
ModalUpdateNationalPackageBtn.addEventListener("click",updateNationalPackage ) ;

ModalAddInternationalPackageBtn.addEventListener("click",addInternationalPackage ) ;
ModalUpdateInternationalPackageBtn.addEventListener("click",updateInternationalPackage ) ;


// fetching function calls  
fetchData(`${destinationURL}`,`?_page=1&_limit=10`);
fetchData(`${nationalPackageURL}`,`?_page=1&_limit=10`);
fetchData(`${internationalPackageURL}`,`?_page=1&_limit=10`);

async function fetchData(url,query="") {
    try {
        const response = await fetch(`${url}${query}`);
        // for pagination
        let totalData = response.headers.get("X-Total-Count") ;
        let limit = 10 ;
        let totalPages = Math.ceil(totalData/limit) ;
        console.log(totalData,totalPages) ; 
        const data = await response.json();
        console.log(data);
        if( url===destinationURL ){
            displayDestinations(data);
            // for(let i=1; i<=totalPages; i++){
            //     let btn = document.createElement("button") ;
            //     btn.innerText = `${i}`;
            //     btn.addEventListener("click",() => { 
            //         fetchData( `${destinationURL}?_page=${i}&_limit=${limit}`,query )
            //     } )    
                      
            //     paginationWrapper1.append(btn) ;
            //     console.log("hey"); 
            // }
            console.log("hey"); 
        }else if( url===nationalPackageURL ){
            displayNationalPackages(data);
            // for(let i=1; i<=totalPages; i++){
            //     let btn = document.createElement("button") ;
            //     btn.innerText = `${i}`;
            //     btn.addEventListener("click",() => { 
            //         fetchData( `${nationalPackageURL}?_page=${i}&_limit=${limit}`,query )
            //     } )           
            //     paginationWrapper2.append(btn) ;
            // }
            
        }else if( url===internationalPackageURL ){
            displayInternationalPackages(data);
            // for(let i=1; i<=totalPages; i++){
            //     let btn = document.createElement("button") ;
            //     btn.innerText = `${i}`;
            //     btn.addEventListener("click",() => { 
            //         fetchData( `${internationalPackageURL}?_page=${i}&_limit=${limit}`,query )
            //     } )           
            //     paginationWrapper3.append(btn) ;
            // }
        }
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}
/////// pagination


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
    img.src = item.imageURL ; 

    let cardBody = document.createElement("div") ;           
    cardBody.classList.add("card-body");
  
    let country = document.createElement("p") ;
    country.classList.add("card-country");
    country.innerText = item.Country ;
  
    let city = document.createElement("p") ;
    city.classList.add("card-city");
    city.innerText = item.city ;

    let package = document.createElement("p") ;
    package.classList.add("card-package");
    package.innerText = item.Packages ;

    let price = document.createElement("span") ;
    price.classList.add("card-strikethroughprice");
    price.innerText = item.Price ;
  
    let offerPrice = document.createElement("span") ;
    offerPrice.classList.add("card-offerPrice");
    offerPrice.innerText = item.OfferPrice ;

    let edit = document.createElement("button") ;
    edit.innerText = "Edit";
    /// for modal
    edit.classList.add("edit" ,"btn", "btn-info", "btn-lg") ;
    edit.setAttribute( "data-toggle","modal" ) ;
    edit.setAttribute( "data-target","#myModal" ) ;

    edit.addEventListener("click",() => {
        ///// for emptying previous data
        destintionInputId.value =  "" ;     
        destintionInputCity.value =  "" ;       
        destintionInputCountry.value =  "" ;         
        destintionInputDescription.value =  "" ; 
        destintionInputImageURL.value =   "" ;   
      packageInputId.value =`Id : ${item.id}`   ;
      packageInputCity.value = `city : ${item.city}` ;
      packageInputCountry.value = `Country : ${item.Country}` ;
      packageInputPackage.value = `Package : ${item.Package}` ;
      packageInputPrice.value = `Price : ${item.Price}` ;
      packageInputOfferPrice.value = `OfferPrice : ${item.OfferPrice}` ;
      packageInputImageURL.value = `imageURL : ${item.imageURL}` ;
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
    details.append( city, package, offerPrice, price ) ;
    editBtnsdiv.append( edit, deleteBtn ) ;
    cardBody.append( details, editBtnsdiv) ;
  
    card.append( cardImg,cardBody ) ;
    return card ;
}

function createDestinationsCard(item,index){
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
      destintionInputId.value = `Id : ${item.id}`   ;
      destintionInputCity.value = `city : ${item.city }` ;
      destintionInputCountry.value = `Country : ${item.Country}`  ;
      destintionInputDescription.value = `Description : ${item.Description}`  ;
      destintionInputImageURL.value = `imageURL : ${item.image}`  ;
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

function displayDestinations(destinations) {
    console.log(destinations);
    destinationList.innerHTML = '';
    destinations.forEach( (item,index) => {
        const card = createDestinationsCard(item,index) ;
        destinationList.append(card);
    });
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
    let response = await fetch(`${nationalPackageURL}`,{
        method : "POST",
        headers : { "content-type" : "application/json"},
        body : JSON.stringify(obj)
    } );
    let data = await response.json();
    console.log(data) ;
    fetchData(`${nationalPackageURL}`,`?_page=1&_limit=10`) ;
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
    let response = await fetch(`${internationalPackageURL}`,{
        method : "POST",
        headers : {"content-type" : "application/json"},
        body : JSON.stringify(obj)
    } );
    let data = await response.json();
    console.log(data) ;
    fetchData(`${internationalPackageURL}`,`?_page=1&_limit=10`) ;
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
    let response = await fetch(`${nationalPackageURL}/${packageInputId.value}`,{
        method : "PATCH",
        headers : {"content-type" : "application/json",},
        body : JSON.stringify(obj)
    } );
    let data = await response.json();
    console.log(data) ;
    fetchData(`${nationalPackageURL}`,`?_page=1&_limit=10`) ;
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
    let response = await fetch(`${internationalPackageURL}/${packageInputId.value}`,{
        method : "PATCH",
        headers : {"content-type" : "application/json",},
        body : JSON.stringify(obj)
    } );
    let data = await response.json();
    console.log(data) ;
    fetchData(`${internationalPackageURL}`,`?_page=1&_limit=10`) ;
 }
 catch(error){
    console.log(`from update international Package : `,error) ;
 }
}

async function deleteNationalPackage(item,index){
    try {
        const response = await fetch(`${nationalPackageURL}/${item.id}`,{
            method : "DELETE" 
        });
        const data = await response.json();
        console.log(data);
        fetchData(`${nationalPackageURL}`,`?_page=1&_limit=10`) ;
    } catch (error) {
        console.error('delete National Package:', error);
    }
}

async function deleteInternationalPackage(item,index){
    try {
        const response = await fetch(`${internationalPackageURL}/${item.id}`,{
            method : "DELETE" 
        });
        const data = await response.json();
        console.log(data);
        fetchData(`${internationalPackageURL}`,`?_page=1&_limit=10`) ;
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
        "description": destintionInputDescription.value,
        "image" : destintionInputImageURL.value
    }
 try{
    let response = await fetch(`${destinationURL}`,{
        method : "POST",
        headers : { 
            "content-type" : "application/json"
        },
        body : JSON.stringify(obj)
    } );
    let data = await response.json();
    console.log(data) ;
    fetchData(`${destinationURL}`,`?_page=1&_limit=10`) ;
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
        "description": destintionInputDescription.value,
        "image" : destintionInputImageURL.value
    }
 try{
    let response = await fetch(`${destinationURL}${destintionInputId.value}`,{
        method : "PATCH",
        headers : { 
            "content-type" : "application/json"
        },
        body : JSON.stringify(obj)
    } );
    let data = await response.json();
    console.log(data) ;
    fetchData(`${destinationURL}`,`?_page=1&_limit=10`) ;
 }
 catch(error){
    console.log(`from update desination : `,error) ;
 }
}

async function deleteDestination(item,index){
    try {
        const response = await fetch(`${destinationURL}/${item.id}`,{
            method : "DELETE" 
        });
        const data = await response.json();
        console.log(data);
        fetchData(`${destinationURL}`,`?_page=1&_limit=10`) ;
    } catch (error) {
        console.error('Delete Destination Error:', error);
    }
}



