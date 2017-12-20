var ctx = document.getElementById('linechart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    // type: 'polarArea',
    // type: 'line',
    // type: 'bar',
    // type: 'radar',
    // type: 'pie',
    // type: 'doughnut',
    // type: 'bubble',
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["Strength", "Skill", "Health", "Speed", "Luck"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: ['#f1c40f','#e67e22','#16a085','#2980b9','#8e44ad'],
            data: [15, 20, 30, 40, 60]
        }
      ]
    },

    // Configuration options go here
    options: {
      pieceLabel: {
        render: 'value',
        fontSize: 14,
        fontColor: '#fff',
        fontStyle: 'bold',
      }
    }
});
