document.getElementById("CalculatePer").onclick = () => {
let a = parseFloat(prompt('Введите сторону квадрата:'));
        if (!isNaN(a)) {
            let P = Math.pow(4 * a, 2).toFixed(2);
            alert('Квадрат периметра квадрата: ' + P);
        } else {
            alert('Введите корректное число');
        }
    };

document.getElementById("CalculateMetrs").onclick = () => {
let L = parseFloat(prompt('Введите расстояние в сантиметрах:'));
        if (Number.isInteger(L) && L >= 0) {
            let meters = Math.floor(L / 100);
            alert('Количество полных метров: ' + meters);
        } else {
            alert('Введите корректное целое число');
        }
    };
  