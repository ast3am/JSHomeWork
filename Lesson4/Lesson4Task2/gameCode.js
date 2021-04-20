//После игры необходимо спросить номер вопроса.
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

function game(question, answer1, answer2) {
    do { //Выводим первый вопрос
        ok = false;
        event = +prompt(question + answer1 + answer2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        } else {
            ok = isAnswer(works.a0, event);
        }
        // пушим ответ
    } while (!ok);
    if (event == -1) {
        answers.push([question, "Вы вышли из игры"])
    } else if (event == 1) {
        answers.push([question, answer1]);
    } else {
        answers.push([question, answer2]);
    }
}

function returnAnswers(n) { // n-количество вопросов
    do {
        ok = false
        var searchAnswer = prompt("Введите номер вопроса, который вы ходите увидеть");
        if (searchAnswer > 0 && searchAnswer <= n) {
            alert("На вопрос № " + searchAnswer + "\n" + answers[searchAnswer - 1][0] + "\n" + "Был дан ответ: " + answers[searchAnswer - 1][1]);
            return true;
        } else {
            isAnswer(n, searchAnswer);
        }
    } while (!ok);
}

game(works.a00, works.a1, works.a2);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        game(works.b00, works.b1, works.b2);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                game(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        game(works.c00, works.c1, works.c2);
        switch (event) {
            case 1: // Второе действие
                game(works.d00, works.d1, works.d2);
                break;
            case 2: // Второе действие
                game(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
returnAnswers(answers.length);

//------------------------------------------
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
