// Функція для обчислення категорій учнів на основі введених оцінок
function calculateCategories() {
    let rows = document.querySelectorAll('#students tr'); // Отримуємо всі рядки таблиці
    let excellentCount = 0; // Лічильник відмінників
    let passingCount = 0;   // Лічильник встигаючих
    let failingCount = 0;   // Лічильник не встигаючих

    // Проходимо по кожному рядку (учню)
    rows.forEach(row => {
        let grades = row.querySelectorAll('.grade'); // Отримуємо всі оцінки для поточного учня
        let total = 0;
        let validGrades = true;
        let isFailing = false; // Прапорець для перевірки на невстигаючого

        // Обчислюємо суму оцінок та перевіряємо чи всі оцінки введені
        grades.forEach(gradeInput => {
            let grade = parseFloat(gradeInput.value); // Читаємо оцінку як число
            if (isNaN(grade) || grade < 1 || grade > 12) {
                validGrades = false; // Якщо оцінка невалідна, виходимо
            } else {
                total += grade; // Додаємо оцінку до загальної суми
                if (grade < 3) {
                    isFailing = true; // Якщо хоча б одна оцінка менше 3, помічаємо учня як невстигаючого
                }
            }
        });

        let categoryCell = row.querySelector('.category'); // Знаходимо відповідну комірку для категорії

        if (!validGrades) {
            categoryCell.textContent = "Не достатньо даних для відбору"; // Якщо дані не валідні
        } else if (isFailing) {
            categoryCell.textContent = "Не встигаючий"; // Якщо є оцінка менше 3
            failingCount++; // Збільшуємо кількість не встигаючих
        } else {
            let average = total / grades.length; // Обчислюємо середнє
            if (average > 10) {
                categoryCell.textContent = "Відмінник"; // Якщо середня оцінка більше 10
                excellentCount++; // Збільшуємо кількість відмінників
            } else if (average >= 3) {
                categoryCell.textContent = "Встигаючий"; // Якщо середня оцінка між 3 і 10
                passingCount++; // Збільшуємо кількість встигаючих
            } else {
                categoryCell.textContent = "Не встигаючий"; // Якщо середня оцінка менше 3
                failingCount++; // Збільшуємо кількість не встигаючих
            }
        }
    });

    // Оновлюємо лічильники в статистиці
    document.getElementById('excellent').textContent = excellentCount;
    document.getElementById('passing').textContent = passingCount;
    document.getElementById('failing').textContent = failingCount;
}

// Функція для очищення всіх полів і статистики
function clearAll() {
    let inputs = document.querySelectorAll('input'); // Отримуємо всі поля вводу
    inputs.forEach(input => input.value = ''); // Очищаємо всі поля вводу

    let categories = document.querySelectorAll('.category'); // Отримуємо всі комірки категорій
    categories.forEach(category => category.textContent = 'Не достатньо даних для відбору'); // Очищаємо комірки категорій

    // Очищаємо статистику
    document.getElementById('excellent').textContent = 0;
    document.getElementById('passing').textContent = 0;
    document.getElementById('failing').textContent = 0;
}
