
console.log("DEHORS")

const form = document.querySelector('#cardForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("DEDANS")
    const formData = new FormData(form);

    let card = {
        smallImgUrl: formData.get('smallImgUrl'),
        family: formData.get('family'),
        imgUrl: formData.get('imgUrl'),
        name: formData.get('name'),
        description: formData.get('description'),
        hp: formData.get('hp'),
        energy: formData.get('energy'),
        attack: formData.get('attack'),
        defense: formData.get('defense'),
        userID: 0,
        id: 0,
        price: 100,
        affinity: "shadow"
    };

    //ajout local
    const data = localStorage.getItem("monFichier")
    const parsedData = JSON.parse(data)
    parsedData.push(card)
    localStorage.setItem("monFichier", JSON.stringify(parsedData));

    console.log(card);

    //Post Api
    let urlPost="http://vps.cpe-sn.fr:8083/card"; 
    let context =   {
                        method: 'POST',
                        headers: {
                            'Accept': '*/*',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(card)
                    };
        
    fetch(urlPost,context)
        .then(response => response.json())
        .catch(error => err_callback(error));
});

function err_callback(error){
    console.log(error);
}