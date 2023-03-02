const net = new brain.NeuralNetwork();

//xor training set
/*net.train([
  {
    input: [0, 0],
    output: [0],
  },
  {
    input: [0, 1],
    output: [1],
  },
  {
    input: [1, 0],
    output: [1],
  },
  {
    input: [1, 1],
    output: [0],
  },
]);*/

const data = [
  { input: { r: 0, g: 0, b: 0 }, output: [1] },
  { input: { r: 1, g: 1, b: 1 }, output: [0] },
  {
    input: {
      r: 0.3318623202848874,
      g: 0.2303399189983819,
      b: 0.42537427083516577,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6106741178224557,
      g: 0.8522492845605549,
      b: 0.7068529066387808,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5884218180939698,
      g: 0.1508592389439447,
      b: 0.9537333567204724,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9600807612275422,
      g: 0.7030959958758374,
      b: 0.8924352686431358,
    },
    output: [0],
  },
  {
    input: {
      r: 0.16869240843514266,
      g: 0.28728086074003345,
      b: 0.39946377505682107,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6241117343554492,
      g: 0.5646924269555693,
      b: 0.9840527719943697,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5565502518428038,
      g: 0.4313860069953035,
      b: 0.2982685176218687,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8069397120990212,
      g: 0.7174133310926274,
      b: 0.9340806706535016,
    },
    output: [0],
  },
  {
    input: {
      r: 0.2631693016313865,
      g: 0.7768039007718384,
      b: 0.2548652611387012,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8240940967040165,
      g: 0.06053204681350466,
      b: 0.4461609943521554,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6205637322671087,
      g: 0.41545790745634115,
      b: 0.6163633360114762,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8732631393301657,
      g: 0.5468444571489357,
      b: 0.4790977457703285,
    },
    output: [0],
  },
  {
    input: {
      r: 0.36949034771039724,
      g: 0.48331956543924326,
      b: 0.11083867841035366,
    },
    output: [1],
  },
  {
    input: {
      r: 0.394454123044804,
      g: 0.7338988498193666,
      b: 0.35131973350190404,
    },
    output: [0],
  },
];

net.train(data);

const colorEl = document.getElementById("color");
const guessEl = document.getElementById("guess");
const whiteButton = document.getElementById("white-btn");
const blackButton = document.getElementById("black-btn");
const printButton = document.getElementById("print-btn");
let color;
setRandomColor();

whiteButton.addEventListener("click", () => {
  chooseColor(1);
});

blackButton.addEventListener("click", () => {
  chooseColor(0);
});

printButton.addEventListener("click", print);

function chooseColor(value) {
  data.push({
    input: color,
    output: [value],
  });
  setRandomColor();
}

function print() {
  console.log(JSON.stringify(data));
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };

  const guess = net.run(color)[0];
  guessEl.style.color = guess > 0.5 ? "#fff" : "000";

  colorEl.style.backgroundColor = `rgba(${color.r * 255},${color.g * 255},${
    color.b * 255
  })`;
}
