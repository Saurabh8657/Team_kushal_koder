/// urls

const baseURL = 'https://kushal-koder-api.onrender.com/';
const destinationURL =  `${baseURL}destinations/`;
const nationalPackageURL = `${baseURL}packagesNational/`;
const internationalPackageURL = `${baseURL}packagesInternational/`;
    const loadMoreNationalButton = document.getElementById('load-more-national');
    const loadMoreInternationalButton = document.getElementById('load-more-international');
    const internationalPackageList = document.getElementById('cards-container-international');

    const nationalPackageList = document.getElementById('cards-container-national');
    let nationalCurrentPage = 1;
    

    fetchData(`${internationalPackageURL}`,`?_page=1&_limit=10`);
     fetchData(`${destinationURL}`,`?_page=1&_limit=10`);
fetchData(`${nationalPackageURL}`,`?_page=1&_limit=10`);

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
          } else if( url===nationalPackageURL ){
              displayNationalPackages(data);
              
              
          }else if( url===internationalPackageURL ){
              displayInternationalPackages(data);
          }
          
      } catch (error) {
          console.error('Fetch Error:', error);
      }
  }
  loadMoreNationalButton.addEventListener('click', function () {
    fetchAndAppendData(nationalPackageURL, nationalCurrentPage);
  });

  async function fetchAndAppendData(url, page) {
    try {
      const response = await fetch(`${url}?_page=${page}&_limit=10`);
      let totalData = response.headers.get("X-Total-Count");
      let totalPages = Math.ceil(totalData / 10); // Assuming a limit of 10 items per page
      const data = await response.json();
      displayNationalPackages(data);

      // Update current page
      nationalCurrentPage++;

      // Show/hide the load more button based on the current page and total pages
      if (nationalCurrentPage <= totalPages) {
        loadMoreNationalButton.style.display = 'block';
      } else {
        loadMoreNationalButton.style.display = 'none';
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  }

  
  function displayNationalPackages(packages){
    console.log(packages);
    nationalPackageList.innerHTML = '';
    packages.forEach( (item,index) => {
        const card = createPackageCard(item,index) ;
        nationalPackageList.append(card);
    });
}


function displayInternationalPackages(packages){
  console.log(packages);
    internationalPackageList.innerHTML = '';
    packages.forEach( (item,index) => {
        const card = createPackageCard(item,index) ;
        internationalPackageList.append(card);
    });
}
const destinationList = document.getElementById('destination-list');
function displayDestinations(destinations) {
  console.log(destinations);
  destinationList.innerHTML = '';
  destinations.forEach( (item,index) => {
      const card = createDestinationsCard(item,index) ;
      destinationList.append(card);
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

  let details = document.createElement("div") ;
  details.classList.add("details");

 
  cardImg.append( img ) ;
  details.append( city ) ;
cardBody.append(details);
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

  let details = document.createElement("div") ;
  details.classList.add("details");

  cardImg.append( img ) ;
  details.append( city )
  cardBody.append(details);
  card.append( cardImg,cardBody ) ;
  return card ;
}
fetchAndAppendData(nationalPackageURL, nationalCurrentPage);

    

    
    

  
  
  