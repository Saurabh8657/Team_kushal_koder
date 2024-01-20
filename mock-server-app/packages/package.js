const baseURl = `https://kushal-koder-api.onrender.com/packagesNational`;


let container = document.getElementById("container-card");
let page = 1;
const limit = 8;

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


    let anchor = document.createElement("a");

    let bookNow = document.createElement("button");
    bookNow.classList.add("btn");
    bookNow.textContent = "Book Now";
    
    anchor.append(bookNow);

    
    card.append(image,cardContent,cardTitle,anchor);
    return card ;
}
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    console.log(scrollHeight,scrollTop,clientHeight)
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        fetchData();
    }
});

 fetchData();