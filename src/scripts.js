window.onload = () => {
  const series = [
    {
      name: 'Выручка',
      cssClass: 'revenue',
      visible: false,
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
      cssClass: 'cash',
      visible: false,
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
      cssClass: 'cashless',
      visible: false,
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
      cssClass: 'credit',
      visible: false,
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
      cssClass: 'average-check',
      visible: false,
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
      cssClass: 'average-guest',
      visible: false,
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
      cssClass: 'deletion-from-check',
      visible: false,
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
      cssClass: 'deletion-from-account',
      visible: false,
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
      cssClass: 'number-of-checks',
      visible: false,
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
      cssClass: 'number-of-guests',
      visible: false,
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

  let chart;

  const tr = document.createElement('tr');
  const td = document.createElement('td');
  tr.classList.add('revenue-chart');
  tr.appendChild(td);
  td.colSpan = 5;

  chartFactory();

  function chartFactory() {
    chart = Highcharts.chart(td, {
      title: {
        text: 'Название'
      },

      subtitle: {
        text: 'Подпись'
      },

      yAxis: {
        title: {
          text: 'Number of'
        }
      },

      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 1 to 7'
        }
      },

      series,
      legend: {
        enabled: false,
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 1
        }
      },

      responsive: {
        rules: [{
          condition: {
            maxWidth: 300,
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
    })
  }

  const table = document.querySelector('table');
  table.appendChild(tr);

  series.forEach(record => {
    const [today, yesterday, three, four, five, six, week] = record.data;

    const tableRow = document.createElement('tr');
    tableRow.classList.add(record.cssClass);
    tableRow._record = record;
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
      tableDataPercentageDeviation.classList.add('negative');
    } else if (percentChange > 0) {
      tableDataPercentageDeviation.classList.add('positive');
    }

    tableDataPercentageDeviation.innerText = percentChange.toFixed(0) + '%';
    tableRow.appendChild(tableDataPercentageDeviation);

    const tableDataWeekDay = document.createElement('td');
    tableDataWeekDay.innerText = addDecimalSeparators(week);
    tableRow.appendChild(tableDataWeekDay);
  });

table.addEventListener('click', (e) => {
    const tableRow = e.target.closest('tr');
    let currentVisible = null;
    tableRow._record.visible = true;
    currentVisible = tableRow._record;
    chartFactory();
    console.dir(e.target.closest('tr'));
});

  function addDecimalSeparators(rawNumber) {
    return Number.parseInt(rawNumber).toLocaleString('ru-RU', {useGrouping: true});
  }

  const rowRevenue = document.getElementsByClassName('revenue')[0];

  // rowRevenue.addEventListener('click', function (e) {
  //     e.currentTarget.nextElementSibling.classList.toggle('visible');
  // });

  window.chard = chart;
};
