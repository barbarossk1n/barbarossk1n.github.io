// Получаем элементы
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('scoreValue');

// Настройки игры
const gridSize = 20;
const tileCount = canvas.width / gridSize;
let score = 0;

// Змейка
let snake = [
    { x: 10, y: 10 }
];
let snakeLength = 1;

// Направление движения
let xVelocity = 0;
let yVelocity = 0;
let lastXVelocity = 0;
let lastYVelocity = 0;

// Еда
let foodX = Math.floor(Math.random() * tileCount);
let foodY = Math.floor(Math.random() * tileCount);

// Игровой цикл
function gameLoop() {
    moveSnake();
    
    // Проверка на столкновение
    if (isGameOver()) {
        // Сброс игры
        alert(`Игра окончена! Ваш счёт: ${score}`);
        snake = [{ x: 10, y: 10 }];
        snakeLength = 1;
        xVelocity = 0;
        yVelocity = 0;
        score = 0;
        scoreElement.textContent = score;
        foodX = Math.floor(Math.random() * tileCount);
        foodY = Math.floor(Math.random() * tileCount);
    }
    
    clearCanvas();
    checkFoodCollision();
    drawFood();
    drawSnake();
    
    // Сохраняем текущее направление
    lastXVelocity = xVelocity;
    lastYVelocity = yVelocity;
    
    setTimeout(gameLoop, 100); // Скорость игры
}

// Движение змейки
function moveSnake() {
    // Добавляем новую голову
    const head = { 
        x: snake[0].x + xVelocity, 
        y: snake[0].y + yVelocity 
    };
    
    // Обработка перехода через границы поля
    if (head.x < 0) head.x = tileCount - 1;
    if (head.x > tileCount - 1) head.x = 0;
    if (head.y < 0) head.y = tileCount - 1;
    if (head.y > tileCount - 1) head.y = 0;
    
    snake.unshift(head);
    
    // Удаляем хвост, если змейка не выросла
    if (snake.length > snakeLength) {
        snake.pop();
    }
}

// Очистка холста
function clearCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Отрисовка змейки
function drawSnake() {
    ctx.fillStyle = '#4CAF50';
    
    // Рисуем каждый сегмент змейки
    snake.forEach((segment, index) => {
        // Голова змейки другого цвета
        if (index === 0) {
            ctx.fillStyle = '#388E3C';
        } else {
            ctx.fillStyle = '#4CAF50';
        }
        
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 1, gridSize - 1);
    });
}

// Отрисовка еды
function drawFood() {
    ctx.fillStyle = '#FF5722';
    ctx.fillRect(foodX * gridSize, foodY * gridSize, gridSize - 1, gridSize - 1);
}

// Проверка столкновения с едой
function checkFoodCollision() {
    if (snake[0].x === foodX && snake[0].y === foodY) {
        // Увеличиваем змейку
        snakeLength++;
        
        // Обновляем счёт
        score++;
        scoreElement.textContent = score;
        
        // Создаём новую еду
        placeFood();
    }
}

// Размещение еды в новом месте
function placeFood() {
    let newFoodPosition;
    
    // Убедимся, что еда не появится на змейке
    do {
        newFoodPosition = true;
        foodX = Math.floor(Math.random() * tileCount);
        foodY = Math.floor(Math.random() * tileCount);
        
        // Проверяем, не находится ли еда на змейке
        for (let i = 0; i < snake.length; i++) {
            if (snake[i].x === foodX && snake[i].y === foodY) {
                newFoodPosition = false;
                break;
            }
        }
    } while (!newFoodPosition);
}

// Проверка на столкновение с самим собой
function isGameOver() {
    // Если змейка стоит на месте, игра не окончена
    if (xVelocity === 0 && yVelocity === 0) {
        return false;
    }
    
    // Проверяем столкновение с телом змейки
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            return true;
        }
    }
    
    return false;
}

// Обработка нажатий клавиш
document.addEventListener('keydown', function(event) {
    // Стрелка вверх
    if (event.key === 'ArrowUp' && lastYVelocity !== 1) {
        xVelocity = 0;
        yVelocity = -1;
    }
    // Стрелка вниз
    else if (event.key === 'ArrowDown' && lastYVelocity !== -1) {
        xVelocity = 0;
        yVelocity = 1;
    }
    // Стрелка влево
    else if (event.key === 'ArrowLeft' && lastXVelocity !== 1) {
        xVelocity = -1;
        yVelocity = 0;
    }
    // Стрелка вправо
    else if (event.key === 'ArrowRight' && lastXVelocity !== -1) {
        xVelocity = 1;
        yVelocity = 0;
    }
});

// Запуск игры
gameLoop();



// // Плавная прокрутка для навигации
// document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('a[href^="#"]');
    
//     for (const link of links) {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             const targetId = this.getAttribute('href');
//             if (targetId === '#') return;
            
//             const targetElement = document.querySelector(targetId);
//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 70,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     }
    
//     // Обработка формы контактов
//     const contactForm = document.getElementById('contact-form');
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // В реальном проекте здесь был бы код для отправки формы
//             // Для демонстрации просто покажем уведомление
//             alert('Форма отправлена! (Демо-режим)');
//             contactForm.reset();
//         });
//     }
    
//     // Анимация появления элементов при прокрутке
//     const animateOnScroll = function() {
//         const elements = document.querySelectorAll('.card, section h2');
        
//         elements.forEach(element => {
//             const elementPosition = element.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;
            
//             if (elementPosition < windowHeight - 50) {
//                 element.style.opacity = '1';
//                 element.style.transform = 'translateY(0)';
//             }
//         });
//     };
    
//     // Инициализация стилей для анимации
//     const elementsToAnimate = document.querySelectorAll('.card, section h2');
//     elementsToAnimate.forEach(element => {
//         element.style.opacity = '0';
//         element.style.transform = 'translateY(20px)';
//         element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
//     });
    
//     // Запуск анимации при прокрутке
//     window.addEventListener('scroll', animateOnScroll);
//     // Запуск анимации при загрузке страницы
//     animateOnScroll();
// });
