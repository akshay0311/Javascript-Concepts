console.log('Start');

setImmediate(function() {
  console.log('Immediate 1');
});
 
setTimeout(function() {
  console.log('Timeout 1');
}, 0);
 
process.nextTick(function() {
  console.log('NextTick 1');
});
 
console.log('End');





























