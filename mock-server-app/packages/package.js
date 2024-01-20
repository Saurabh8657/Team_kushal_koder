const baseURl = `https://kushal-koder-api.onrender.com/packagesNational`;


let container = document.getElementById("container-card");

async function fetchData(){
    try{
        let res = await fetch(`${baseURl}`);
        // let totalPage = res.headers.get("X-Total-Count");
        //  console.log(totalPage);
        let data = await res.json();
        console.log(data);
         appendData(data);
    }catch(error){
        console.log(error);
    }
}
function appendData(data){
    container.innerHTML = " ";

    // let card = document.createElement("div");
    // card.classList.add("cardList");

    data.forEach((item)=>{
        let card = createCard(item);
        container.append(card);
    })
   
}
function createCard(item){
    let card = document.createElement("div");
    card.classList.add("card");

    let image = document.createElement("img");
    image.src = item.imageURL ;

    let cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    let cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = item.city ;

    let cardDesp = document.createElement("div");
    cardDesp.classList.add("card-description");
    // cardDesp.textContent = item.de
    

    
    card.append(image,cardContent,cardTitle);
    return card ;
}
 fetchData();