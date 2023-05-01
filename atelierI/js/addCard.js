
console.log("DEHORS")

const form = document.querySelector('#cardForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("DEDANS")
    const formData = new FormData(form);

    const card = {
        smallImgUrl: formData.get('smallImgUrl'),
        family: formData.get('family'),
        imgUrl: formData.get('imgUrl'),
        name: formData.get('name'),
        description: formData.get('description'),
        hp: formData.get('hp'),
        energy: formData.get('energy'),
        attack: formData.get('attack'),
        defense: formData.get('defense')
    };

    const data = localStorage.getItem("monFichier")
    const parsedData = JSON.parse(data)
    parsedData.push(card)
    localStorage.setItem("monFichier", JSON.stringify(parsedData));

    console.log(card);
});