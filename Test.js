/*
Лабораторная работа 1 по дисциплине ЛОИС
гр. 721702
Выполнил студент: Войтеховский Евгений
Вариант2: проверить является ли строка формулой логики высказываний.
*/
var Mass;
var Numerous;
var tasks = ['1', 'A', 'A|B','(0|1)','(A&B&C)|C','(A&B)->(B&C)->(C&D)','(E~(D&(A|0)))','(!(A|(C->((D&A)|(C~D)))))','!A'];

document.addEventListener("DOMContentLoaded", start);

function start() {
    Mass = tasks;
    Numerous = 0;
    showTest();
}

function showTest() {
    document.getElementById("inputFormula").value = tasks[Numerous];
}

function test() {
    var radioButton = document.getElementsByName("radio_button");
    var checkedNumerous;
    var answer;
    var checkedAnswer;
    var result;

        for (var i = 0; i < radioButton.length; i++) {
            if (radioButton[i].checked) {
                checkedNumerous = i;
            }
        }

        if (checkedNumerous === undefined) {
            throw "Пожалуйста, выберите ответ!";
        }

        var inputFormula = document.getElementById("inputFormula").value;

        answer = checkFormula(inputFormula);
        checkedAnswer = (checkedNumerous === 0);

        if (checkedAnswer === answer) {
            result = "Верно";
        } else {
            result = "Неверно";
        }

        document.getElementById("output").innerHTML = result;
}

function next() {

        Numerous++;
        showTest();
}

function previous() {

        Numerous--;
        showTest();
}