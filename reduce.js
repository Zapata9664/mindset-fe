const arr1 = ["a", "b", "c", "d"];

("0a,1b,2c,3d,");

const arr2 = [1, 2, 3, 3];

const res1 = arr1.reduce((acc, current, index) => {
  return acc + index * 3 + current + ",";
}, "");

const res2 = arr2.reduce((acc, current) => {
  return acc + current;
}, 0);

const res3 = arr1.reduce((acc, current, index) => {
  return { ...acc, [current]: index };
}, {});

console.log(res1, res2);

console.log(res3);

"eeerrsfafieje"


[ 'eee', 'rr', 's']
[ '3e', '2r', '1s']
'3e2r1s'

