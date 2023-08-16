// Получаем элементы DOM, с которыми будем взаимодействовать
const timerElement = document.getElementById("timer");
const statusElement = document.getElementById("status");

// Устанавливаем стартовое значение таймера в секундах
let secondsLeft = parseInt(timerElement.textContent);

// Функция для обновления таймера каждую секунду
function updateTimer() {
    // Уменьшаем количество оставшихся секунд
    secondsLeft--;

    // Обновляем текст в элементе таймера
    timerElement.textContent = secondsLeft;

    // Проверяем, если таймер достиг нуля, то выводим сообщение и останавливаем таймер
    if (secondsLeft <= 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
    }
}

// Запускаем таймер, вызывая функцию updateTimer каждую секунду
const interval = setInterval(updateTimer, 1000);