let buttons = document.querySelectorAll('.button');

let display = document.querySelector('.display');


function calc() {
  const command = display.innerText.replace('x', '*')

  const res = eval(command);
  display.innerText = res;
}

buttons.forEach((button) =>
	button.addEventListener('click', (e) => {
		if (e.target.innerText === '=') {
			calc()
			return;
		}
		if (display.innerText === 'result') {
			display.innerText = e.target.innerText;
			return;
		}
		const addText = e.target.innerText;
		display.innerText = display.innerText + addText;
	})
);
