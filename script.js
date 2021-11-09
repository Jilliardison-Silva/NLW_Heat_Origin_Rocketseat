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