let bodypix;
let video,v;
let segmentation;
let img;

const options = {
    outputStride: 8, // 8, 16, or 32, default is 16
    segmentationThreshold: 0.3 // 0 - 1, defaults to 0.5 
}

function preload(){
  bodypix = ml5.bodyPix(options);
}

function setup() {
    var canvas =  createCanvas(400, 240);
    canvas.parent('sketch-holder');
    // load up your video
    video = createCapture(VIDEO);
    video.size(width, height);
    v = createCapture(VIDEO);
    v.size(width, height);
    v.parent('videoContainer');
    video.hide(); // Hide the video element, and just show the canvas
    bodypix.segment(video, gotResults)
}

function gotResults(err, result) {
    if (err) {
        console.log(err)
        return
    }

    segmentation = result;

    background(0);
    image(segmentation.backgroundMask, 0, 0, width, height)

    bodypix.segment(video, gotResults)

}