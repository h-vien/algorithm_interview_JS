process.stdout.write("\33c");

/**
 * n=3   =>   #
 *           ###
 *          #####
 */

const pyramid = (n) => {
  const midPoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (midPoint - row <= col && midPoint + row >= col) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
};
pyramid(3);

const pyramid_2 = (n, row = 0, level = "") => {
  if (n === row) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid_2(n, row + 1);
  }
  const midPoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  return pyramid_2(n, row, level + add);
};

pyramid_2(3);

/**
 * pyramid_2(3)
 *
 */
