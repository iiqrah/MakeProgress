
function displayGraph() {
  let myChart = document.getElementById('myChart').getContext('2d');

  let chart = new Chart(myChart, {
  type:'radar',
  data:{
    labels:[document.getElementById("label#1").value,
            document.getElementById("label#2").value,
            document.getElementById("label#3").value,
            document.getElementById("label#4").value,
            document.getElementById("label#5").value],
    datasets:[{
      //dataset #1
      label:'Data',
      fill: true,
      //backgroundColor: "#021f47",
      pointBorderColor: "orange",
      pointBackgroundColor: "orange",
      borderWidth:3,
      borderColor:'#777',
      //backgroundColor:['red', 'green', 'blue', 'orange', 'yellow']
    }]
  },
  options:{
    title:{
      display:true,
      text: document.getElementById("title").value,
      fontSize:50
    },
    legend:{
      labels:{
          fontSize:20,
          fontColor:'#000'
      }
    },
    scale: {
      pointLabels: {
        fontSize: 20
      },
      ticks: {
        beginAtZero: true,
        max: parseInt(document.getElementById("scale").value)
      }
    }
  }
  });
  return false;
}
