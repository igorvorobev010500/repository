let botNumber = getRandomInt(0,2);
function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let table = document.querySelector("table");
let simbol = "X";
let moveNumber = 0;//кол-во ходов сделанных за игру
let span = document.querySelector("span");
span.innerHTML = simbol;
let virtualTable = [
    ["*","*","*"],
    ["*","*","*"],
    ["*","*","*"]
]
table.onclick = function(e){
    let cell = e.target; //Создаём переменную в которую попадает та ячейка на которую мы нажали
    if(cell.innerHTML != "X" && cell.innerHTML != "0"){//если ячейка пустая тогда программа будет работать
        let numberRow = cell.parentElement.rowIndex;//создаём переменную в которую попадает номер строки на которую мы нажали
        let numberCell = cell.cellIndex;//создаём переменную в которую попадает номер ячейки
        virtualTable[numberRow][numberCell] = simbol;//ставим в массив virtualTable в нужную ячейку символ
        cell.innerHTML = simbol; //ставим в нужную ячейку в таблице html символ
        moveNumber++; //прибавляем к количеству ходов 1 для отслеживания
        check(); //запускаем функцию проверки
    }else { //если ячейка занята
        alert("Ячейка занята");
    }
}
function check(){ //функция проверки
    if(winner() == "X"){ //если результат функциии равен х
        alert("Победил X");
        reset(); //запускаем функцию перезапуска
    }
    else if(winner() == "0"){//если результат функции равен 0
        alert("Победил 0")
        reset();
    }
    else if(moveNumber == 9){ //если количество ходов = 9
        alert("Ничья")
        reset();
    } else{ //если не сработало предыдущее условие, то ход бота
        let botMove = false;//если переменная = false значит бот ещё не походил
        while(botMove == false){//повторять пока бот не походил
            let randomRow = Math.floor(Math.random() * (2 - 0 + 1) + 0); // выбираем случайнкю строку randomRow
            let randomCell = Math.floor(Math.random() * (2 - 0 + 1) + 0); //выбираем случайную ячейку 
            if (virtualTable[randomRow][randomCell] == "*"){//если выбранная компьютером ячейка пустая в виртуальном табло
                botMove = true;
                virtualTable[randomRow][randomCell] = "0";  //подставляем в неё 0 в аиртуальном табло
                let botRow = document.querySelectorAll("tr")[randomRow];//переменная в которую попала выбранная ботом строка в html
                let botCell = botRow.querySelectorAll("td")[randomCell];// переменная в которую попала выбранная ботом ячейка в html
                botCell.innerHTML = "0";
                console.log (virtualTable);
                moveNumber++; //прибавляем к количеству ходов 1 для отслеживания
                setTimeout(() => {
                    if(winner() == "0"){//если результат функции равен 0
                        alert("Победил 0")
                        reset();
                    }
                    else if(moveNumber == 9){ //если количество ходов = 9
                        alert("Ничья")
                        reset();
                    }
                }, 500);  
            }
        }
        
    }
}
function winner(){ //запускаем функцию проверки пебодетеля
    if (virtualTable[0][0] == "X" && virtualTable[0][1] == "X" && virtualTable[0][2] == "X"){
        return "X";
    }
    if (virtualTable[0][0] == "X" && virtualTable[1][1] == "X" && virtualTable[2][2] == "X"){
        return "X";
    }
    if (virtualTable[1][0] == "X" && virtualTable[1][1] == "X" && virtualTable[1][2] == "X"){
        return "X"
    }
    if (virtualTable[2][0] == "X" && virtualTable[2][1] == "X" && virtualTable[2][2] == "X"){
        return "X"
    }
    if (virtualTable[0][0] == "X" && virtualTable[1][0] == "X" && virtualTable[2][0] == "X"){
        return "X"
    }
    if (virtualTable[1][0] == "X" && virtualTable[1][1] == "X" && virtualTable[1][2] == "X"){
        return "X"
    }
    if (virtualTable[0][1] == "X" && virtualTable[1][1] == "X" && virtualTable[2][1] == "X"){
        return "X"
    }
    if (virtualTable[0][2] == "X" && virtualTable[1][2] == "X" && virtualTable[2][2] == "X"){
        return "X"
    }
    if (virtualTable[0][2] == "X" && virtualTable[1][1] == "X" && virtualTable[2][0] == "X"){
        return "X"
    }
    if (virtualTable[0][0] == "0" && virtualTable[0][1] == "0" && virtualTable[0][2] == "0"){
        return "0";
    }
    if (virtualTable[0][0] == "0" && virtualTable[1][1] == "0" && virtualTable[2][2] == "0"){
        return "0";
    }
    if (virtualTable[1][0] == "0" && virtualTable[1][1] == "0" && virtualTable[1][2] == "0"){
        return "0"
    }
    if (virtualTable[2][0] == "0" && virtualTable[2][1] == "0" && virtualTable[2][2] == "0"){
        return "0"
    }
    if (virtualTable[0][0] == "0" && virtualTable[1][0] == "0" && virtualTable[2][0] == "0"){
        return "0"
    }
    if (virtualTable[1][0] == "0" && virtualTable[1][1] == "0" && virtualTable[1][2] == "0"){
        return "0"
    }
    if (virtualTable[0][1] == "0" && virtualTable[1][1] == "0" && virtualTable[2][1] == "0"){
        return "0"
    }
    if (virtualTable[0][2] == "0" && virtualTable[1][2] == "0" && virtualTable[2][2] == "0"){
        return "0"
    }
    if (virtualTable[0][2] == "0" && virtualTable[1][1] == "0" && virtualTable[2][0] == "0"){
        return "0"
    }
}
function reset(){ //функция перезапуска
    let tdAll = document.querySelectorAll("td"); //переменная в которую попадают все ячейки td
    for (let tdNumber = 0; tdNumber < 9; tdNumber++){//запускаем цикл
        tdAll[tdNumber].innerHTML = "";  //в каждой ячейке удаляем innerHTML
    }
    virtualTable = [
        ["*","*","*"],
        ["*","*","*"],
        ["*","*","*"]
    ];//очищаем виртуальную таблицу
    simbol = "X"; //ставим в simbol Х
    moveNumber = 0; //обнуляем количество ходов
    span.innerHTML = simbol; //в span (кто сейчас ходит) подставляем X
}