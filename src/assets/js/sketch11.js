
let neuralNetwork1;
let submitButton;

let rSlider, gSlider, bSlider;
let labelP;
let lossP;

function setup() {
  // Crude interface
  lossP = createP('loss');

  var canvas =  createCanvas(100, 100);
  canvas.parent('nnContainer');
  labelP = createP('label');
  labelP.parent('nnContainer');
  rSlider = createSlider(0, 255, 255);
  rSlider.parent('redslide');
  gSlider = createSlider(0, 255, 0);
  gSlider.parent('greenslide');

  bSlider = createSlider(0, 255, 255);
  bSlider.parent('blueslide');


  let nnOptions = {
    dataUrl: 'assets/data/colorData.json',
    inputs: ['r', 'g', 'b'],
    outputs: ['label'],
    task: 'classification',
    debug: true
  };
  neuralNetwork1 = ml5.neuralNetwork(nnOptions, modelReady);
}

function modelReady() {
  neuralNetwork1.normalizeData();
  const trainingOptions = {
    epochs: 20,
    batchSize: 64
  }
  neuralNetwork1.train(trainingOptions, whileTraining, finishedTraining);
  // Start guessing while training!
  classify();

}

function whileTraining(epoch, logs) {
  lossP.html(`Epoch: ${epoch} - loss: ${logs.loss.toFixed(2)}`);
}

function finishedTraining(anything) {
  console.log('done!');
}

function classify() {
  let inputs = {
    r: rSlider.value(),
    g: gSlider.value(),
    b: bSlider.value()
  }
  neuralNetwork1.classify([inputs.r, inputs.g, inputs.b], gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    labelP.html(`label:${results[0].label}, confidence: ${results[0].confidence.toFixed(2)}`);
    classify();
  }
}

function draw() {
  background(rSlider.value(), gSlider.value(), bSlider.value());
}