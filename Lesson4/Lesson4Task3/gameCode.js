//После игры необходимо спросить номер вопроса.
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

//------------------------------------------ проверка числа
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}
//--------------------------------------------------- функция игры
function game(n) {
    do {
        var ok = false;
        var answer = prompt(name+ ", вопрос номер " + (n+1) + "\n" + works[n].question + "\nВыберите вариант ответа" + "\n1 Вариант: " + works[n].a + "\n2 Вариант: " + works[n].b + "\n3 Вариант: " + works[n].c + "\n4 Вариант: " + works[n].d + "\n-1 Выйти из игры");
        if (answer == -1) {
            ok = true;
        } else {
            ok = isAnswer(4, answer);
        }
    } while (!ok);
    if (answer == -1) {
        alert("Спасибо за игру, до скорых встреч!")
        return false;
    } else if (answer == works[n].correct) {
        alert("Поздравляем, правильный ответ" + "\nВы заработали " + prize[n + 1] + " рублей");
        return true;
    } else {
        alert("К сожалению вы проиграли" + "\nВаш выйгрыш составил " + prize[n] + " рублей");
        alert("Игра закончена");
        return false;
    }
}
//----------------------------------------------------- запускаем игру
var name = prompt("Добрый день, представьтесь пожалуйста.")
alert("Привет, " + name + "\nДобро пожаловать на нашу игру!")
for (var i = 0; i < 5; i++) {
    if (!game(i)) {
        break
    } else {
        continue;
    }
}

