
function plot(dates,temp){
    const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: dates,
    datasets: [{
      label: 'temp',
      data: temp,
      borderWidth: 1
    }]
  },
});

}