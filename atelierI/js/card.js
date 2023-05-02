const GET_CARDS="http://vps.cpe-sn.fr:8083/cards"; 
let context =   {
                    method: 'GET'
                };

// recup param requete GET
const queryString = window.location.search;
 
// extraire param
const params = new URLSearchParams(queryString);
const param1 = params.get('param');

let template = document.querySelector("#selectedCard");

if(param1 == "non"){
    const data = localStorage.getItem("monFichier")
    const parsedData = JSON.parse(data)

    for(const card of parsedData){
        let clone = document.importNode(template.content, true);
        //pour le button
        let choice = ["Buy","Read"]
        let aleaButton = Math.floor(Math.random()*2)

        let aleaComm = Math.floor(Math.random()*card.price)

        newContent= clone.firstElementChild.innerHTML
                    .replace(/{{family_src}}/g, card.smallImgUrl)
                    .replace(/{{family_name}}/g, card.name)
                    .replace(/{{image_src}}/g, card.imgUrl)
                    .replace(/{{date}}/g, card.id)
                    .replace(/{{comment}}/g, aleaComm + " comments")
                    .replace(/{{like}}/g, Math.floor(card.price))
                    .replace(/{{button}}/g, choice[aleaButton]);
        clone.firstElementChild.innerHTML= newContent;
            
        let cardContainer= document.querySelector("#gridContainer");
        cardContainer.appendChild(clone);
    }
}
else{
    fetch(GET_CARDS,context)
        .then(response => response.json()) 
            .then(response => {
                const jsonData = JSON.stringify(response);
                localStorage.setItem("monFichier",jsonData)
                const parsedData = JSON.parse(jsonData)

                for(const card of parsedData){
                    let clone = document.importNode(template.content, true);
                    //pour le button
                    let choice = ["Buy","Read"]
                    let aleaButton = Math.floor(Math.random()*2)

                    let aleaComm = Math.floor(Math.random()*card.price)

                    newContent= clone.firstElementChild.innerHTML
                                .replace(/{{family_src}}/g, card.smallImgUrl)
                                .replace(/{{family_name}}/g, card.name)
                                .replace(/{{image_src}}/g, card.imgUrl)
                                .replace(/{{date}}/g, card.id)
                                .replace(/{{comment}}/g, aleaComm + " comments")
                                .replace(/{{like}}/g, Math.floor(card.price))
                                .replace(/{{button}}/g, choice[aleaButton]);
                    clone.firstElementChild.innerHTML= newContent;
                
                    let cardContainer= document.querySelector("#gridContainer");
                    cardContainer.appendChild(clone);
                }})
            .catch(error => err_callback(error));
    }


function err_callback(error){
    console.log(error);
}


