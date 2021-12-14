const doYouPreferJS = () => { // task 1
	let response = confirm("Вы выбираете JavaScript? - Нажмите OK. А если нет - Cancel.");
	if (response) {
		alert("Отличный выбор!");
	}
	else {
		alert("Очень жаль...");
		alert("крутой язык...");
	}
}

const logFrom1to5 = () => { //task 2
	let x = 1;
	do
	{
		alert(x);
		x += 1;
	}
	while (x <= 5);
}

const task3 = () => { // task 3
	const defaultText = "Впечатайте любой текст";
	let x = 0;
	do
	  {
		 sometext = prompt("Введите текст", defaultText);

		 if (sometext === defaultText || !sometext) {
			 x += 1;
		 }
	  }
	while (x < 3);

	alert(sometext);
}

const logFrom1to5WithWhile = () => { // task 4
	let x = 1;
	while (x <= 5) {
		alert(x);
		x += 1;
	}
}

const arrayTask = () => { // task 5
	var array = new Array();
	for (i = 9; i >= 0; i -= 1) {
		array.push(i);
	  }
	alert(array);
}

const imageArray = () => { // task 6
	var array = new Array("1","2","3","4","5","6","7","8","9","10");
	var y=-1, ys="", extension=".jpg";
	for (x in array)
	  {
			y++;
			ys=y;
			array[x] = "\n<a src=\"../image1/" + array[x] + extension + ">рис."+ ys + "</a>";
	  }
	alert("Ссылки на мои картинки gif-формата:" + array);
}

const evenNumbers = () => { // task 7
	let x = 0;
	while (x < 10) {
		x += 1;
		if (x % 2 != 0) {
			continue;
		}
		alert(x);
	}
}

const taskWithFor = () => { // task 8
	const breakNumber = prompt("Введите число для прерывания цикла от 1 до 10-ти ", "10");
	for (let i = 0; i <= 10; i++) {
		if (i === +breakNumber)
		{
		  break;
		}
		alert(i);
	}
}

const switchTask = () => { // task 9
	const result = prompt("Введите букву a, b, c, d или e",)
	switch (result) {
		case "a":
			alert("Привет!");
			break;
		case "b":
			alert("Как дела?");
			break;
		case "c":
			alert("Стань мид!");
			break;
		case "d":
			alert("1000-7?");
			break;
		case "e":
			alert("Я... гуль!");
			break;
		default:
			alert("Сейчас бы двойной чизбургер");
			break;
	}
}

const passwordTask = () => { // task 10
	let isPasswordCorrect = true;

	for (let i = 0; i < 3; i++) {
		result = prompt('Введите пароль, пожалуйста:');
		if (result != 'admin') isPasswordCorrect = false;
		if (isPasswordCorrect === false) {
			break;
		}
	}

	if (isPasswordCorrect) {
		alert('Поздравляю! Вы ввели верный пароль!');
		document.location.href = "../../exam1_HTML/task_2_4_EEV/task_2_4_EEV.htm";
	} else alert('Вы ввели неверный пароль!');
}

const onLinkMouseOut = () => { // task 3.2.1
	alert("Переходим на другую страницу");
	document.location.href = "../../exam1_HTML/task_2_4_EEV/task_2_4_EEV.htm";
}

const task323 = (sType) => {
	let iTemperature = 0, iFinalTemperature = 0;
	switch (sType) {
		case "CF":
			iTemperature = parseInt(prompt("Введите значение температуры в градусах по Цельсию", "0"));
			iFinalTemperature = (iTemperature * 1.8) + 32;
			alert(iTemperature + " градусов по Цельсию равно " + iFinalTemperature + " градусов по Фаренгейту");
			break;
		case "FC":
			iTemperature = Number(prompt("Введите значение температуры в градусах по Фаренгейту", "0"));
			iFinalTemperature = (iTemperature - 32) / 1.8;
			alert(iTemperature + " градусов по Фаренгейту равно " + iFinalTemperature + " градусов по Цельсию");
			break;
		case "CR":
			iTemperature = Number(prompt("Введите значение температуры в градусах по Цельсию", "0"));
			iFinalTemperature = 1.25 * iTemperature;
			alert(iTemperature + " градусов по Цельсию равно " + iFinalTemperature + " градусов по Реомюру");
			break;
		case "RC":
			iTemperature = Number(prompt("Введите значение температуры в градусах по Реомюру", "0"));
			iFinalTemperature = 0.8 * iTemperature;
			alert(iTemperature + " градусов по Реомюру равно " + iFinalTemperature + " градусов по Цельсию");
			break;
		case "FR":
			iTemperature = Number(prompt("Введите значение температуры в градусах по Фаренгейту", "0"));
			iFinalTemperature = (iTemperature - 32) / 2.25;
			alert(iTemperature + " градусов по Фаренгейту равно " + iFinalTemperature + " градусов по Реомюру");
			break;
		case "RF":
			iTemperature = Number(prompt("Введите значение температуры в градусах по Реомюру", "0"));
			iFinalTemperature = (2.25 * iTemperature) + 32;
			alert(iTemperature + " градусов по Реомюру равно " + iFinalTemperature + " градусов по Фаренгейту");
			break;
	}
}

const task331 = () => {
	let radius = Math.round(Math.random() * 100);
	alert("Радиус = " + radius);
	alert("Площадь круга с радиусом " + radius + " = " + Math.PI * (radius * radius));
}

function getNextWeekDate() {
	let currentDate = new Date();
	currentDate.setDate(new Date().getDate() + 7);
	alert("Дата через неделю: " + currentDate.toLocaleDateString());
}

function task333(form) {
	let income = 0;
	for (let i = 0; i < 6; i++) {
		income += 1.00 * form.elements[i].value;
	}
	let result = Math.round(income / 6);
	form.elements[6].value = result;
}

function task341(form) {
	let iSquare;
	let iValue = +form.num.value;
	let oList1 = form.list1;
	let oList2 = form.list2;
	let sShape = "";

	if (oList1[0].selected) {
		sShape = oList1[0].text;
		iSquare = iValue * iValue * Math.PI;
	}
	if (oList1[1].selected) {
		sShape = oList1[1].text;
		iSquare = iValue * iValue;
	}
	if (oList1[2].selected) {
		sShape = sShape + oList1[2].text;
		iSquare = iValue * iValue / 2;
	}
	if (oList1[3].selected) {
		sShape = sShape + oList1[3].text;
		iSquare = Math.sqrt(3) * iValue * iValue / 4;
	}

	if (oList2[0].selected) iSquare = iSquare * 1000;
	if (oList2[1].selected) iSquare = iSquare * 100;
	if (oList2[3].selected) iSquare = iSquare * 39.37;

	form.result.value = iSquare;
	form.shape.value = sShape;
}

function task342(form) {
	let iAvgIncome = 0;
	let iMaxIncome = 0;
	let iMinIncome = 10000;
	let sMaxIncomeMonth = "";
	let sMinIncomeMonth = "";
	const aMonths = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
	for (let i = 0; i < 12; i++) {
		iAvgIncome += +form.elements[i].value;
		if (+form.elements[i].value > iMaxIncome) {
			iMaxIncome = 1.00 * form.elements[i].value;
			sMaxIncomeMonth = aMonths[i];
		}
		if (+form.elements[i].value < iMinIncome) {
			iMinIncome = +form.elements[i].value;
			sMinIncomeMonth = aMonths[i];
		}
	}
	iAvgIncome = iAvgIncome / 12;
	form.avgProfit.value = Math.round(iAvgIncome);
	form.maxProfit.value = Math.round(iMaxIncome);
	form.minProfit.value = Math.round(iMinIncome);
	form.maxProfitMonth.value = sMaxIncomeMonth;
	form.minProfitMonth.value = sMinIncomeMonth;
}


// 3.5.1
let postion = 600;   
let step = 1;
const animationContainer = document.getElementById("animation-div");

let interval = 50;
let interval1 = 50;

let earthID = 10;
let moonID = 10;

function moveEarth() {
    clearInterval(earthID);
    earthID = setInterval(move, interval1);
    if (interval1 > 0) {
        interval1 -= 5;
    }
}

function move() {
    postion -= step;
    if (postion < 25) postion = 600;
    animationContainer.style.left = postion + 'px';
}

function moveMoon() {
    clearInterval(moonID);
    moonID = setInterval(rotateMoon, interval);
    if (interval > 0) {
        interval -= 5;
    }
}

let andle = 0;
let radius = 170;
let xBegin = 130;
let yBegin = 190;

function rotateMoon() {
    let rad = andle * Math.PI / 180;
    const oMoon = document.getElementById("moonId");
    oMoon.style.left = (xBegin + radius * Math.sin(rad)) + 'px';
    oMoon.style.top = (yBegin - radius * Math.cos(rad)) + 'px';
    andle += 1;
    if (andle >= 360) andle = 0;
}

function rotateLayout() {
	let iDegrees = 0;
	setInterval(function(){
		iDegrees++;
		animationContainer.style.webkitTransform = 'rotate(' + iDegrees + 'deg)';
	}, 50);
}

function stopMoon() {
    clearInterval(moonID);
}

function stopEarth() {
    clearInterval(earthID);
}
//


function task361() {
	const elements = document.getElementsByTagName('*');
	alert("Кол-во элементов в документе: " + elements.length);
	for (let i = 0; i < elements.length; i++) {
		alert("Тэг: " + elements[i].tagName);
	}
}
