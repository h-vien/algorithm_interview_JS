process.stdout.write("\33c");

const steps = (n) => {
  for (let i = 0; i <= n; i++) {
    let ept = "";
    for (let j = 0; j < i; j++) {
      ept += "#";
    }
    console.log(ept);
  }
};

steps(5);

const way2_steps = (n, row = 0, stair = "") => {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return way2_steps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  way2_steps(n, row, stair);
};
way2_steps(5);
/* // todos
1. n = 5, row = 0, stair ="#"
2. n = 5, row = 0, stair ="# "
3. n = 5, row = 0, stair ="#  "
4. n = 5, row = 0, stair ="#   "
5. n = 5, row = 0, stair ="#    "
6. n = 5 == stair.length  => clg(stair) => Return way2_steps(n,1)
7. n = 5, row = 1, stair.length=0 < row => stair ="#"
8. n = 5, row = 1, stair.length= 1 = row => stair ="##"
9. n = 5, row = 1, stair.length > row => stair ="##   "
10. n = 5, row = 1, stair.length > row => stair ="##   "
11. n = 5, row = 1, stair.length > row => stair ="##   "
*/
