function escolhaPokemon(nome_pokemon) {
   
    alert("Boa ESCOLHA! "+nome_pokemon);
    
}

function tocaSomPikachu() {
    document.querySelector('#som_pikachu').play();  
}
document.querySelector('#pokePika').onclick = tocaSomPikachu;