let clikerbtn = document.getElementById("clikerbtn")
let clicks = document.getElementById("clicksh3")
let coinvalue = document.getElementById("coin")

let petbtn = document.getElementById("petbtn")
let mur = document.getElementById("mur")
let stats = document.getElementById("stats")

let finish = document.getElementById("finishbtn")
let asec = document.getElementById("secretlink")

let petname = document.getElementById('petname');
let petformdiv = document.getElementById('petformdiv');
let petform_title = document.getElementById('petform_title');
let petform_title2 = document.getElementById('petform_title2');
let petform_name = document.getElementById('petform_name');
let petform_inputname = document.getElementById('petform_inputname');
let petform_psw = document.getElementById('petform_psw');
let petform_inputpsw = document.getElementById('petform_inputpsw');
let confirm_rules = document.getElementById('confirm_rules');
let a_confirm_rules = document.getElementById('a_confirm_rules');
let petform_confirm = document.getElementById('petform_confirm');
let container = document.getElementById('container');
petformdiv.style.width = "100%"
let confirm_rules2 = document.createElement('p')
confirm_rules.after(confirm_rules2);
a_confirm_rules.onclick = () => {
	confirm_rules.textContent = "Первое правило сайта Pet Evolution: никому не рассказывать о сайте Pet Evolution."
	setTimeout(() => {
		confirm_rules2.className = "confirm_rules"
		confirm_rules2.id = "confirm_rules2"
		confirm_rules2.textContent = "Второе правило сайта Pet Evolution: пункт 1 бредит, нужно это все делать наоборот."
	}, 3000)
}
petform_confirm.onclick = () => {
	if (petform_inputname.value == "" || petform_inputpsw.value == "" || petform_inputpsw.value.length < 6) {
		if (petform_inputname.value == "") {
			petform_name.textContent = "Напиши хоть какое-нибудь имя, ну пожалуйста)"
		} else {
			petform_name.textContent = "Имя питомца"
		}
		if (petform_inputpsw.value.length < 6) {
			petform_psw.textContent = "Эй! Твой пароль должен быть длинной не менее 6 символов. Учти это!"
		}
		if (petform_inputpsw.value == "") {
			petform_psw.textContent = "Ну придумай хоть что-нибудь, прошу тебя!"
		}
	} else {
		let name = petform_inputname.value
		let password = petform_inputpsw.value
		let user = [name, password]
		petform_title.textContent = "Пасибочки! :3"
		petform_title2.textContent = "Сейчас загрузим твою игру...)"
		setTimeout(() => {
			petformdiv.style.width = "0"
			container.style.width = "0"
			petform_title.textContent = ""
			petform_title2.textContent = ""
			container.removeAttribute("class")
			console.log(user);
		}, 3000)
		petform_name.textContent = ""
		petform_inputname.remove();
		petform_psw.textContent = ""
		petform_inputpsw.remove();
		confirm_rules.remove();
		confirm_rules2.remove();
		petform_confirm.textContent = ""
		petform_confirm.remove();
		petname.textContent = name
	}
}
let appercase = ["petnamecapitalize", "petnameuppercase", "petnamelowercase"]
let num1 = 0
petname.onclick = () => {
	petname.setAttribute("class", "petname " + appercase[num1])
	num1 = num1 + 1
	if (num1 > 2) {
		num1 = 0
	}
}

let cps = 0
let coin = 0
clikerbtn.onclick = () => {
	if (cps == 0) {
		setTimeout(() => {
			clicks.textContent = cps
			cps = 0
		}, 1000)
	}
	cps += 1
	coin += 1
	coinvalue.textContent = "Coin: " + coin
	if (coin == 666) {
		asec.setAttribute("href", "http://mrtreazzy.github.io/jswebsite1")
		asec.textContent = "click"
		console.log("!DO NOT CHEAT!")
	}
	BlockShop(coin);
}

murcount = 0
petbtn.onclick = () => {
	murcount += 1
	if (murcount >= 100) {
		mur.textContent = "хватит."
	} else {
		mur.textContent = "murr x" + murcount + " :3"
	}
}

let itemshop1 = document.getElementById("item1")
let itemshop2 = document.getElementById("item2")
let itemshop3 = document.getElementById("item3")
let itemshop4 = document.getElementById("item4")
let itemshop5 = document.getElementById("item5")
let itemico1 = document.getElementById('itemico1')
let itemico2 = document.getElementById('itemico2')
let itemico3 = document.getElementById('itemico3')
let itemico4 = document.getElementById('itemico4')
let itemico5 = document.getElementById('itemico5')

let stat = 0
itemshop1.onclick = () => {
	if (coin >= 10) {
		coin = coin - 10
		coinvalue.textContent = "Coin: " + coin
		stat = stat + 10
		stats.textContent = "Complete: " + stat + "%"
		Finish(stat);
		BlockShop(coin);
	}
}
itemshop2.onclick = () => {
	if (coin >= 20) {
		coin = coin - 20
		coinvalue.textContent = "Coin: " + coin
		stat = stat + 20
		stats.textContent = "Complete: " + stat + "%"
		Finish(stat);
		BlockShop(coin);
	}
}
itemshop3.onclick = () => {
	if (coin >= 30) {
		coin = coin - 30
		coinvalue.textContent = "Coin: " + coin
		stat = stat + 30
		stats.textContent = "Complete: " + stat + "%"
		Finish(stat);
		BlockShop(coin);
	}
}
itemshop4.onclick = () => {
	if (coin >= 40) {
		coin = coin - 40
		coinvalue.textContent = "Coin: " + coin
		stat = stat + 40
		stats.textContent = "Complete: " + stat + "%"
		Finish(stat);
		BlockShop(coin);
	}
}
itemshop5.onclick = () => {
	if (coin >= 50) {
		coin = coin - 50
		coinvalue.textContent = "Coin: " + coin
		stat = stat + 50
		stats.textContent = "Complete: " + stat + "%"
		Finish(stat);
		BlockShop(coin);
	}
}

function Finish(stat) {
	if (stat >= 100) {
		finish.removeAttribute("disabled")
		finish.setAttribute("class", "finishbtnOpen")
	}
	if (stat >= 1000) {
		mur.textContent = "Чего ты черт возьми добиваешься???"
	}
}

function BlockShop(coin) {
	if (coin < 10) {
		itemshop1.setAttribute("class", "itembtn itembtnblock")
		itemico1.setAttribute("src", "assets/poisonBlock.ico")
	} else {
		itemshop1.setAttribute("class", "itembtn itembtnopen")
		itemico1.setAttribute("src", "assets/poison.ico")
	}
	if (coin < 20) {
		itemshop2.setAttribute("class", "itembtn itembtnblock")
		itemico2.setAttribute("src", "assets/poisonBlock.ico")
	} else {
		itemshop2.setAttribute("class", "itembtn itembtnopen")
		itemico2.setAttribute("src", "assets/poison.ico")
	}
	if (coin < 30) {
		itemshop3.setAttribute("class", "itembtn itembtnblock")
		itemico3.setAttribute("src", "assets/poisonBlock.ico")
	} else {
		itemshop3.setAttribute("class", "itembtn itembtnopen")
		itemico3.setAttribute("src", "assets/poison.ico")
	}
	if (coin < 40) {
		itemshop4.setAttribute("class", "itembtn itembtnblock")
		itemico4.setAttribute("src", "assets/poisonBlock.ico")
	} else {
		itemshop4.setAttribute("class", "itembtn itembtnopen")
		itemico4.setAttribute("src", "assets/poison.ico")
	}
	if (coin < 50) {
		itemshop5.setAttribute("class", "itembtn itembtnblock")
		itemico5.setAttribute("src", "assets/poisonBlock.ico")
	} else {
		itemshop5.setAttribute("class", "itembtn itembtnopen")
		itemico5.setAttribute("src", "assets/poison.ico")
	}
}

let finishtext1 = document.getElementById("finishtext1")
let finishtext2 = document.getElementById("finishtext2")
let gametime1 = document.getElementById("gametime1")
let gametime2 = document.getElementById("gametime2")
let titles = document.getElementById("titles")
let secrettitle = document.getElementById("secrettitle")
let finishtextdiv = document.getElementById("finishtextdiv")
let contactus = document.getElementById('contactus');

let sec = 0
setInterval(() => {
	sec = sec + 1
}, 1000)

finish.onclick = () => {
	finishtextdiv.style.width = "100%"

	titles.setAttribute("class", "titles")
	titles.textContent = "Pet Evolution v0.5 | Made by MrTreazzy"

	finishtext1.setAttribute("class", "finishtext")
	finishtext1.textContent = "Click here for Congratulations!"
	let finishtexteng = ["Thank you for playing in my new project Pet Evolution!\
	I really proud of you cuz its just awesome what you just finish my game!\
	You are clicked 100 times, its been very hard i guess...\
	And so, its my first project, my first game.\
	Sure, its just first version of this project and im going to update it.\
	I hope you will waiting for release of new version of this game, isnt it?)\
	Sorry for my bad Eng :3 So... See ya later!", "Click here for English message!"]
	let n1 = 0
	finishtext1.onclick = () => {
		finishtext1.textContent = finishtexteng[n1]
		if (n1 == 0) {
			n1 = 1
		} else {
			n1 = 0
		}
	}

	gametime1.setAttribute("class", "gametime")
	gametime1.textContent = "Well, you finished the game in " + sec + " second."

	gametime2.setAttribute("class", "gametime")
	gametime2.textContent = "Неплохо, ты прошел игру за " + sec + " секунд."

	finishtext2.setAttribute("class", "finishtext")
	finishtext2.textContent = "Нажми сюда для поздравлений!"
	let finishtextrus = ["RUS: А теперь на понятном языке. На англ писал без переводчика кстати :3\
	Вобщем пасибочки тебе за игру на моем проекте Pet Evolution!\
	Наверное мне стоит гордится тобой, ведь ты тот, кто действительно ее решил пройти.\
	Думаю это было трудно, ты кликнул 100 раз чтобы ее пройти...\
	Но все же, это мой первый проект, моя первая игра.\
	Конечно, это была первая версия этой игры и я буду ее улучшать в скором времени.\
	Надеюсь, ты оценишь ее и будешь ждать выход новой версии, не так ли?)\
	Ну чтож, пока попрощаюсь, буду тоже ждать тебя на моем проекте! Бывай)", "Нажми сюда для поздравлений!"]
	let n2 = 0
	finishtext2.onclick = () => {
		finishtext2.textContent = finishtextrus[n2]
		if (n2 == 0) {
			n2 = 1
		} else {
			n2 = 0
		}
	}
	contactus.setAttribute("class", "contactush2")
	contactus.innerHTML = "Contact Me/Связаться с Мной: <a class='contactuslink' href='http://vk.com/mrtreazzy' target='_blank'>VK</a>"

	secrettitle.setAttribute("class", "secrettitle")
	secrettitle.textContent = "wait...???"
	secrettitle.onclick = () => {
		finishtextdiv.setAttribute("class", "secretback finishtextdiv")
	}
}

let regbtn = document.getElementById('regbtn');
let regtext = document.getElementById('regtext');
let errregdiv = document.getElementById('errregdiv');

regdialogue = ["- Непонял, как это не работает?", "- Незнаю, скорее всего кто-то недоработал механизм регистрации!", "- Хмм, действительно, её нет. Хорошо, тогда вернем нашего посетителя обратно.", "- Окей, возвращаю..."]

regbtn.onclick = () => {
	errregdiv.style.width = "100%"
	regtext.setAttribute("class", "regtext")
	regtext.textContent = "- Упс! Кажется регистрация не работает..."
	num = 0
	regtext.onclick = () => {
		regtext.textContent = regdialogue[num]
		num = num + 1
		if (num == 4) {
			num = 3
			setTimeout(() => {
				regtext.textContent = ""
				errregdiv.style.width = "0"
				regtext.removeAttribute("class")
				regbtn.remove();
			}, 3000)
		}
	}
}

let hackdiv = document.getElementById('hackdiv');
let hackcoinh3 = document.getElementById('hackcoinh3');
let hackprogressh3 = document.getElementById('hackprogressh3');
let br1 = document.getElementById('br1');
let br2 = document.getElementById('br2');
let policediv = document.getElementById('policediv');
let policetext1 = document.getElementById('policetext1');
let policetext2 = document.getElementById('policetext2');

function item5open(coin, stat) {
	itemshop5.innerHTML = "<img src='assets/poison.ico' height='64px' width='64px' alt='oh'><div class='iteminfo'><h1 class='itemtitle' id='item5h3'>ITEM5</h1><h2 class='itemprice' id='item5h3'>50 ©</h2></div>"
	BlockShop(coin);
	itemshop5.onclick = () => {
		if (coin >= 50) {
			coin = coin - 50
			coinvalue.textContent = "Coin: " + coin
			stat = stat + 50
			stats.textContent = "Complete: " + stat + "%"
			Finish(stat);
			BlockShop(coin);
		}
	}
}
function item5hack(coin) {
	itemshop5.setAttribute("class", "hackshop")
	item5.textContent = ""
}

let n = 0
let ticket = 0
document.addEventListener('keydown', logKey);

function logKey(e) {
	if (ticket == 0) {
		let a = `${e.key}`
		if (a == "h" && n == 0) {
			n = n + 1
		}
		if (a == "a" && n == 1) {
			n = n + 1
		}
		if (a == "c" && n == 2) {
			n = n + 1
		}
		if (a == "k" && n == 3) {
			n = n + 1
		}
		if (n == 4) {
			item5hack(coin);
			itemshop5.onclick = () => {
				n = 0
				ticket = 1
				hackcoinh3.setAttribute("class", "regtext")
				hackprogressh3.setAttribute("class", "regtext")
				hackdiv.style.width = "100%"
				hackcoinh3.textContent = "Coin: "
				hackprogressh3.textContent = "Progress: "
				hackcoinh3.style.color = "#fff"
				hackprogressh3.style.color = "#fff"
	
				let coininput = document.createElement('input')
				coininput.id = "hackcoininput"
				coininput.type = "number"
				coininput.name = "coin"
				coininput.className = "hackinput"
				hackcoinh3.append(coininput);
				
				let proginput = document.createElement('input')
				proginput.id = "hackproginput"
				proginput.type = "number"
				proginput.name = "prog"
				proginput.className = "hackinput"
				hackprogressh3.append(proginput);
				
				let hacksubmitfake = document.createElement('input')
				hacksubmitfake.id = "hacksubmitfake"
				hacksubmitfake.type = "submit"
				hacksubmitfake.value = "HACK"
				hacksubmitfake.className = "hacksubmitfake"
				br1.after(hacksubmitfake);
				
				let hacksubmit = document.createElement('input')
				hacksubmit.id = "hacksubmit"
				hacksubmit.type = "submit"
				hacksubmit.value = "exit"
				hacksubmit.className = "hacksubmit"
				br2.after(hacksubmit);
	
				hacksubmit.onclick = () => {
					if (coininput.value >= 0 || coininput.value < 0) {
						coin = coininput.valueAsNumber
						coinvalue.textContent = "Coin: " + coin
					}
					if (proginput.value >= 0 || proginput.value < 0) {
						stat = proginput.valueAsNumber
						stats.textContent = "Complete: " + stat + "%"
						Finish(stat)
					}
					hackcoinh3.textContent = ""
					hackprogressh3.textContent = ""
					hackdiv.style.width = "0"
					coininput.remove();
					proginput.remove();
					hacksubmitfake.remove();
					hacksubmit.remove();
					item5open(coin, stat);
				}
				hacksubmitfake.onclick = () => {
					hackcoinh3.textContent = ""
					hackprogressh3.textContent = ""
					hackdiv.style.width = "0"
					coininput.remove();
					proginput.remove();
					hacksubmitfake.remove();
					hacksubmit.remove();
					item5open(coin, stat);
	
					policetext1.setAttribute("class", "policeh1")
					policetext2.setAttribute("class", "policetext")
					policediv.style.width = "100%"
					policediv.style.backgroundColor = "red"
					policetext1.textContent = "!ATTENTION!"
					policetext2.textContent = "You have been caught for cheating! \
					Please, raise your dirty hands from your keyboard! \
					You have been fined 10,000 social credits and 1 bowl of rice. \
					Quickly press F5 on your keyboard with your nose to evade arrest. \
					With love, FBI."
				}
			}
		}
	}
}