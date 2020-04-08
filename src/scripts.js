const tableElement = document.getElementsByClassName('table')[0];
const percentageOfDeviation = tableElement.getElementsByClassName('percentage-of-deviation');
selectPercentageOfDeviation();
addDecimalSeparators();

function selectPercentageOfDeviation() {
  Array.prototype.forEach.call(percentageOfDeviation, function (percentageNumber) {
    let number = percentageNumber.innerText.replace('%', '');
    if (number > 0) {
      percentageNumber.style.color = 'green';
    } else {
      percentageNumber.style.color = 'red';
    }
  });
}

function addDecimalSeparators() {
  Array.prototype.forEach.call(tableElement.getElementsByTagName('td'), function (cell) {
    if (!cell.classList.contains('percentage-of-deviation')) {
      cell.innerText = Number.parseInt(cell.innerText).toLocaleString('ru-RU', {useGrouping: true});
    }
  })
}


