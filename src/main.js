/* *
 * import POKEMON from './data/pokemon/pokemon.js'
 import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
import LoL from './data/lol/lol.js';

import {
  // eslint-disable-next-line max-len
  seeToChampion, filterType, championsInFallingPower, championsInUpwardPower, championsInUpwardUtility,
  championsInUpwardDifficult, searchWord, championsInFallingDifficult, championsInFallingUtility,
} from './data.js';

const type = document.querySelector('#type');
const powers = document.querySelector('#powers');
const utility = document.querySelector('#utility');
const weakness = document.querySelector('#weakness');
const textToSearch = document.querySelector('#searchTexto');
const root = document.querySelector('#root');
// const miModal = document.querySelector('#miModal');
const lolData = Object.values(LoL.data);
const newData = seeToChampion(lolData);
console.log('que es lolData', lolData);
console.log('que es lolData', typeof(lolData));
console.log('lolData', Array.isArray(lolData));
console.log('newData', Array.isArray(newData));

const roamData = (toShowFigure) => {
  let valuesPlayer = '';
  toShowFigure.forEach((elementData) => {
    valuesPlayer += `<div name="LoL" id=${elementData.id} class="contenedor">
            <img src="${elementData.image}" id="imagenRoot" class="imagenRoot">
            <p  name="obtener">${elementData.name}</p>
            </div>`;
  });
  return valuesPlayer;
};

root.innerHTML = roamData(newData);

document.querySelector('.contenedor').addEventListener('click', () => {
  // eslint-disable-next-line no-restricted-globals
  const captureModal = event.target.parentElement.id - 1;
  // eslint-disable-next-line no-console
  console.log(captureModal);

  // eslint-disable-next-line no-restricted-globals
  // eslint-disable-next-line no-empty
  // eslint-disable-next-line no-restricted-globals
  if (event.target.parentElement.getAttribute('name') === 'LoL') {
    document.getElementById('miModal').classList.remove('hidden');
    document.getElementById('caracteristica').innerHTML = `
                            <img src="${newData[captureModal].image}"/>
                            <div class="infoModal">
                            <h2>${newData[captureModal].name}</h2>
                            <p>${newData[captureModal].blurb}</p>
                            <h4>defense: ${newData[captureModal].defense}</h4>
                            <p class="paragraphModal">magic: ${newData[captureModal].magic}</p>
                            <p class="paragraphModal">difficulty: ${newData[captureModal].difficulty}</p>
                            <p class="paragraphModal">tag1: ${newData[captureModal].tag1}</p>
                            <p class="paragraphModal">tag2: ${newData[captureModal].tags2}</p>
                            <p class="paragraphModal">levelLife: ${newData[captureModal].levelLife}</p>
                            <p class="paragraphModal">moveSpeed: ${newData[captureModal].moveSpeed}</p>
                            <p class="paragraphModal">armor: ${newData[captureModal].armor}</p>
                            <p class="paragraphModal">spellblock: ${newData[captureModal].spellblock}</p>
                            <p class="paragraphModal">stats4: ${newData[captureModal].stats4}</p>
                            <p class="paragraphModal">stats5: ${newData[captureModal].stats5}</p>
                            <p class="paragraphModal">stats6: ${newData[captureModal].stats6}</p>
                            </div>`;
  }
  // let modalOfThePlayer = '';
  // const miModalofPlayer = (elementModal) => {
  //   elementModal.forEach((elementForModal) => {
  //   });
  //   return modalOfThePlayer;
  // };
  // miModal.innerHTML = miModalofPlayer(newData);
});

document.querySelector('#filtered').addEventListener('click', () => {
  document.getElementById('filtersTypeofPlayer').classList.remove('hidden');
});

document.querySelector('#filtersType').addEventListener('click', () => {
  const championToFilter = filterType(newData, type.value);
  root.innerHTML = roamData(championToFilter);

  if (type.value !== '' && powers.value === 'falling') {
    const powersFilterFalling = championsInFallingPower(championToFilter, powers.value);

    root.innerHTML = roamData(powersFilterFalling);
  }
  if (type.value !== '' && powers.value === 'upward') {
    const powersFilterUpward = championsInUpwardPower(championToFilter, powers.value);
    root.innerHTML = roamData(powersFilterUpward);
  }
  if (type.value !== '' && utility.value === 'falling') {
    const utilityFilterFalling = championsInFallingUtility(championToFilter, utility.value);
    root.innerHTML = roamData(utilityFilterFalling);
  }
  if (type.value !== '' && utility.value === 'upward') {
    const utilityFilterUpward = championsInUpwardUtility(championToFilter, utility.value);
    root.innerHTML = roamData(utilityFilterUpward);
  }
  if (type.value !== '' && weakness.value === 'falling') {
    const weaknessFilterFalling = championsInFallingDifficult(championToFilter, weakness.value);
    root.innerHTML = roamData(weaknessFilterFalling);
  }
  if (type.value !== '' && weakness.value === 'upward') {
    const weaknessFilterUpward = championsInUpwardDifficult(championToFilter, weakness.value);
    root.innerHTML = roamData(weaknessFilterUpward);
  }
});

document.querySelector('#searchTexto').addEventListener('keyup', () => {
  let findChampion = [];
  // console.log('prueba2', textToSearch.value);

  findChampion = searchWord(newData, textToSearch.value);
  // console.log('prueba3', findChampion);

  root.innerHTML = roamData(findChampion);
});

document.querySelector('#home').addEventListener('click', () => {
  window.history.go(0);
});

document.querySelector('#goBack').addEventListener('click', () => {
  window.history.go(0);
  document.getElementById('filtersTypeofPlayer').classList.remove('hidden');
});
