function calculateAge() {
  const birthdate = new Date(document.getElementById('birthdate').value);
  const today = new Date();

  // Перевірка, чи дата народження не в майбутньому
  if (birthdate > today) {
    alert("Дата народження не може бути в майбутньому!");
    return;
  }

  // Розрахунок віку
  let age = today.getFullYear() - birthdate.getFullYear();
  const month = today.getMonth() - birthdate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  // Виведення результату
  document.getElementById('result').textContent = `Вам ${age} років.`;
}