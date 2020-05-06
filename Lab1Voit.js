/*
Лабораторная работа 1 по дисциплине ЛОИС
гр. 721702
Выполнил студент: Войтеховский Евгений
Вариант2: проверить является ли строка формулой логики высказываний.
*/
function checkFormula(){
    var res;
    var formula = document.getElementById("inputFormula").value;
    var regularExpression =  /([(]([A-Z]|[0-1])((&)|(\|)|(->)|(~))([A-Z]|[0-1])[)]|([(][!]([A-Z]|[0-1])[)]))/g;
        while (true) {
            var initLength = formula.length;
            formula = formula.replace(regularExpression, "A");
            if (formula.length == initLength)break;
        }
        if ((formula.length == 1) && (formula.match(/[A-Z]|[0-1]/)) ) {
            res = "Выражение является формулой";
        } else {
            res = "Выражение не является формулой";
        }
        document.getElementById("output").innerHTML = res;

        if ((formula.length == 1) && (formula.match(/[A-Z]|[0-1]/)) ) {
            return res = true;
        } else {
            return res = false;
        }
    }


