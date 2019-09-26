import { exportCSVFile } from './csv';
import moment from 'moment';

export function downloadCsv(items, selected, dateFrom, dateTo) {
  const allHeaders = {
    'wind-dir': 'Dirección del viento',
    'temp-out': 'Temperatura',
    'wind-speed': 'Velocidad del viento',
    rain: 'Lluvia actual (mm)',
    bar: 'Barómetro',
    'solar-rad': 'Radiación solar',
    'out-hum': 'Humedad',
    et: 'Evapotranspiración (mm)',
  };

  const result = items.reduce((lastResult, nextItem) => {
    if (
      (dateFrom && dateTo && nextItem.value.date.date < dateFrom) ||
      nextItem.value.date.date > dateTo
    )
      return lastResult;
    const result = {
      date: moment(nextItem.value.date)
        .format('D MMMM YYYY h:mm:ss a')
        .toString(),
    };
    result[selected.type] = nextItem.value[selected.type];
    return [...lastResult, result];
  }, []);
  const headers = { date: 'Fecha' };
  headers[selected.type] = allHeaders[selected.type];
  debugger;
  exportCSVFile(
    headers,
    result,
    `ITC ${allHeaders[selected.type]} ${result[0].date} - ${
      result[result.length - 1].date
    }`,
  );
}
