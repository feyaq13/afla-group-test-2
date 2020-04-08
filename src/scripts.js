const tableElement = document.getElementsByClassName('table')[0];
const percentageOfDeviation = tableElement.getElementsByClassName('percentage-of-deviation');
// selectPercentageOfDeviation();
// addDecimalSeparators();

const series = [
  {
    name: 'Выручка',
    data: [
      500521,
      480521,
      480521,
      620999,
      340559,
      480521,
      340559,
      340559,
    ],
  },
  {
    name: 'Наличные',
    data: [
      300000,
      300000,
      300000,
      300000,
      300000,
      300000,
      300000,
      300000,
    ],
  },
  {
    name: 'Безналичный расчет',
    data: [
      100000,
      100000,
      100000,
      100000,
      100000,
      100000,
      100000,
      100000,
    ],
  },
  {
    name: 'Кредитные карты',
    data: [
      100521,
      100521,
      100521,
      100521,
      100521,
      100521,
      100521,
      100521,
    ],
  },
  {
    name: 'Средний чек, руб',
    data: [
      1300,
      900,
      900,
      900,
      900,
      900,
      900,
      900,
    ],
  },
  {
    name: 'Средний гость, руб',
    data: [
      1200,
      800,
      800,
      800,
      800,
      800,
      800,
      800,
    ],
  },
  {
    name: 'Удаление из чека (после оплаты), руб',
    data: [
      1000,
      1100,
      900,
      900,
      900,
      900,
      900,
      900,
    ],
  },
  {
    name: 'Удаление из счета (до оплаты), руб',
    data: [
      1300,
      1300,
      900,
      900,
      900,
      900,
      900,
      900,
    ],
  },
  {
    name: 'Количество чеков',
    data: [
      34,
      36,
      34,
      34,
      34,
      34,
      34,
      34,
    ],
  },
  {
    name: 'Количество гостей',
    data: [
      34,
      36,
      32,
      32,
      32,
      32,
      32,
      32,
    ],
  },
];

const table = document.querySelector('table');

series.forEach(record => {
  const [today, yesterday, three, four, five, six, week] = record.data;

  const tableRow = document.createElement('tr');
  tableRow.classList.add('revenue');
  table.appendChild(tableRow);

  const tableNameHeader = document.createElement('th');
  tableNameHeader.innerText = record.name;
  tableRow.appendChild(tableNameHeader);

  const tableDataCurrentDay = document.createElement('td');
  tableDataCurrentDay.classList.add('current-day');
  tableDataCurrentDay.innerText = addDecimalSeparators(today);
  tableRow.appendChild(tableDataCurrentDay);

  const tableDataYesterday = document.createElement('td');
  tableDataYesterday.innerText = addDecimalSeparators(yesterday);
  tableRow.appendChild(tableDataYesterday);

  const tableDataPercentageDeviation = document.createElement('td');
  tableDataPercentageDeviation.classList.add('percentage-of-deviation');

  // const percentChange = 100 - (yesterday / today * 100);
  const percentChange = (today * 100) / week - 100;

  if (percentChange < 0) {
    tableDataPercentageDeviation.classList.add('POSITIVE_CLASS');
  } else if (percentChange > 0) {
    tableDataPercentageDeviation.classList.add('NEGATIVE_CLASS');
  }

  tableDataPercentageDeviation.innerText = percentChange.toFixed(0) + '%';
  tableRow.appendChild(tableDataPercentageDeviation);

  const tableDataWeekDay = document.createElement('td');
  tableDataWeekDay.innerText = addDecimalSeparators(week);
  tableRow.appendChild(tableDataWeekDay);
});

// function selectPercentageOfDeviation() {
//   Array.prototype.forEach.call(percentageOfDeviation, function (percentageNumber) {
//     let number = Number.parseInt(percentageNumber.innerText);
//     if (number > 0) {
//       percentageNumber.style.color = 'green';
//     } else {
//       percentageNumber.style.color = 'red';
//     }
//   });
// }

// let money = Array.prototype.filter.call(tableElement.getElementsByTagName('td'), function (cell) {
//     return !cell.classList.contains('percentage-of-deviation');
//   }
// ).map(cell => cell.innerText);

// console.log(money);

function addDecimalSeparators(rawNumber) {
  return Number.parseInt(rawNumber).toLocaleString('ru-RU', {useGrouping: true});
  // Array.prototype.forEach.call(tableElement.getElementsByTagName('td'), function (cell) {
  //   if (!cell.classList.contains('percentage-of-deviation')) {
  //     cell.innerText = Number.parseInt(cell.innerText).toLocaleString('ru-RU', {useGrouping: true});
  //   }
  // });
}

Highcharts.chart('chart', {

  title: {
    text: 'Название'
  },

  subtitle: {
    text: 'Подпись'
  },

  yAxis: {
    title: {
      text: 'Number of $'
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 1 to 7'
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 1
    }
  },

  series,
  // {
  // name: '',
  // data: []
  // },

  responsive: {
    rules: [{
      condition: {
        maxWidth: 300
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});

const rowRevenue = document.getElementsByClassName('revenue')[0];

rowRevenue.addEventListener('click', function (e) {
  // console.log(e.currentTarget)
  e.currentTarget.nextElementSibling.classList.toggle('visible');
});

// console.dir(rowRevenue);

