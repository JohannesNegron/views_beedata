var _URL1 = "ResultadosTemperatura29-05Abril.csv";//Escribir la ruta del archivo dentro del servidor
var graficar = (function(data){
    Highcharts.chart('container', {
        chart: {
            type: 'spline',
            zoomType: 'x, y'
            },
        title: {
            text: 'ResultadosTemperatura29-05Abril.csv'
        },

        subtitle: {
            text: 'FACULTAD DE VETERINARIA'
        },

        yAxis: {
            title: {
                text: 'Temperature'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        series: data
    });
});

function order(datos){
    var data = [
        {
            name : "Ambiental",
            data : []
        },
        {
            name : "DataLogger1",
            data : []
        },
        {
            name : "DataLogger2",
            data : []
        },
        {
            name : "DataLogger3",
            data : []
        },
        {
            name : "DataLogger4",
            data : []
        },
        {
            name : "DataLogger5",
            data : []
        }
    ];

    for(var i = 0; i < datos.length; i++){
        (data[0]['data']).push(parseFloat(datos[i]['Ambiental']));
        (data[1]['data']).push(parseFloat(datos[i]['DataLogger1']));
        (data[2]['data']).push(parseFloat(datos[i]['DataLogger2']));
        (data[3]['data']).push(parseFloat(datos[i]['DataLogger3']));
        (data[4]['data']).push(parseFloat(datos[i]['DataLogger4']));
        (data[5]['data']).push(parseFloat(datos[i]['DataLogger5']));
    }
    console.log(data);
    graficar(data);
}
Papa.parse(_URL1, {
	header: true,
	download: true,
	dynamicTyping: true,
	complete: function(results1) {
        order(results1.data);
    }
});
