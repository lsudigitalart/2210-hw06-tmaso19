let sprout, flower, m, d, s;

function preload() {
    sprout = loadImage("https://r2.erweima.ai/imgcompressed/compressed_b113063c78717a67f3627d67bb188a52.webp")
    flower = loadImage("https://png.pngtree.com/png-clipart/20231018/original/pngtree-whitebackgrounded-yellow-chamomile-blossoming-from-soil-grow-photo-png-image_13345841.png")
}

function setup() {
    createCanvas(400, 400);
}

function draw() {

    m = month();
    d = day();
    s = second();

    background(220);
    if (s % 2 == 0) {
        image(sprout, 0, 0, 100, 150)
    } else {

        image(flower, 0, 0, 100, 150)
    }
 }