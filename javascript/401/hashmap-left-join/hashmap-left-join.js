function leftJoin(leftMap, rightMap) {
  let joinedMap = [];
  for (let key in leftMap) {
    joinedMap.push([key, leftMap[key], rightMap[key] || null]);
  }
  return joinedMap;
}

let leftMap = {
  diligent: 'employed',
  fond: 'enamored',
  guide: 'usher',
  outfit: 'garb',
  wrath: 'anger',
};
let rightMap = {
  diligent: 'idle',
  fond: 'averse',
  guide: 'follow',
  flow: 'jam',
  wrath: 'delight',
};
console.log(leftJoin(leftMap, rightMap));
