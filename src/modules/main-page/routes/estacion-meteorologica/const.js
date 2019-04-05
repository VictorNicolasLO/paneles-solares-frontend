import windSignal from './icons/wind-signal';
import thermometer from './icons/thermometer';
import wind from './icons/wind';
import umbrella from './icons/umbrella';
import radiation from './icons/radiation';
import weather from './icons/weather';
import drop from './icons/drop';
import barometer from './icons/barometer';
export const getUrl = (p) => `/estacion-meteorologica/charts/${p}`;
export const selectedItems = [
  'wind-dir',
  'temp-out',
  'wind-speed',
  'rain',
  'bar',
  'solar-rad',
  'out-hum',
  'et',
];
export const estacionItems = [
  {
    name: 'Dirección del viento',
    icon: windSignal,
    type: 'wind-dir',
  },
  {
    name: 'Temperatura',
    icon: thermometer,
    type: 'temp-out',
  },
  {
    name: 'Velocidad del viento',
    icon: wind,
    type: 'wind-speed',
  },
  {
    name: 'Lluvia actual (mm)',
    icon: umbrella,
    type: 'rain',
  },
  {
    name: 'Barómetro',
    icon: barometer,
    type: 'bar',
  },
  {
    name: 'Radiación solar',
    icon: radiation,
    type: 'solar-rad',
  },
  {
    name: 'Humedad',
    icon: drop,
    type: 'out-hum',
  },
  {
    name: 'Evapotranspiración (mm)',
    icon: weather,
    type: 'et',
  },
];
