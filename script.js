Chart.defaults.bar.borderWidth = 40;
function chartLoader(){
    let colors = ['rgba(255, 255, 255, 1)']
    let consumptionKaart = document.getElementById("consumption").getContext('2d');
    let consumptionMars = new Chart(consumptionKaart, {
    type:'bar',
    data:{
        labels:['1st Quater','2st Quater','3st Quater','4st Quater'],
        datasets:[{
            label:'Population',
            data:[
                24,
                26,
                30,
                36
            ],
            backgroundColor: [colors, colors, colors, colors],
            order: 2
        }, {
            label:'Daily consumption per capita',
            data:[
                2,
                2.1,
                2.9,
                3.9
            ],
            type: 'line',
            fill: 'false',
            backgroundColor: ['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.6)'],
            //borderColor: ['blue', 'blue', 'blue', 'blue'], to test
            order: 1            
        }]  
    },
    options:{
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: 'Mars population and Mars Mars consumption',
            fontColor: 'white',
            fontSize: 16
        },
        aspectRatio: 1.6,
        spanGaps: true
    }
    });
    let salesKaart = document.getElementById("sales").getContext('2d');
    let salesMars = new Chart(salesKaart, {
    type:'line',
    data:{
        labels:['1st Quater','2st Quater','3st Quater','4st Quater'],
        datasets:[{
            label:'Mars',
            data:[
                4380,
                4982,
                7939,
                12812
            ],
            backgroundColor: 'rgba(255, 255, 255, 0.6)'
        }, {
            label:'Milkyway',
            data:[
                3100,
                2900,
                1100,
                0
            ],
            type: 'line',
            backgroundColor: 'rgba(255, 255, 255, 0.6)'
        }, {
            label:'Snicker',
            data:[
                1500,
                1600,
                500,
                0
            ],
            type: 'line',
            backgroundColor: 'rgba(255, 255, 255, 0.6)'
        }, {
            label:'Twix',
            data:[
                1050,
                950,
                10,
                0
            ],
            type: 'line',
            backgroundColor: 'rgba(255, 255, 255, 0.6)'
        }]
    },
    options:{
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        aspectRatio: 1.6,
        title: {
            display: true,
            text: 'Quaterly candybar sales',
            fontColor: 'white',
            fontSize: 16
        }
    }
    });
    let productionKaart = document.getElementById("production").getContext('2d');
    let productionnMars = new Chart(productionKaart, {
    type:'bar',
    data:{
        labels:['1st Quater','2st Quater','3st Quater','4st Quater'],
        datasets:[{
            label:'Mars Production',
            data:[
                5000,
                5600,
                6400,
                7400
            ],
            backgroundColor: [colors, colors, colors, colors],
            minBarLength: 300,
        }]
    },
    options:{
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        borderWidth: 8,
        aspectRatio: 1.6,
        legend: {
            display: true,
            position: 'top',
            base: 0,
            labels: {
                font:{
                    family: "'DDIN'",
                    size: 180
                }
            }
        },
        title: {
            display: true,
            text: 'Quaterly Mars production',
            fontColor: 'white',
            fontSize: 16
        }
    }
    });
    let govermentKaart = document.getElementById("goverment").getContext('2d');
    let govermentMars = new Chart(govermentKaart, {
    type:'doughnut',
    data:{
        labels:['Mars','Milkyway','Snicker','Twix'],
        datasets:[{
            label:'1St. Chamber',
            data:[
                85,
                40,
                20,
                5
            ],
            backgroundColor: [colors, 'rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.7)']
        },
        {
            label:'2St. Chamber',
            data:[
                50,
                15,
                10,
                0
            ],
            backgroundColor: [colors, 'rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.7)']
        }]
    },
    options:{
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        borderWidth: 8,
        title: {
            display: true,
            text: '1st and 2nd Chamber of Mars',
            fontColor: 'white',
            fontSize: 16
        },
        aspectRatio: 1.6,
        legend: {
            display: true,
            position: 'right',
            labels: {
                font:{
                    family: "'DDIN'",
                    size: 180
                }
            }
        }
    }
    });
}
window.onload = function(){
        chartLoader();
}