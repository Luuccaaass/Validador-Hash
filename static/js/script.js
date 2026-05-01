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
            alert("Hash igual");
        }
        else{
            alert("Hash diferente!");
        }
    });
    

}

