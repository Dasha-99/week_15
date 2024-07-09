let cities = ['Москва', 'Санкт-Петербург', 'Уфа', 'Калининград', 'Нижний Новгород'];
let degrees = [];

for (let i = 0; i < cities.length; i++) {
    let degreeItem = prompt(`Введите температуру для города ${cities[i]}`);
    while (isNaN(Number(degreeItem)) || degreeItem === ' ' || degreeItem.length === 0) {
        alert('Вы ввели неверное значение для температуры');
        degreeItem = prompt(`Введите температуру для города ${cities[i]}`);
    }
    degrees.push(Number(degreeItem));
}

let list = document.createElement('ul');
for (let i = 0; i < cities.length; i++) {
    let itemList = document.createElement('li');
    itemList.textContent = `Температура в ${cities[i]}: ${degrees[i]}°C;`
    list.classList.add('text-info');
    list.append(itemList);
}

let maxInfo = document.createElement('p');
let maxDegree = Math.max(...degrees);
maxInfo.textContent = `Максимальная температура: ${maxDegree}°C;`;
maxInfo.classList.add('text-info', 'bold-text');

let minInfo = document.createElement('p');
let minDegree = Math.min(...degrees);
minInfo.textContent = `Минимальная температура: ${minDegree}°C;`;
minInfo.classList.add('text-info', 'bold-text');

let pageTitle = document.querySelector('.main__title');
pageTitle.after(list, maxInfo, minInfo);
