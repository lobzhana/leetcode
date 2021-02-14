import assert from './tools/assert';


async function main() {
  const maxUnits = maximumUnits2(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  );

  assert.equals(maxUnits, 8);
}

main();
