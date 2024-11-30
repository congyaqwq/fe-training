let buttons = document.querySelectorAll('.button');

let display = document.querySelector('.display');
let record = [];
let i = 0;

function calc() {
	const command = display.innerText.replace('x', '*')

	const res = eval(command);
	display.innerText = res;
}

function displayFn() {
	display.innerText = record.join('')
}



buttons.forEach((button) => (
	button.addEventListener('click', (e) => {
		const text = e.target.innerText
		/*let numberinput=document.getElementById('numberinput').value;
		record+=record;不知道怎么把每次按钮按的数存到record中
		i++;*/
		console.log(e)
		console.log(e.target)
		if (text === '=') {
			calc()
			calcInput()
			return;
		}
		// if (display.innerText === 'result') {
		// 	display.innerText = text;
		// 	record.push(text)
		// 	return;
		// }
		if (text === 'clear') {
			record = []
			displayFn()

			onChange('')
			return;
		}
		if (text === 'back') {
			record.pop()
			console.log(record)
			displayFn()


			onChange(input.value.slice(input.value.length - 1))
			return
		}

		onChange(input.value + text)
		record.push(text)
		console.log(record)
		displayFn()
	})
));

const input = document.querySelector('input')
let value = '';
function onChange(v) {
	value = v
	input.value = v
	console.log(input.value)
}

function calcInput() {
	const res = eval(input.value.replace('x', '*'))
	onChange(res)
}

input.addEventListener('input', (e) => {
	onChange(e.target.value)
})
