const LinksSocialMedia = {
    github: "Jilliardison-Silva",
    youtube: "",
    facebook: "",
    instagram: "jilliardison",
    twitter: ""
}

function ChangeSocialMediaLink(){ 
    // O controlador li e referente a cada children ( Filho ), verificando quantos filhos tem e colocando cada filho por vez dentro de li  
    for(let li of SocialLinks.children){  
        //devido a const não esta no escopo geral, ela é apagada a cada repetição do for
        const social = li.getAttribute('class') 
        //[0] esta pegando o primeiro filho da li na posição 0 , que no caso é a tag a e usando objeto, para poder usar variaveis deve ser usado conchetes
        li.children[0].href = `http://${social}.com/${LinksSocialMedia[social]}` 
    }
}
ChangeSocialMediaLink()

function GetGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    // fetch esta pegando o que esta sendo retornado pela url, o then() nos entrega o que foi obtido pelo fetch
    fetch(url) // esta pegando a resposta da url
    .then(response => response.json()) // arrow function == function anonima esta pegando o valor recebido e convertendo em dados json
    .then(informations => {
        userImage.src = informations.avatar_url
        userName.textContent = informations.name
        userBio.textContent = informations.bio
        userGitHub.href = informations.html_url
        userLogin.textContent = informations.login
    })

}

GetGitHubProfileInfos()