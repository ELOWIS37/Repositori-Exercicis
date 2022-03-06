var testMap = new Map();

testMap.set('1', '10');   
testMap.set(1, '20');    
testMap.set(true, '30'); 

document.write(testMap.get('1'));
document.write(testMap.get(1));
document.write(testMap.get(true));