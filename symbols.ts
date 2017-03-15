let sym = Symbol();
let sym2 = Symbol('key');
let obj2 = { [ sym ]: 'some value' };

console.log(sym, sym2, obj2, obj2[ sym ]);
let arr: any[] = [ 1, 'string', 'false' ];

for (let e in arr) {
  console.log('for...in', e);
}

for (let e of arr) {
  console.log('for...of', e);
}
