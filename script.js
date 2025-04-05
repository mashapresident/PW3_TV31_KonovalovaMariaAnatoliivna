document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calc-form");
    const resultDiv = document.getElementById("result");

    // Додаємо слухач подій на форму
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Зупиняємо стандартну дію форми

        // Отримуємо значення введених даних
        let powerInput = document.getElementById("power");
        let stdDevInput = document.getElementById("std-dev");
        let priceInput = document.getElementById("price");

        let powerValue = parseFloat(powerInput.value);
        let stdDevValue = parseFloat(stdDevInput.value);
        let priceValue = parseFloat(priceInput.value);

        // Перевірка значень
        if (
            isNaN(powerValue) || powerValue <= 0 || 
            isNaN(stdDevValue) || stdDevValue <= 0 || 
            isNaN(priceValue) || priceValue <= 0
        ) {
            alert("Будь ласка, введіть дійсні значення для всіх полів (використовуйте числа більше 0)!");
            return;
        }

        // Розрахунки
        const beforeImprovementProfit = (powerValue * 24 * 0.2 * priceValue) - (powerValue * 24 * 0.8 * priceValue);
        const afterImprovementProfit = (powerValue * 24 * 0.68 * priceValue) - (powerValue * 24 * 0.32 * priceValue);

        // Виводимо результати
        resultDiv.innerHTML = `
            <p>Прибуток до вдосконалення: ${beforeImprovementProfit.toFixed(2)} грн</p>
            <p>Прибуток після вдосконалення: ${afterImprovementProfit.toFixed(2)} грн</p>
        `;
    });
});
