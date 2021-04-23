var contain = document.getElementsByClassName("container")[0];
var cols = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""];
var rows = ["", "8", "7", "6", "5", "4", "3", "2", "1", ""];
var white = ["1", "&#9814", "&#9816", "&#9815", "&#9813", "&#9812", "&#9815", "&#9816", "&#9814", "1"];
var whitePawn = ["2", "&#9817", "&#9817", "&#9817", "&#9817", "&#9817", "&#9817", "&#9817", "&#9817", "2"];
var black = ["8", "&#9820", "&#9822", "&#9821", "&#9819", "&#9818", "&#9821", "&#9822", "&#9820", "8"];
var blackPawn = ["7", "&#9823", "&#9823", "&#9823", "&#9823", "&#9823", "&#9823", "&#9823", "&#9823", "7"];


function getTable() {
    var table = document.createElement("table");
    for (var i = 0; i < 10; i++) {
        var tr = document.createElement("tr"); // i - строка
        table.append(tr);
        for (var j = 0; j < 10; j++) {
            var td = document.createElement("td"); //j-столбец
            table.append(td);
            switch (i) { // заполняем таблицу фигурами и цифрами/буквами
                case 0:
                    td.innerText = cols[j];
                    td.classList.add("first"); //первая строка
                    break;
                case 1:
                    td.innerHTML = black[j];
                    break;
                case 2:
                    td.innerHTML = blackPawn[j];
                    break;
                case 7:
                    td.innerHTML = whitePawn[j];
                    break;
                case 8:
                    td.innerHTML = white[j];
                    break;
                case 9:
                    td.innerHTML = cols[j];
                    break;
                default:
                    if (j == 0 || j == 9) {
                        td.innerText = rows[i];
                    }
                    break;

            }
            if (j == 9) {
                td.classList.add("lastSt"); //последний столбец
            };

            if ((i == 0 || i == 9) || (j == 0 || j == 9)) { // если ставлю не равно, то работает не кооректно, поэтому пришлось делать так, как есть
            } else if (i % 2 == j % 2) {
                td.classList.add("whiteSquare");
            } else {
                td.classList.add("blackSquare");
            };
        }

    }
    contain.append(table);
}

getTable();
