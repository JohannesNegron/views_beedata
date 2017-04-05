//var _URL = "http://localhost/direccion_del_csv";
var _URL1 = "torneo.csv";//Escribir la ruta del archivo dentro del servidor
var graficar = (function(data, ejeX, ejeY){
    Highcharts.chart('container', {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
    },


    title: {
        text: 'TORNEO PADEL'
    },

    xAxis: {
        categories: ejeX
    },

    yAxis: {
        categories: ejeY,
        title: null
    },

    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 500
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
                this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
        }
    },

    series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        data: data,
        dataLabels: {
            enabled: true,
            color: '#000000'
        }
    }]
});
});

function order(datos){
    var xAxis = [];
    var yAxis = [];
    var data = [];
    /*____________________*/
    console.log(datos);
    var int = 0;
    /*Definiendo xAxis*/
    for(var i in datos[0]){
        if(i != "" & i != "Rival"){
            xAxis[int] = i;
            int++;
            console.log(i);
        }
    }
    /*Definiendo yAxis*/
    int = 0;
    for(var i in datos){
        yAxis[int] = datos[i]["Rival"];
        int++;
    }
    /*Definiendo los datos*/

    
    for(var i = 0; i < yAxis.length; i++){
        for(var j in xAxis){
            var aux = new Array(parseInt(j), i, datos[i][xAxis[j]]);
            console.log(aux);
            data.push(aux);
        }
    }
    //console.log(yAxis);
    //console.log(xAxis);
    //console.log(data);
    graficar(data, xAxis, yAxis);
}
Papa.parse(_URL1, {
	header: true,
	download: true,
	dynamicTyping: true,
	complete: function(results1) {
        order(results1.data);
    }
});
