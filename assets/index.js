document.addEventListener("DOMContentLoaded", function() {
    var messageInput = document.getElementById("message-input");

    // Добавляем обработчик событий для поля ввода сообщения при загрузке страницы
    messageInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            sendMessage(); // Вызываем функцию отправки сообщения
        }
    });
    
});

function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    if (message.trim() === "") {
        return;
    }
   // Добавление обработчика событий для события keydown
    messageInput.addEventListener("keydown", function(event) {
    // Проверка, нажата ли клавиша Enter
    if (event.key === "Enter") {
        sendMessage(); // Вызываем функцию отправки сообщения
    }
    });

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

$(window).ready(function(){
    $(".boton").wrapInner('<div class=botontext></div>');
        
        $(".botontext").clone().appendTo( $(".boton") );
        
        $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
        
        $(".twist").css("width", "25%").css("width", "+=3px");
    });