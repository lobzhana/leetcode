const maximumUnits = (boxTypes: number[][], truckSize: number): number => {
  boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);

  let index = 0;
  let boxesOnTruck = 0;
  let itemsOnTruck = 0;
  while (boxesOnTruck < truckSize && index < boxTypes.length) {
    boxesOnTruck++;
    boxTypes[index][0]--;
    itemsOnTruck += boxTypes[index][1];

    if (!boxTypes[index][0]) index++;
  }

  return itemsOnTruck;
};

const maximumUnits2 = (boxTypes: number[][], truckSize: number): number => {
  boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);

  let itemsOnTruck = 0;
  let item = boxTypes.shift();
  while (truckSize && item) {
    truckSize--;
    item[0]--;
    itemsOnTruck += item[1];

    if (item[0] === 0) {
      item = boxTypes.shift();
    }
  }

  return itemsOnTruck;
};
