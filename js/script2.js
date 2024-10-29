// Об'єкт, що містить діапазони поштових індексів для кожної області
const postcodes = {
    "Київська": {start: 7000, end: 9999},
    "Житомирська": {start: 10000, end: 13999},
    "Чернігівська": {start: 14000, end: 17999},
    "Черкаська": {start: 18000, end: 20999},
    "Вінницька": {start: 21000, end: 24999},
    "Кіровоградська": {start: 25000, end: 28999},
    "Хмельницька": {start: 29000, end: 32999},
    "Рівненська": {start: 33000, end: 35999},
    "Полтавська": {start: 36000, end: 39999},
    "Сумська": {start: 40000, end: 42999},
    "Волинська": {start: 43000, end: 45999},
    "Тернопільська": {start: 46000, end: 48999},
    "Дніпропетровська": {start: 49000, end: 53999},
    "Миколаївська": {start: 54000, end: 57999},
    "Чернівецька": {start: 58000, end: 60999},
    "Харківська": {start: 61000, end: 64999},
    "Одеська": {start: 65000, end: 68999},
    "Запорізька": {start: 69000, end: 72999},
    "Херсонська": {start: 73000, end: 75999},
    "Івано-Франківська": {start: 76000, end: 78999},
    "Львівська": {start: 79000, end: 82999},
    "Донецька": {start: 83000, end: 87999},
    "Закарпатська": {start: 88000, end: 89999},
    "Луганська": {start: 91000, end: 94999},
    "АР Крим": {start: 95000, end: 98999}
};

function checkPostcode() {
    // Отримуємо значення введеного міста, області та індексу
    const city = document.getElementById("city").value.trim();
    const region = document.getElementById("region").value;
    const postcode = parseInt(document.getElementById("postcode").value.trim(), 10);

    // Перевіряємо, чи область вибрана і чи є вона в об'єкті postcodes
    if (region && postcodes[region]) {
        // Отримуємо діапазон індексів для вибраної області
        const postcodeRange = postcodes[region];
        
        // Перевіряємо, чи входить індекс в діапазон індексів області
        if (postcode >= postcodeRange.start && postcode <= postcodeRange.end) {
            document.getElementById("result").innerText = `Вказаний поштовий індекс вірний для області ${region}.`;
        } else {
            document.getElementById("result").innerText = `Вказаний поштовий індекс не вірний для області ${region}.`;
        }
    } else {
        // Якщо область не вибрана або її немає в об'єкті postcodes
        document.getElementById("result").innerText = "Помилка: Область не знайдена або не вибрана.";
    }
}
