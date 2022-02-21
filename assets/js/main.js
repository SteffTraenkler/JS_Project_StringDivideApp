let input1 = document.getElementById('inputGes');
let input2 = document.getElementById('input2');
let trennBefore = document.getElementById('trennBefore');
let trennAfter = document.getElementById('trennAfter');
let out1 = document.getElementById('outPart1');
let out2 = document.getElementById('outPart2');

function divideString() {
    let iG = input1.value;
    let i2 = input2.value;
    let tB = trennBefore.checked;
    let tA = trennAfter.checked;
    console.log('inputTest');
    if (iG.includes(i2) == true) {
        console.log('Wort ist in Text vorhanden');
        let i = iG.indexOf(i2);
        console.log(i + ' ->indexStart des Worts im Satz');
        let l = i2.length;
        console.log('länge Wort : ' + l);
        if (tB == true) {
            console.log('vor dem Wort checked');
            out1.innerHTML = iG.substring(0, i - 1);
            out2.innerHTML = iG.substring(i);
        } else if (tA == true) {
            console.log('nach dem Wort checked');
            out1.innerHTML = iG.substring(0, i + l);
            out2.innerHTML = iG.substring(i + l);
        }
    } else {
        console.log('inputFalse');
        out1.innerHTML = `Das Zeichen konnte nicht gefunden werden`;
        out2.innerHTML = iG;
    }
}




//Tests to see how it should work
let testGes = 'Katze sitzt am Baum lala';
let testSplit = 'sitzt';
console.log(testGes.includes(testSplit)); // testet, ob Input2 vorhanden ist 

console.log(testGes.indexOf(testSplit)); // Index-Start des 2. Inputs
console.log('sitzt'.length); // Länge von Input 2
console.log(testGes.substring(6, 6 + 5)); // gibt TestSplit aus