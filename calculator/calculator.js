let buttons = document.querySelectorAll('.button');

let display = document.querySelector('.display');
let record='';
let i=0;

function calc() {
  const command = display.innerText.replace('x', '*')

  const res = eval(command);
  display.innerText = res;
}
buttons.forEach((button) =>(
	button.addEventListener('click', (e) => {
		/*let numberinput=document.getElementById('numberinput').value;
		record+=record;不知道怎么把每次按钮按的数存到record中
		i++;*/
		if (e.target.innerText === '=') {
			calc()
			return;
		}
		if (display.innerText === 'result') {
			display.innerText = e.target.innerText;
			return;
		}
		if(e.target.innerText==='clear'){
			display.innerHTML=null;
			return;
		}
		// if(e.target.innerText==='back'){
		// 	display.innerHTML=null;
		// 	record[i]=null;
		// 	return record;
				
		// 	}
		const addText = e.target.innerText;
		display.innerText = display.innerText + addText;
	})
));
