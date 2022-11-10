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
const pCommerce = document.querySelector("#porcencommerce");
const pCommunic = document.querySelector("#porcencommunication");
const pBanking = document.querySelector("#porcenbanking");
const pais = document.querySelector("#country");





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
    const totalPIB = total;
    console.log("total PIB: ", {totalPIB});

    // Cáculo ingreso Per Capital
    const tCAPITAl =  totalPIB / populationValue;
    console.log("total Percapital: ", {tCAPITAl})
    let totalElementos = [];
    totalElementos.push(mining.value);
    totalElementos.push(factory.value);
    totalElementos.push(estate.value);
    totalElementos.push(commerce.value);
    totalElementos.push(communication.value);
    totalElementos.push(banking.value);

    console.log("tCAPITAl", {tCAPITAl});

    // Calcula los porentajes de los elementos del PIB
    const tMining = ((mining.value * 100) / totalPIB).toFixed();
    const tFactory = ((factory.value * 100) / totalPIB).toFixed();
    const tEstate = ((estate.value * 100) / totalPIB).toFixed();
    const tCommerce = ((commerce.value * 100) / totalPIB).toFixed();
    const tBanking = ((banking.value * 100) / totalPIB).toFixed();
    const tCommunic = ((communication.value * 100) / totalPIB).toFixed();

    if(totalPIB != 0){
        tPIB.style.color = 'white';
        tPIB.innerText = 'Mill$ ' + totalPIB;
    }
    else {
        tPIB.style.color = 'red';
        tPIB.innerText = 'No existen elementos para calcular PIB';
    }

    if(tCAPITAl != 0){
        tCAPITAL.style.color = 'white'
        tCAPITAL.innerText = '$ ' + tCAPITAl.toFixed(2);
    }
    else {
        tCAPITAL.style.color = 'red';
        tCAPITAL.innerText = 'No existe Igreso Per Capital';
    }

    pMining.innerText = tMining + '%';
    pFactory.innerText = tFactory + '%';
    pEstate.innerText = tEstate + '%';
    pCommerce.innerText = tCommerce + '%';
    pCommunic.innerText = tCommunic + '%';
    pBanking.innerText = tBanking + '%';

    const ctx = document.getElementById('myChart');
    const elementos = ['Mineria','Manufactura','Inmobilarios', 'Comercios', 'Comunicaciones', 'Financieras'];
    const porcentajes = totalElementos.map(function(element){
        return (element * 100)/totalPIB
    });
    console.log("Porcentajes: ", {porcentajes}); 
    
    
    const myChart = new Chart(ctx,{
        type: 'pie',
        data: {
            labels: elementos,
            datasets: [{
                label: 'Distribucion',
                data: porcentajes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235 ,0.2)',
                    'rgba(75, 192, 192 ,0.2)',
                    'rgba(153, 102,255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(100, 102, 155, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',   
                    'rgba(255, 159, 64, 1)',
                    'rgba(100, 102, 155, 1)'
                ],
                borderWidth: 1.5
            }]
        }
    })
}