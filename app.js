// https://calculator.swiftutors.com/area-of-a-parallelogram-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaofaParallelogramRadio = document.getElementById('areaofaParallelogramRadio');
const baseofParallelogramRadio = document.getElementById('baseofParallelogramRadio');
const heightofParallelogramRadio = document.getElementById('heightofParallelogramRadio');

let areaofaParallelogram;
let baseofParallelogram = v1;
let heightofParallelogram = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

areaofaParallelogramRadio.addEventListener('click', function() {
  variable1.textContent = 'Base of Parallelogram';
  variable2.textContent = 'Height of Parallelogram';
  baseofParallelogram = v1;
  heightofParallelogram = v2;
  result.textContent = '';
});

baseofParallelogramRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of a Parallelogram';
  variable2.textContent = 'Height of Parallelogram';
  areaofaParallelogram = v1;
  heightofParallelogram = v2;
  result.textContent = '';
});

heightofParallelogramRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of a Parallelogram';
  variable2.textContent = 'Base of Parallelogram';
  areaofaParallelogram = v1;
  baseofParallelogram = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaofaParallelogramRadio.checked)
    result.textContent = `Area of a Parallelogram = ${computeAreaofaParallelogram().toFixed(2)}`;

  else if(baseofParallelogramRadio.checked)
    result.textContent = `Base of Parallelogram = ${computeBaseofParallelogram().toFixed(2)}`;

  else if(heightofParallelogramRadio.checked)
    result.textContent = `Height of Parallelogram = ${computeHeightofParallelogram().toFixed(2)}`;
})

// calculation

function computeAreaofaParallelogram() {
  return Number(baseofParallelogram.value) * Number(heightofParallelogram.value);
}

function computeBaseofParallelogram() {
  return Number(areaofaParallelogram.value) / Number(heightofParallelogram.value);
}

function computeHeightofParallelogram() {
  return Number(areaofaParallelogram.value) / Number(baseofParallelogram.value);
}