const rangeInput = document.getElementById('range');
const numberInput = document.getElementById('number');
const diagram = document.getElementById('diagram');
const commissionBlock = document.getElementById('commission');

function updateNumberInput() {
  numberInput.value = rangeInput.value;
}

function updateRangeInput() {
  rangeInput.value = numberInput.value;
}

function updateDiagramAndCommission() {
  const value = parseInt(rangeInput.value);

  diagram.style.height = value + 'px';

  let commission = 0;
  if (value < 20) {
    commission = value * 0.02;
  } else if (value >= 20 && value < 50) {
    commission = value * 0.04;
  } else if (value >= 50 && value < 75) {
    commission = value * 0.06;
  } else if (value >= 75 && value <= 100) {
    commission = value * 0.08;
  }

  commissionBlock.style.height = commission + 'px';
  commissionBlock.textContent = commission.toFixed(2) + '%';

  const result = value + commission;

  console.log('Результат:', result);
}

rangeInput.addEventListener('input', () => {
  updateNumberInput();
  updateDiagramAndCommission();
});

numberInput.addEventListener('input', () => {
  updateRangeInput();
  updateDiagramAndCommission();
});

updateNumberInput();
updateDiagramAndCommission();
