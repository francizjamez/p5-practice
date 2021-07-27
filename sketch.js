let array = new Array(110);
array = [...array].map((el, i) => i);

function setup() {
  createCanvas(1400, 720);
  strokeWeight(5);
  frameRate(10);

  array = array.sort(() => Math.random() - 0.5);
  array = array.sort(() => Math.random() - 0.5);
  array = array.sort(() => Math.random() - 0.5);
  console.log([...array]);
}

let swapped = true;

function draw() {
  clear();
  let offset = 0;
  [...array].forEach((el) => {
    rect(10 + offset, 700 - el * 3, 1, 70 + el * 3);
    offset += 12;
  });

  if (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      const left = array[i];
      const right = array[i + 1];
      if (left > right) {
        const temp = left;
        array[i] = right;
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } else {
    noLoop();
  }
}
