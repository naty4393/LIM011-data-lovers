export const seeToChampion = (champion) => {
  const allChampions = [];
  for (let i = 0; i < champion.length; i += 1) {
    allChampions.push(
      {
        name: champion[i].name,
        id: champion[i].id,
        title: champion[i].title,
        image: champion[i].splash,
        blurb: champion[i].blurb,
        power: champion[i].info.attack,
        defense: champion[i].info.defense,
        magic: champion[i].info.magic,
        difficulty: champion[i].info.difficulty,
        tag1: champion[i].tags[0],
        tag2: champion[i].tags[1],
        levelLife: champion[i].stats.hpperlevel,
        moveSpeed: champion[i].stats.movespeed,
        armor: champion[i].stats.armor,
        spellblock: champion[i].stats.spellblock,
        stats4: champion[i].stats.attackrange,
        stats5: champion[i].stats.attackdamage,
        stats6: champion[i].stats.attackspeedperlevel,
      },
    );
  }
  return allChampions;
};

export const filterType = (data, type) => {
  // // eslint-disable-next-line no-console
  // console.log('data', data);
  // // eslint-disable-next-line no-console
  // console.log('que entra', typeof (type));
  // // eslint-disable-next-line no-console
  // console.log('cual es tu valor', type);
  const filterToString = data.filter((element) => element.tag1 === type || element.tag2 === type);
  // // eslint-disable-next-line no-console
  // console.log(filterToString);
  // // eslint-disable-next-line no-console
  // console.log('salida', typeof (filterToString));
  return filterToString;
};

export const championsInFallingPower = (data, dato) => {
  let filterFallingsPower;
  if (dato === 'falling') {
    filterFallingsPower = data.sort((a, b) => (b.power - a.power));
  }
  return filterFallingsPower;
};

export const championsInUpwardPower = (data, dato) => {
  let filterUpwardsPower = [];
  if (dato === 'upward') {
    filterUpwardsPower = data.sort((a, b) => (a.power - b.power));
  }
  return filterUpwardsPower;
};

export const championsInFallingUtility = (data, dato) => {
  let filterFallingsUtility = [];
  if (dato === 'falling') {
    filterFallingsUtility = data.sort((a, b) => (b.defense - a.defense));
  }
  return filterFallingsUtility;
};

export const championsInUpwardUtility = (data, dato) => {
  // // eslint-disable-next-line no-console
  // console.log('data que ingresa', data);
  // // eslint-disable-next-line no-console
  // console.log('dato que ingresa', dato);
  let filterUpwardsUtility = [];
  if (dato === 'upward') {
    // // eslint-disable-next-line no-console
    // console.log('ingresa');
    filterUpwardsUtility = data.sort((a, b) => (a.defense - b.defense));
  }
  // eslint-disable-next-line no-console
  // console.log('resultado', filterUpwardsUtility);
  return filterUpwardsUtility;
};

export const championsInFallingDifficult = (data, dato) => {
  let filterFallingsDifficult = [];
  if (dato === 'falling') {
    filterFallingsDifficult = data.sort((a, b) => (b.difficulty - a.difficulty));
  }
  return filterFallingsDifficult;
};

export const championsInUpwardDifficult = (data, dato) => {
  let filterUpwardsDifficult = [];
  if (dato === 'upward') {
    filterUpwardsDifficult = data.sort((a, b) => (a.difficulty - b.difficulty));
  }
  return filterUpwardsDifficult;
};

export const searchWord = (data, text) => {
  // console.log('data', data);
  // console.log('text', text);
  // console.log(typeof (text));
  let enterText = '';
  const allFindChampion = [];
  enterText = text.toLowerCase();
  // console.log('text en minuscula de data', enterText);
  // console.log(typeof (enterText));
  for (let a = 0; a < data.length; a += 1) {
    let name = '';
    name = data[a].name.toLowerCase();
    // console.log('nombre', name);
    // console.log('prueba3.9', name.startsWith(enterText));
    if (name.startsWith(enterText) === true) {
      // console.log('prueba4', name.startsWith(enterText));
      allFindChampion.push(data[a]);
      // debugger
      // console.log('entre a un campeon mas', allFindChampion);
    }
    // debugger
    // console.log('entre a un campeon mas1', allFindChampion);
    // return allFindChampion;
    // debugger
  }
  // console.log('entre a un campeon mas2', allFindChampion);
  return allFindChampion;
};
