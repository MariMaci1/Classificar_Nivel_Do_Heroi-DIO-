function iniciar(nivelHeroi){

    let nomeDoHeroi = document.getElementById("nomeDoHeroi").value;
    let nivelXP = Number(document.getElementById("nivelXP").value);
    let botaoXP = document.getElementById("botaoXP");

    let resultadoFinal = niveis(nivelXP);

    document.getElementById("resultado").innerHTML = `O herói ${nomeDoHeroi} está no nível ${resultadoFinal}`;
    console.log(nivelXP)

    function niveis(nivelXP){
        if (nivelXP <= 1000){
            return "Ferro";
        } else if(nivelXP >= 1001 && nivelXP <= 2000){
            return "Bronze";
        } else if(nivelXP >= 2001 && nivelXP <= 5000){
            return "Prata";
        } else if(nivelXP >= 5001 && nivelXP <= 7000){
            return "Ouro";
        } else if(nivelXP >= 7001 && nivelXP <= 8000){
            return "Platina";
        } else if(nivelXP >= 8001 && nivelXP <= 9000){
            return "Ascendente";
        } else if(nivelXP >= 9001 && nivelXP <= 10000){
            return "Imortal";
        } else if(nivelXP >= 10001){
            return "Radiante";
        }
    }
}

