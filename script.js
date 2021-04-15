let filename = 'dataset.csv';
let csv;
let data = [];
let columns = [];
let labels = [];
let graph;
let csvData;

let yLable;
let xLable;

const scatter = document.getElementById('scatter');
const bar = document.getElementById('bar');
const file = document.getElementById('file')

scatter.addEventListener('click', changeScatter);
bar.addEventListener('click', changeBar);
// cData.addEventListener('click', changeData);

fileUpload = file.onchange = event => {
    let file = event.target.files[0];
    console.log(file);
    let fName = event.target.files[0].name
    let xtn = '.csv'
    if (fName.substr(-4) == xtn) {
        csv = event.target.files[0].name;
    }
    else {
        alert("Only .csv extension");
    }
    d3.csv(event.target.files[0].name).then(loadedData => {
        if (columns.length > 0) {
            columns = []
        }
        columns = Object.keys(loadedData[0]);
        csvData = loadedData;
    }).then(
        function () {
            let select = document.createElement('select');
            select.id = "columns";

            for (c of columns) {
                let option = document.createElement('option');
                option.value = c;
                option.text = c;
                select.appendChild(option);
            }

            let label = document.createElement('label');
            label.innerHTML = "Select X Values";
            label.htmlFor = "columns"

            document.getElementById('container').appendChild(label).appendChild(select);

            let e = document.getElementById('columns');
            e.onchange = function () {
                labels = []
                let xLabel = e.options[e.selectedIndex].text;
                console.log(xLabel)
                csvData.forEach(x =>
                    labels.push(x[xLabel]),
                );
                if (typeof graph === 'undefined') {
                    graph = graphData();
                    // graph.config.data.datasets[0].label = xLabel + " by ";
                    graph.update(); 
                }
                else {
                    xLable = xLabel;
                    console.log(xLable)
                    graph.config.data.datasets[0].label = yLable;
                    graph.config.data.labels = labels;
                    graph.update();
                }
            }

            let selectY = document.createElement('select');
            selectY.id = "data";

            for (c of columns) {
                let option = document.createElement('option');
                option.value = c;
                option.text = c;
                selectY.appendChild(option);
            }
            let labelY = document.createElement('label');
            labelY.innerHTML = "Select Y Values";
            labelY.htmlFor = "data"

            document.getElementById('container').appendChild(labelY).appendChild(selectY);

            let eY = document.getElementById('data');
            eY.onchange = function () {
                data = [];
                let yData = eY.options[eY.selectedIndex].text;
                // console.log(yLable,yData)
                csvData.forEach(y =>
                    data.push(y[yData])
                )
                console.log(data)
                if (typeof graph === 'undefined') {
                    console.log('graph is deleted or non existent')
                    graph = graphData();
                }
                else {
                    console.log(graph)
                    graph.config.data.datasets[0].label = yData;
                    graph.config.data.datasets[0].data = data;
                    graph.update();
                }
            }
        })
}

function thisFileUpload() {
    document.getElementById('file').click();
}

function graphData() {
    const ctx = document.getElementById('dynamic-chart').getContext('2d');
    let options = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: "" ,
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                fill: false,
            }]
        },

    }
    return new Chart(ctx, options);
}

function changeScatter() {
    const updateType = 'bubble';
    graph.config.type = updateType;
    graph.update();
}

function changeBar() {
    const updateType = 'bar';
    graph.config.type = updateType;
    graph.update();
}
