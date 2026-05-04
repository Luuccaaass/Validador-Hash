function enviar() {
    fetch('/api/hash')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            alert('Deu certo!')
        })
        .catch(error => console.error('Erro: ', error))
};

async function send() {
    const input = document.getElementById('selectedFile');
    const file = input.files[0];
    const hash = document.getElementById('hashString');
    console.log(hash.value);
    const msgBox = document.getElementById('Message')

    const formData = new FormData();
    formData.append('selectedFile', file);
    const resposta = await fetch('/api/hash', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.hash)
        if (hash.value == data.hash){

            msgBox.classList.remove("InfoMessage", "invalid");
            msgBox.innerText = "Arquivo integro!";
            msgBox.classList.add("InfoMessage", "valid");
        }
        else{

            msgBox.classList.add("InfoMessage", "valid");
            msgBox.innerText = "Arquivo não íntegro!";
            msgBox.classList.add("InfoMessage", "invalid");
        }
    });
    

}

