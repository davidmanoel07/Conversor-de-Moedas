// Formulário
const form = document.querySelector(".form");

// Input valor
const valor = document.getElementById("valor");

// Moeda inicial
const moedaInicial = document.getElementById("moeda-inicial");

// Moeda final
const moedaFinal = document.getElementById("moeda-final");

// Resultado
const resultadoFinal = document.getElementById("result");



form.addEventListener("submit", async (e) => { e.preventDefault();

    const valorNumero = parseFloat(valor.value);
    const origem = moedaInicial.value;
    const destino = moedaFinal.value;

    //
    if(!valorNumero || !origem || !destino){
        resultadoFinal.textContent = "Preecha todos os campos!";
        return;
    }

    if (origem === destino){
        resultadoFinal.textContent ="Erro: Escolha moedas diferentes!";
        return;
    }
    try{
                        
        const APIurl = `https://v6.exchangerate-api.com/v6/7bcbf56ff9a330c4321d46d4/latest/USD`;

        const response = await fetch(APIurl);
        const data = await response.json();
        const taxa = data.conversion_rates[destino];

        const valorConvertido = valorNumero * taxa;
        resultadoFinal.textContent =  `${valorNumero} ${origem} = ${valorConvertido.toFixed(2)} ${destino}`;

    } catch (error) {
        resultadoFinal.textContent = "Erro ao buscar dados.";
    }
});



