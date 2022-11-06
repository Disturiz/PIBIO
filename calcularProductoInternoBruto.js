//Seleccion de valores en el HTML
const mining = document.querySelector('#mining');
const factory = document.querySelector('#factory');
const estate = document.querySelector('#estate');
const commerce = document.querySelector('#commerce');
const communication = document.querySelector('#communication');
const banking = document.querySelector('#banking');
const btn = document.querySelector('#btnCalcular')
const population = document.querySelector("#population");
const tPIB = document.querySelector("#totalProducto");
const tCAPITAL = document.querySelector("#totalCapital");
const pMining = document.querySelector("#porcenmining");
const pFactory = document.querySelector("#porcenfactory");
const pEstate = document.querySelector("#porcenestate");
const pCommerce = document.querySelector("#porcenestate");
const pCommunic = document.querySelector("#porcencommunication");
const pBanking = document.querySelector("#porcenbanking");




btn.addEventListener('click',calculoPib);

function calculoPib() {
    // Asignación de valores a las variables
    let miningValue = Number(mining.value);
    let factoryValue = Number(factory.value);
    let estateValue = Number(estate.value);
    let commerceValue = Number(commerce.value);
    let communicationValue = Number(communication.value);
    let bankingValue = Number(banking.value);
    let populationValue = Number(population.value);

    console.log ({
        miningValue,
        factoryValue,
        estateValue,
        commerceValue,
        communicationValue,
        bankingValue,
        populationValue
    });

    // Validación de campos
    if(!miningValue || miningValue<0){
        miningValue = 0;
        mining.value = 0;
    }

    if(!factoryValue || factoryValue<0){
        factoryValue = 0;
        factory.value = 0;
    }

    if(!estateValue || estateValue<0){
        estateValue = 0;
        estate.value = 0;
    }

    if(!commerceValue || commerceValue<0){
        commerceValue = 0;
        commerce.value = 0;
    }

    if(!communicationValue || communicationValue<0){
        communicationValue = 0;
        communication.value = 0;
    }

    if(!bankingValue || bankingValue<0){
        bankingValue = 0;
        banking.value = 0;
    }

    if(!populationValue || populationValue<0){
        populationValue = 0;
        population.value = 0;
    }

    // Calculo de PIB
    const total = miningValue + factoryValue + estateValue + commerceValue + communicationValue + bankingValue;
    const tPIB = total;
    console.log("total PIB: ", {tPIB});

    // Cáculo ingreso Per Capital
    const tCAPITAl =  (miningValue + factoryValue + estateValue + commerceValue + communicationValue + bankingValue) / populationValue;
    console.log("total Percapital: ", {tCAPITAl})
    let totalElementos = [];
    totalElementos.push(mining.value);
    totalElementos.push(factory.value);
    totalElementos.push(estate.value);
    totalElementos.push(commerce.value);
    totalElementos.push(communication.value);
    totalElementos.push(banking.value);
    console.log({totalElementos});

    // Calcula los porentajes de los elementos del PIB
    const pMining = ((mining.value * 100) / tPIB).toFixed();
    const pFactory = ((factory.value * 100) / tPIB).toFixed();
    const pEstate = ((estate.value * 100) / tPIB).toFixed();
    const pCommerce = commerce.value * 100 / tPIB;
    const pBanking = ((banking.value * 100) / tPIB).toFixed();
    const pCommunic = ((communication.value * 100) / tPIB).toFixed();
    console.log("total Mineria: ", {pMining});
    console.log("total Manufactura: ", {pFactory});
    console.log("total Comercios: ", {pCommerce});
    console.log("total Cumunicaciones: ", {pCommunic}); 
    console.log("total Finanzas: ", {pBanking});
    

    if(tPIB != 0){
        tPIB.innerText = '$' + tPIB;
    }
    else {
        tPIB.innerText = 'No existen elementos para calcular PIB';
    }

    if(tCAPITAL != 0){
        tCAPITAL.innerText = '$' + tCAPITAl;
    }
    else {
        tCAPITAL.innerText = 'No existen elementos para calcular PIB';
    }

    pMining.innerText =  '%' + pMining;
    pBanking.innerText = '%' + pBanking;
    
}