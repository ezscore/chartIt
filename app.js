// let graph;
// let filename = 'dataset.csv';
// let data = [];
// let labels = [];

// let options = {
//   type: 'bar',
//   data: {
//       labels: labels,
//       datasets: [{
//           label: 'Revenue Per Quarter',
//           data: data,
//           fill: false,
//           pointRadius: 0,
//           pointHoverRadius: 0,
//           borderColor: '#FF0000'
//       }]
//   },
//   options: {
//       responsive: false,
//       scales: {
//           y: {
//               beginAtZero: true
//           }

//       }
//   },
// }

// function getData() {
//   d3.csv('datasets/'+filename).then(function (loadedData) {
//       // add data to lists
//       for (let i = 0; i < loadedData.length; i++) {
//           let datetime = loadedData[i].Datetime;
//           labels.push(datetime);

//           let revenue = loadedData[i].Revenue;
//           data.push(parseInt(revenue))
//       }

//       labels.reverse();
//       data.reverse();
//       graph = graphData();
//   });

// }

// function graphData() {
//   if (data.length > 0) {
//       let options = {
//           type: 'bar',
//           data: {
//               labels: labels,
//               datasets: [{
//                   label: 'Revenue Per Quarter',
//                   data: data,
//                   fill: false,
//                   borderWidth: 1
//               }]
//           },
//           options: {
//               responsive: true
//           },
//       }

//       const ctx = document.getElementById('dynamic-chart').getContext('2d');
//       return new Chart(ctx, options);
//   } else {
//       console.log('Empty data set')
//   }

// }

// const line = document.getElementById('line');
// const bar = document.getElementById('bar');

// line.addEventListener('click', changeLine);
// bar.addEventListener('click', changeBar);

// async function changeLine() {
//   let graph = await getData()
//   console.log('changeLine function')
//   const updateType = 'line';
//   graph.config.type = updateType;
//   graph.update();
// }

