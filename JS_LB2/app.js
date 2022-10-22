let batteryCount;
let bugPercent;
let word;

function firstTask() {
    batteryCount = prompt("Please, input count of batteries:", 0);
    if (!/^(0|[1-9]\d*)$/.test(batteryCount)) {
        alert("Count of batteries is not number, changing it to 0");
        batteryCount = 0;
    }

    bugPercent = prompt("Input percent of batteries with bugs:", 0)
    if (!/^(0|[1-9]\d*)$/.test(bugPercent)) {
        alert("Percent of batteries with bugs is not number, changing it to 0");
        bugPercent = 0;
    }

    if (bugPercent > 100) {
        alert("Percent > 100, changing it to 100%");
        bugPercent = 100;
    }

    let numberOfDefects = (batteryCount * bugPercent) / 100;
    numberOfDefects = parseInt(numberOfDefects);

    let numberOfGoodBatteries = batteryCount - numberOfDefects;

    alert("Кількість батарей: " + batteryCount +
        "\nРівень браку: " + bugPercent + "%" +
        "\nКількість несправних акумуляторів: " + numberOfDefects +
        "\nКількість робочих батарей: " + numberOfGoodBatteries + "\n");
}

function secondTask() {
    word = prompt("Please, input word", "test");
    if (!/^(\S+)$/.test(word)) {
        alert("Неприпустиме значення");
        word = "Неприпустиме значення";
    }else{
        let midChar = defineMidChar();
        alert(midChar);
    }


}

function defineEven() {
    let isEven = false;
    if (word.length % 2 === 0) {
        isEven = true;
    }
    return isEven;
}

function defineMidChar(){
    let isEven = defineEven();
    let midChar;
    if(!isEven){
        midChar = word.charAt(word.length / 2);
    }else{
        let firstChar = word.charAt(word.length / 2 - 1);
        let secondChar = word.charAt(word.length / 2)
        if(firstChar === secondChar){
            midChar = "Середні символи однакові";
        }else {
            midChar = firstChar + secondChar;
        }
    }

    return midChar;
}

