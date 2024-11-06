/*
log()
log({})
dir()
warn()
error()
info()
assert()
time()
timeEnd()
trace()
table()
group()
groupCollapsed()
groupEnd()
clear()
*/

console.time('one');
const log = console.log;
const data = [
  {
    id: crypto.randomUUID(),
    name: 'John',
    email: 'john@work.org',
  },
  {
    id: crypto.randomUUID(),
    name: 'Mary',
    email: 'mary@work.org',
  },
  {
    id: crypto.randomUUID(),
    name: 'Sam',
    email: 'sam@work.org',
  },
  {
    id: crypto.randomUUID(),
    name: 'Dean',
    email: 'dean@work.org',
  },
];
const h2 = document.querySelector('h2');
console.groupCollapsed('Group');
for (let i = 0; i < data.length; i++) {
  console.log(data[i].name);
}
console.groupEnd('Group');

function one() {
  two();
}
function two() {
  three();
}
function three() {
  console.trace('inside three');
}
one();

console.log('hello');
console.log({ data: data[0].name });
console.dir(data);
console.error(new Error('Error message'));
console.warn('Warn');
console.info('Info');
console.assert(1 - 1, h2.textContent);
console.timeEnd('one');

console.clear();
console.table(data);
