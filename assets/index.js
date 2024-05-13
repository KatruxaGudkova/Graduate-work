function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    if (message.trim() === "") {
        return;
    }

    var chatBox = document.getElementById("chat-box");
    var messageContainer = document.createElement("div"); // Создаем контейнер для сообщения
    messageContainer.classList.add('message-container');


    var messageElement = document.createElement("div");
    var messageLength = message.length;
    messageElement.style.width = (messageLength * 10) + "px";
    messageElement.style.backgroundColor = "#f0f0f0"; // Установка цвета фона элемента
    messageElement.style.borderRadius = "5px";
    messageElement.style.marginTop = "5px"; // Установка отступа сверху в 10 пикселей
    // Установка свойства CSS для переноса слов
    messageElement.style.overflowWrap = "break-word"; // Для поддержки браузеров, поддерживающих overflow-wrap
    messageElement.style.maxWidth = "calc(100% - 10px)";
    
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);


    var date = new Date(); // Получаем текущую дату и время
    var dateTimeElement = document.createElement("span"); // Создаем элемент для даты и времени
    dateTimeElement.textContent = date.toLocaleString(); // Устанавливаем в него текст с текущей датой и временем
    dateTimeElement.classList.add('message-date'); // Добавляем класс для стилизации
    messageContainer.appendChild(dateTimeElement);

    chatBox.appendChild(messageContainer); // Добавляем контейнер сообщения в чат

    // Очистить поле ввода
    messageInput.value = "";

    // Прокрутить вниз, чтобы видеть последнее сообщение
    chatBox.scrollTop = chatBox.scrollHeight;
}
