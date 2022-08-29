let clikerbtn = document.getElementById("clikerbtn")
let clicks = document.getElementById("clicksh3")
let coinvalue = document.getElementById("coin")

let petbtn = document.getElementById("petbtn")
let mur = document.getElementById("mur")

let finish = document.getElementById("finishbtn")

let finishtextbtn = document.getElementById('finishtextbtn');
finishtextbtn.onmouseover = () => {
	finishtextbtn.textContent = "Пока недоступно..."
	finishtextbtn.style.fontSize = "14px"
}
finishtextbtn.onmouseout = () => {
	finishtextbtn.textContent = "Upgrade"
	finishtextbtn.style.fontSize = "20px"
}

let asec = document.getElementById("secretlink")

let stathealth = document.getElementById('stathealth');
let stathunger = document.getElementById('stathunger');
let stathappy = document.getElementById('stathappy');

//-----REGISTRATION SECTION------------------------------------------------------------------------------------
let petname = document.getElementById('petname');
let petformdiv = document.getElementById('petformdiv');
let petform_title = document.getElementById('petform_title');
let petform_title2 = document.getElementById('petform_title2');
let petform_name = document.getElementById('petform_name');
let petform_inputname = document.getElementById('petform_inputname');
let petform_skin = document.getElementById('petform_skin');
let petchoosediv = document.getElementById('petchoosediv');
let confirm_rules = document.getElementById('confirm_rules');
let a_confirm_rules = document.getElementById('a_confirm_rules');
let petform_confirm = document.getElementById('petform_confirm');
let container = document.getElementById('container');
let regtitle = ["П", "р", "и","в","е","т",","," ","р","а","д"," ","т","е","б","я"," ","в","и","д","е","т","ь","!"]
let t = 0
title1anim();
function title1anim() {
	setTimeout(() => {
		if (petform_title.textContent == "Пасибочки! :3") {} else {
		petform_title.textContent = petform_title.textContent + regtitle[t]
		t = t + 1
		setTimeout(() => {
			if (petform_title.textContent == "Пасибочки! :3") {} else {
			petform_title.textContent = petform_title.textContent + regtitle[t]
			t = t + 1
			setTimeout(() => {
				if (petform_title.textContent == "Пасибочки! :3") {} else {
				petform_title.textContent = petform_title.textContent + regtitle[t]
				t = t + 1
				setTimeout(() => {
					if (petform_title.textContent == "Пасибочки! :3") {} else {
					petform_title.textContent = petform_title.textContent + "д"
					setTimeout(() => {
						if (petform_title.textContent == "Пасибочки! :3") {} else {
						petform_title.textContent = "При"
						setTimeout(() => {
							if (petform_title.textContent == "Пасибочки! :3") {} else {
							petform_title.textContent = petform_title.textContent + regtitle[t]
							t = t + 1
							setTimeout(() => {
								if (petform_title.textContent == "Пасибочки! :3") {} else {
								petform_title.textContent = petform_title.textContent + regtitle[t]
								t = t + 1
								setTimeout(() => {
									if (petform_title.textContent == "Пасибочки! :3") {} else {
									petform_title.textContent = petform_title.textContent + regtitle[t]
									t = t + 1
									setTimeout(() => {
										if (petform_title.textContent == "Пасибочки! :3") {} else {
										petform_title.textContent = petform_title.textContent + regtitle[t]
										t = t + 1
										setTimeout(() => {
											if (petform_title.textContent == "Пасибочки! :3") {} else {
											petform_title.textContent = petform_title.textContent + regtitle[t]
											t = t + 1
											setTimeout(() => {
												if (petform_title.textContent == "Пасибочки! :3") {} else {
												petform_title.textContent = petform_title.textContent + regtitle[t]
												t = t + 1
												setTimeout(() => {
													if (petform_title.textContent == "Пасибочки! :3") {} else {
													petform_title.textContent = petform_title.textContent + regtitle[t]
													t = t + 1
													setTimeout(() => {
														if (petform_title.textContent == "Пасибочки! :3") {} else {
														petform_title.textContent = petform_title.textContent + regtitle[t]
														t = t + 1
														setTimeout(() => {
															if (petform_title.textContent == "Пасибочки! :3") {} else {
															petform_title.textContent = petform_title.textContent + regtitle[t]
															t = t + 1
															setTimeout(() => {
																if (petform_title.textContent == "Пасибочки! :3") {} else {
																petform_title.textContent = petform_title.textContent + regtitle[t]
																t = t + 1
																setTimeout(() => {
																	if (petform_title.textContent == "Пасибочки! :3") {} else {
																	petform_title.textContent = petform_title.textContent + regtitle[t]
																	t = t + 1
																	setTimeout(() => {
																		if (petform_title.textContent == "Пасибочки! :3") {} else {
																		petform_title.textContent = petform_title.textContent + regtitle[t]
																		t = t + 1
																		setTimeout(() => {
																			if (petform_title.textContent == "Пасибочки! :3") {} else {
																			petform_title.textContent = petform_title.textContent + regtitle[t]
																			t = t + 1
																			setTimeout(() => {
																				if (petform_title.textContent == "Пасибочки! :3") {} else {
																				petform_title.textContent = petform_title.textContent + regtitle[t]
																				t = t + 1
																				setTimeout(() => {
																					if (petform_title.textContent == "Пасибочки! :3") {} else {
																					petform_title.textContent = petform_title.textContent + regtitle[t]
																					t = t + 1
																					setTimeout(() => {
																						if (petform_title.textContent == "Пасибочки! :3") {} else {
																						petform_title.textContent = petform_title.textContent + regtitle[t]
																						t = t + 1
																						setTimeout(() => {
																							if (petform_title.textContent == "Пасибочки! :3") {} else {
																							petform_title.textContent = petform_title.textContent + regtitle[t]
																							t = t + 1
																							setTimeout(() => {
																								if (petform_title.textContent == "Пасибочки! :3") {} else {
																								petform_title.textContent = petform_title.textContent + regtitle[t]
																								t = t + 1
																								setTimeout(() => {
																									if (petform_title.textContent == "Пасибочки! :3") {} else {
																									petform_title.textContent = petform_title.textContent + regtitle[t]
																									t = t + 1
																									setTimeout(() => {
																										if (petform_title.textContent == "Пасибочки! :3") {} else {
																										petform_title.textContent = petform_title.textContent + regtitle[t]
																										t = t + 1
																										setTimeout(() => {
																											if (petform_title.textContent == "Пасибочки! :3") {} else {
																											petform_title.textContent = petform_title.textContent + regtitle[t]
																											t = t + 1
																											setTimeout(() => {
																												if (petform_title.textContent == "Пасибочки! :3") {} else {
																												petform_title2.textContent = "Пожалуйста, дай имя своему питомцу."
																												}
																											}, 900)
																										}
																										}, 300)
																									}
																									}, 100)
																								}
																								}, 50)
																							}
																							}, 300)
																						}
																						}, 300)
																					}
																					}, 100)
																				}
																				}, 100)
																			}
																			}, 100)
																		}
																		}, 100)
																	}
																	}, 100)
																}
																}, 100)
															}
															}, 100)
														}
														}, 100)
													}
													}, 150)
												}
												}, 100)
											}
											}, 100)
										}
										}, 100)
									}
									}, 500)
								}
								}, 100)
							}
							}, 100)
						}
						}, 200)
					}
					}, 300)
				}
				}, 100)
			}
			}, 100)
		}
		}, 100)
	}
	}, 1000)
}
let sec = 0
let intsec = null

let statstep = 1
let step = null
let hunger = null
let happy = null
let regen = null

let damagecat = null
let damagedog = null
let damagedragon = null
function damagefunc() {
	regenfuncstop();
		if (choosepet == "cat" && damagecat == null) {
			damagecat = setInterval(() => {
				stathealth.value = stathealth.value - 1
			}, 960)
		}
		if (choosepet == "dog" && damagedog == null) {
			damagedog = setInterval(() => {
				stathealth.value = stathealth.value - 1
			}, 1240)
		}
		if (choosepet == "dragon" && damagedragon == null) {
			damagedragon = setInterval(() => {
				stathealth.value = stathealth.value - 1
			}, 1520)
		}
}
function damagefuncstop() {
	if (choosepet == "cat") {
		clearInterval(damagecat)
		damagecat = null
	}
	if (choosepet == "dog") {
		clearInterval(damagedog)
		damagedog = null
	}
	if (choosepet == "dragon") {
		clearInterval(damagedragon)
		damagedragon = null
	}
}

let regencat = null
let regendog = null
let regendragon = null
function regenfunc() {
	damagefuncstop();
	if (choosepet == "cat" && regencat == null) {
		regencat = setInterval(() => {
			stathealth.value = stathealth.value + 1
		}, 1400)
	}
	if (choosepet == "dog" && regendog == null) {
		regendog = setInterval(() => {
			stathealth.value = stathealth.value + 1
		}, 1100)
	}
	if (choosepet == "dragon" && regendragon == null) {
		regendragon = setInterval(() => {
			stathealth.value = stathealth.value + 1
		}, 800)
	}
}
function regenfuncstop() {
	if (choosepet == "cat") {
		clearInterval(regencat)
		regencat = null
	}
	if (choosepet == "dog") {
		clearInterval(regendog)
		regendog = null
	}
	if (choosepet == "dragon") {
		clearInterval(regendragon)
		regendragon = null
	}
}

let timeh4 = document.getElementById('timeh4');
let min = 0
let minstr, secstr = ""

function intervalstats() {
	intsec = setInterval(() => {
		sec = sec + 1
		if (sec >= 60) {
			min += 1
			sec = 0
		}
		if (min < 10) {
			minstr = "0" + min
		} else {
			minstr = min
		}
		if (sec < 10) {
			secstr = "0" + sec
		} else {
			secstr = sec
		}
		timeh4.textContent = minstr + ":" + secstr
	}, 1000)
	if (choosepet == "cat") {
		hunger = setInterval(() => { //hunger cat
			if (stathunger.value <= 0) {
				if (stathealth.value > 0) {
					damagefunc();
				} else {
					FinishEnding();
				}
			} else {
				stathunger.value = stathunger.value - statstep
			}
		}, 1050); // default: hunger=700, happy=1300, regen=1200
		happy = setInterval(() => {
			if (stathappy.value <= 0) { //happy cat
				if (stathealth.value > 0) {
					damagefunc();
				} else {
					FinishEnding();
				}
			} else {
				stathappy.value = stathappy.value - statstep
			}
		}, 1500);
		regen = setInterval(() => { //regeneration cat
			if (stathunger.value > 0 && stathappy.value > 0) {
				if (stathealth.value >= 100) {
					regenfuncstop();
				} else {
					regenfunc();
				}
			}
		}, 100);
	} else if (choosepet == "dog") {
		hunger = setInterval(() => { //hunger dog
			if (stathunger.value <= 0) {
				if (stathealth.value > 0) {
					damagefunc();
				} else {
					FinishEnding();
				}
			} else {
				stathunger.value = stathunger.value - statstep
			}
		}, 600);
		happy = setInterval(() => {
			if (stathappy.value <= 0) { //happy dog
				if (stathealth.value > 0) {
					damagefunc();
				} else {
					FinishEnding();
				}
			} else {
				stathappy.value = stathappy.value - statstep
			}
		}, 1200);
		regen = setInterval(() => { //regeneration dog
			if (stathunger.value > 0 && stathappy.value > 0) {
				if (stathealth.value >= 100) {
					regenfuncstop();
				} else {
					regenfunc();
				}
			}
		}, 100);
	} else if (choosepet == "dragon") {
		hunger = setInterval(() => { //hunger dragon
			if (stathunger.value <= 0) {
				if (stathealth.value > 0) {
					damagefunc();
					damageticket = 1
				} else {
					FinishEnding();
				}
			} else {
				stathunger.value = stathunger.value - statstep
			}
		}, 450);
		happy = setInterval(() => {
			if (stathappy.value <= 0) { //happy dragon
				if (stathealth.value > 0) {
					damagefunc();
				} else {
					FinishEnding();
				}
			} else {
				stathappy.value = stathappy.value - statstep
			}
		}, 900);
		regen = setInterval(() => { //regeneration dragon
			if (stathunger.value > 0 && stathappy.value > 0) {
				if (stathealth.value >= 100) {
					regenfuncstop();
				} else {
					regenfunc();
				}
			}
		}, 100);
	}
	
	step = setInterval(() => {
		statstep = statstep + 1
	}, 60000);
}
function intervalstop() {
	clearInterval(intsec);
	clearInterval(hunger);
	clearInterval(happy);
	clearInterval(regen);
	clearInterval(step);
}

petformdiv.style.width = "100%"

let confirm_rules2 = document.createElement('p')
confirm_rules.after(confirm_rules2);

let choosecat = document.getElementById('choosecat');
let choosedog = document.getElementById('choosedog');
let choosedragon = document.getElementById('choosedragon');

let chooseimgcat = document.getElementById('chooseimgcat');
let chooseimgdog = document.getElementById('chooseimgdog');
let chooseimgdragon = document.getElementById('chooseimgdragon');

let chooseticket = 0
let choosepet = null
chooseoveron();

function chooseoveron() {
	chooseimgcat.onmouseover = () => {
		chooseimgcat.src = "assets/catchoose210x210.jpg"
	}
	chooseimgcat.onmouseout = () => {
		chooseimgcat.src = "assets/cat.ico"
	}
	
	chooseimgdog.onmouseover = () => {
		chooseimgdog.src = "assets/dogchoose210x210.jpg"
	}
	chooseimgdog.onmouseout = () => {
		chooseimgdog.src = "assets/dog.ico"
	}
	
	chooseimgdragon.onmouseover = () => {
		chooseimgdragon.src = "assets/dragonchoose210x210.jpg"
	}
	chooseimgdragon.onmouseout = () => {
		chooseimgdragon.src = "assets/dragon.ico"
	}
}
function chooseoveroff() {
	choosecat.onmouseover = () => {}
	choosecat.onmouseout = () => {}
	choosedog.onmouseover = () => {}
	choosedog.onmouseout = () => {}
	choosedragon.onmouseover = () => {}
	choosedragon.onmouseout = () => {}
	chooseticket = 1
}

choosecat.onclick = () => {
	choosecat.innerHTML = "<img src='assets/choosed.ico' alt='sorry' width='85%' height='90%'>"
	choosedog.innerHTML = "<img src='assets/dogblock.ico' alt='sorry' width='85%' height='90%'>"
	choosedragon.innerHTML = "<img src='assets/dragonblock.ico' alt='sorry' width='85%' height='90%'>"
	choosedog.onclick = () => {}
	choosedragon.onclick = () => {}
	petbtn.innerHTML = "<img src='assets/cat.ico' width='100%' height='100%' alt='sorry'>"
	choosepet = "cat"
	chooseoveroff();
}
choosedog.onclick = () => {
	choosedog.innerHTML = "<img src='assets/choosed.ico' alt='sorry' width='85%' height='90%'>"
	choosecat.innerHTML = "<img src='assets/catblock.ico' alt='sorry' width='85%' height='90%'>"
	choosedragon.innerHTML = "<img src='assets/dragonblock.ico' alt='sorry' width='85%' height='90%'>"
	choosecat.onclick = () => {}
	choosedragon.onclick = () => {}
	petbtn.innerHTML = "<img src='assets/dog.ico' width='100%' height='100%' alt='sorry'>"
	choosepet = "dog"
	chooseoveroff();
}
choosedragon.onclick = () => {
	choosedragon.innerHTML = "<img src='assets/choosed.ico' alt='sorry' width='85%' height='90%'>"
	choosedog.innerHTML = "<img src='assets/dogblock.ico' alt='sorry' width='85%' height='90%'>"
	choosecat.innerHTML = "<img src='assets/catblock.ico' alt='sorry' width='85%' height='90%'>"
	choosedog.onclick = () => {}
	choosecat.onclick = () => {}
	petbtn.innerHTML = "<img src='assets/dragon.ico' width='100%' height='100%' alt='sorry'>"
	choosepet = "dragon"
	chooseoveroff();
}

a_confirm_rules.onclick = () => {
	confirm_rules.textContent = "Первое правило сайта Pet Evolution: никому не рассказывать о сайте Pet Evolution."
	setTimeout(() => {
		confirm_rules2.className = "confirm_rules"
		confirm_rules2.id = "confirm_rules2"
		confirm_rules2.textContent = "Второе правило сайта Pet Evolution: пункт 1 бредит, нужно это все делать наоборот."
	}, 3000)
}

let rand1 = Math.random()
let randtext1 = ""
petform_confirm.onclick = () => {
	if (petform_inputname.value == "" || chooseticket == 0) {
		if (petform_inputname.value == "") {
			petform_name.textContent = "Напиши хоть какое-нибудь имя, ну пожалуйста)"
		} else {
			petform_name.textContent = "Имя питомца"
		}
		if (chooseticket == 0) {
			petform_skin.textContent = "А кем будет твой питомец?"
		} else {
			petform_skin.textContent = "Выбери питомца"
		}
	} else {
		let name = petform_inputname.value
		let user = [name]
		welcomewithload();
		console.log(user);
	}
}
let welcomeh1 = null
let welcomeaudio = new Audio('assets/welcome.mp3')
function welcomewithload() {
	petform_title.textContent = "Пасибочки! :3"
	petform_title2.textContent = "Сейчас загрузим твою игру...)"
	petform_name.remove();
	petform_inputname.remove();
	petform_skin.remove();
	choosecat.remove();
	choosedog.remove();
	choosedragon.remove();
	confirm_rules.remove();
	confirm_rules2.remove();
	petform_confirm.remove();
	petchoosediv.remove();
		
	setTimeout(() => {
		petformdiv.setAttribute("class", "textdiv petformdiv welcomediv")
	}, 3000);
	setTimeout(() => {
		petformdiv.style.width = "0"
	}, 9000);
	setTimeout(() => {
		petform_title.remove();
		petform_title2.remove();
		container.remove();

		rand1 = Math.random()
		if (rand1 < 0.75) {
			randtext1 = "welcomeh1"
		} else {
			randtext1 = "welcomeh1two"
			welcomeaudio.play();
		}
		petformdiv.setAttribute("class", "textdiv welcomedivtwo welcomediv")
		welcomeh1 = document.createElement("h1")
		welcomeh1.className = randtext1
		welcomeh1.textContent = "welcome"
		petformdiv.append(welcomeh1)

		setTimeout(() => {
			welcomeh1.remove();
		}, 3500);
		setTimeout(() => {
			intervalstats();
		}, 6500)
	}, 5000)
}
function welcomewithoutload() {
	petform_name.remove();
	petform_inputname.remove();
	petform_skin.remove();
	choosecat.remove();
	choosedog.remove();
	choosedragon.remove();
	confirm_rules.remove();
	confirm_rules2.remove();
	petform_confirm.remove();
	petchoosediv.remove();
	
	petname.textContent = name
	petformdiv.setAttribute("class", "textdiv petformdiv welcomediv")
	setTimeout(() => {
		petformdiv.style.width = "0"
	}, 6000);
	setTimeout(() => {
		petform_title.remove();
		petform_title2.remove();
		container.remove();

		rand1 = Math.random()
		if (rand1 < 0.7) {
			randtext1 = "welcomeh1"
		} else {
			randtext1 = "welcomeh1two"
		}
		petformdiv.setAttribute("class", "textdiv welcomedivtwo welcomediv")
		welcomeh1 = document.createElement("h1")
		welcomeh1.className = randtext1
		welcomeh1.textContent = "welcome"
		petformdiv.append(welcomeh1)

		setTimeout(() => {
			welcomeh1.remove();
		}, 3500);
		setTimeout(() => {
			intervalstats();
		}, 6500)
	}, 1300)
}

//------SETTING SECTION---------------------------------------------------------------------------------------
let settingbtn = document.getElementById('settingbtn');
let settingdiv = document.getElementById('settingdiv');
let settingcontainer = document.getElementById('settingcontainer');
let settingtitle = document.getElementById('settingtitle');
let settinglang = document.getElementById('settinglang');
let importdiv = document.getElementById('importdiv');
let settingcontactus = document.getElementById('settingcontactus');
let exportdiv = document.getElementById('exportdiv');
let exporttitle = document.getElementById('exporttitle');
let exportexitdiv = document.getElementById('exportexitdiv');
let exporth2div = document.getElementById('export');

let notsave = ""
let save = ""
let lang = "eng"
settingbtn.onclick = () => {
	intervalstop();
	settingdiv.style.width = "100%"
	settingcontainer.setAttribute("class", "settingcontainer")
	settinglang.setAttribute("class", "settinglang")
	settingtitle.textContent = "Settings"
	settinglang.textContent = "Language: "

	let langbtn = document.createElement("button")
	langbtn.className = "setbtn langbtn"
	langbtn.innerHTML = "<h3>ENG</h3>"
	settinglang.append(langbtn)

	langbtn.onclick = () => {
		if (lang == "eng") {
			ruslang();
			lang = "rus"
		} else if (lang == "rus") {
			englang();
			lang = "eng"
		}
	}
	function ruslang() {
		langbtn.innerHTML = "<h3>RUS</h3>"
		settingtitle.textContent = "Настройки"
		settinglang.textContent = "Язык: "
		settinglang.append(langbtn)
		exportbtn.innerHTML = "<h2>Экспорт данных</h2>"
		importbtn.innerHTML = "<h2>Импорт данных</h2>"
		settingexitbtn.innerHTML = "<h2>Выход</h2>"
		settingcontactus.innerHTML = "Связаться со Мной: <a class='contactuslink' href='http://vk.com/mrtreazzy' target='_blank'>VK</a>"
	}
	function englang() {
		langbtn.innerHTML = "<h3>ENG</h3>"
		settingtitle.textContent = "Settings"
		settinglang.textContent = "Language: "
		settinglang.append(langbtn)
		exportbtn.innerHTML = "<h2>Export data</h2>"
		importbtn.innerHTML = "<h2>Import data</h2>"
		settingexitbtn.innerHTML = "<h2>Exit</h2>"
		settingcontactus.innerHTML = "Contact Me: <a class='contactuslink' href='http://vk.com/mrtreazzy' target='_blank'>VK</a>"
	}
	
	let exportbtn = document.createElement("button")
	exportbtn.className = "setbtn exportbtn"
	exportbtn.innerHTML = "<h2>Export data</h2>"
	importdiv.append(exportbtn)

	let importbtn = document.createElement("button")
	importbtn.className = "setbtn exportbtn"
	importbtn.innerHTML = "<h2>Import data</h2>"
	importdiv.append(importbtn)

	importmouseover();
	function importmouseover() {
		exportbtn.onmouseover = () => {
			exportbtn.innerHTML = "<h2 style='font-size: 17px;'>Пока недоступно...</h2>"
		}
		exportbtn.onmouseout = () => {
			if (lang == "eng") {
				exportbtn.innerHTML = "<h2>Export data</h2>"
			} else if (lang == "rus") {
				exportbtn.innerHTML = "<h2>Экспорт данных</h2>"
			}
		}
		importbtn.onmouseover = () => {
			importbtn.innerHTML = "<h2 style='font-size: 17px;'>Пока недоступно...</h2>"
		}
		importbtn.onmouseout = () => {
			if (lang == "eng") {
				importbtn.innerHTML = "<h2>Import data</h2>"
			} else if (lang == "rus") {
				importbtn.innerHTML = "<h2>Импорт данных</h2>"
			}
		}
	}

	let settingexitbtn = document.createElement("button")
	settingexitbtn.className = "setbtn settingexitbtn"
	settingexitbtn.innerHTML = "<h2>Exit</h2>"
	importdiv.after(settingexitbtn)

	settingcontactus.setAttribute("class", "settingcontactus")
	settingcontactus.innerHTML = "Contact Me: <a class='contactuslink' href='http://vk.com/mrtreazzy' target='_blank'>VK</a>"

	exportbtn.onclick = () => {
		notsave = "COIN" + coin + "STAT0"
		shifrexport();

		exportdiv.style.width = "100%"
		exportcontainer.setAttribute("class", "exportcontainer")
		exporth2div.setAttribute("class", "exporth2div")
		exportexitdiv.setAttribute("class", "exportexitdiv")
		if (lang == "eng") {
			exporttitle.textContent = "Export data: "
		} else if (lang == "rus") {
			exporttitle.textContent = "Экспорт данных: "
		}

		let exporth2 = document.createElement("h2")
		exporth2.className = "exporth2"
		exporth2.textContent = save
		exporth2div.prepend(exporth2)

		let exportcopy = document.createElement("button")
		exportcopy.className = "setbtn exportcopy"
		if (lang == "eng") {
			exportcopy.innerHTML = "<h2>Copy</h2>"
		} else if (lang == "rus") {
			exportcopy.innerHTML = "<h2>Копировать</h2>"
		}
		exporth2div.append(exportcopy)

		let exportexit = document.createElement("button")
		exportexit.className = "setbtn exportexit"
		if (lang == "eng") {
			exportexit.innerHTML = "<h2>Exit</h2>"
		} else if (lang == "rus") {
			exportexit.innerHTML = "<h2>Выход</h2>"
		}
		exportexitdiv.append(exportexit)

		exportcopy.onclick = () => {
			setTimeout(async()=>
				await window.navigator.clipboard.writeText(save), 10)
			if (lang == "eng") {
				exportcopy.innerHTML = "<h2>Copyed!</h2>"
			} else if (lang == "rus") {
				exportcopy.innerHTML = "<h2>Скопировано!</h2>"
			}
		}

		exportexit.onclick = () => {
			exportdiv.style.width = "0"
			exportcontainer.removeAttribute("class")
			exporth2div.removeAttribute("class")
			exportexitdiv.removeAttribute("class")
			exporttitle.textContent = ""
			exporth2.remove();
			exportcopy.remove();
			exportexit.remove();
		}
	}

	importbtn.onclick = () => {
		exportdiv.style.width = "100%"
		exportcontainer.setAttribute("class", "exportcontainer")
		exporth2div.setAttribute("class", "exporth2div")
		exportexitdiv.setAttribute("class", "exportexitdiv")
		if (lang == "eng") {
			exporttitle.textContent = "Import data: "
		} else if (lang == "rus") {
			exporttitle.textContent = "Импорт данных: "
		}

		let importinput = document.createElement("textarea")
		importinput.className = "importinput"
		if (lang == "eng") {
			importinput.placeholder = "Print the data..."
		} else if (lang == "rus") {
			importinput.placeholder = "Впиши сюда данные..."
		}
		importinput.name = "export"
		exporth2div.prepend(importinput)

		let datasubmit = document.createElement("button")
		datasubmit.className = "datasubmit"
		if (lang == "eng") {
			datasubmit.innerHTML = "<h2>Submit</h2>"
		} else if (lang == "rus") {
			datasubmit.innerHTML = "<h2>Окей</h2>"
		}
		exporth2div.append(datasubmit)

		let exportexit = document.createElement("button")
		exportexit.className = "exportexit"
		if (lang == "eng") {
			exportexit.innerHTML = "<h2>Exit</h2>"
		} else if (lang == "rus") {
			exportexit.innerHTML = "<h2>Выход</h2>"
		}
		exportexitdiv.append(exportexit)

		datasubmit.onclick = () => {
			notsave = importinput.value
			shifrimport();
			console.log(save)
		}

		exportexit.onclick = () => {
			exportdiv.style.width = "0"
			exportcontainer.removeAttribute("class")
			exporth2div.removeAttribute("class")
			exportexitdiv.removeAttribute("class")
			exporttitle.textContent = ""
			importinput.remove();
			datasubmit.remove();
			exportexit.remove();
		}
	}

	settingexitbtn.onclick = () => {
		settingdiv.style.width = "0"
		settingcontainer.removeAttribute("class")
		settingtitle.textContent = ""
		settinglang.textContent = ""
		langbtn.remove();
		exportbtn.remove();
		importbtn.remove();
		settingexitbtn.remove();
		settingcontactus.removeAttribute("class")
		settingcontactus.innerHTML = ""
		intervalstats();
	}
}

function shifrexport() {
	save = notsave.replace(/1/g, "q")
	save = save.replace(/2/g, 'w')
	save = save.replace(/3/g, 'e')
	save = save.replace(/4/g, 'r')
	save = save.replace(/5/g, 't')
	save = save.replace(/6/g, 'y')
	save = save.replace(/7/g, 'u')
	save = save.replace(/8/g, 'i')
	save = save.replace(/9/g, 'o')
	save = save.replace(/0/g, 'p')
	save = save.replace(/Q/g, 'a') // unusual
	save = save.replace(/W/g, 's') // unusual
	save = save.replace(/E/g, 'd') // unusual
	save = save.replace(/R/g, 'f') // unusual
	save = save.replace(/T/g, 'g')
	save = save.replace(/Y/g, 'h') // unusual
	save = save.replace(/U/g, 'j') // unusual
	save = save.replace(/I/g, 'k')
	save = save.replace(/O/g, 'l')
	save = save.replace(/P/g, 'z') // unusual
	save = save.replace(/A/g, 'x')
	save = save.replace(/S/g, 'c')
	save = save.replace(/D/g, 'v') // unusual
	save = save.replace(/F/g, 'b') // unusual
	save = save.replace(/G/g, 'n') // unusual
	save = save.replace(/H/g, 'm') // unusual
	save = save.replace(/J/g, '1') // unusual
	save = save.replace(/K/g, '2') // unusual
	save = save.replace(/L/g, '3') // unusual
	save = save.replace(/Z/g, '4') // unusual
	save = save.replace(/X/g, '5') // unusual
	save = save.replace(/C/g, '6')
	save = save.replace(/V/g, '7') // unusual
	save = save.replace(/B/g, '8') // unusual
	save = save.replace(/N/g, '9')
	save = save.replace(/M/g, '0') // unusual
	save = save.replace(/=/g, '+') // unusual
	save = save.replace(/;/g, ':') // unusual
	// save = save.replace(/./g, '>') // unusual
	save = save.replace(/,/g, '<') // unusual
}
function shifrimport() {
	save = notsave.replace(/q/g, "1")
	save = save.replace(/w/g, '2')
	save = save.replace(/e/g, '3')
	save = save.replace(/r/g, '4')
	save = save.replace(/t/g, '5')
	save = save.replace(/y/g, '6')
	save = save.replace(/u/g, '7')
	save = save.replace(/i/g, '8')
	save = save.replace(/o/g, '9')
	save = save.replace(/p/g, '0')
	save = save.replace(/a/g, 'Q') // unusual
	save = save.replace(/s/g, 'W') // unusual
	save = save.replace(/d/g, 'E') // unusual
	save = save.replace(/f/g, 'R') // unusual
	save = save.replace(/g/g, 'T')
	save = save.replace(/h/g, 'Y') // unusual
	save = save.replace(/j/g, 'U') // unusual
	save = save.replace(/k/g, 'I')
	save = save.replace(/l/g, 'O')
	save = save.replace(/z/g, 'P') // unusual
	save = save.replace(/x/g, 'A')
	save = save.replace(/c/g, 'S')
	save = save.replace(/v/g, 'D') // unusual
	save = save.replace(/b/g, 'F') // unusual
	save = save.replace(/n/g, 'G') // unusual
	save = save.replace(/m/g, 'H') // unusual
	save = save.replace(/1/g, 'J') // unusual
	save = save.replace(/2/g, 'K') // unusual
	save = save.replace(/3/g, 'L') // unusual
	save = save.replace(/4/g, 'Z') // unusual
	save = save.replace(/5/g, 'X') // unusual
	save = save.replace(/6/g, 'C')
	save = save.replace(/7/g, 'V') // unusual
	save = save.replace(/8/g, 'B') // unusual
	save = save.replace(/9/g, 'N')
	save = save.replace(/0/g, 'M') // unusual
	// save = save.replace(/+/g, '=') // unusual
	save = save.replace(/:/g, ';') // unusual
	save = save.replace(/>/g, '.') // unusual
	save = save.replace(/</g, ',') // unusual
}

//------CLIKER SECTION----------------------------------------------------------------------------------------
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
	coinvalue.textContent = coin
	if (coin == 666) {
		asec.setAttribute("href", "http://mrtreazzy.github.io/jswebsite1")
		asec.innerHTML = "<h1>click<h1>"
		console.log("!DO NOT CHEAT!")
		asec.onclick = () => {
			asec.textContent = ""
		}
	}
	BlockShop(coin);
}

let version = document.getElementById('version');
let petimg = document.getElementById('petimg');
let peterrimg = document.getElementById('peterrimg');
let minipetdiv = document.getElementById('minipetdiv');
let tick = 0
let minipetskin = 0
let listen = null
petopen();
skinshadow();
function skinshadow() {
	petimg.onclick = () => {
		petimg.src = 'assets/ShadowBonnie.webp'
		minipetskin = 1
		skinnormal();
	}
}
function skinnormal() {
	petimg.onclick = () => {
		petimg.src = 'assets/freddydown.ico'
		minipetskin = 0
		skinshadow();
	}
}
function petopen() {
	version.onclick = () => {
		minipetdiv.setAttribute("class", "minipetdiv")
		if (minipetskin == 0) {
			petimg.src = 'assets/freddydown.ico'
		} else if (minipetskin == 1) {
			petimg.src = 'assets/ShadowBonnie.webp'
		}
		petimg.setAttribute("class", "petimg")
		listen = document.addEventListener('keydown', logKeyPet);
		tick = 0
		petblock();
	}
}
function petblock() {
	version.onclick = () => {
		minipetdiv.setAttribute("class", "petdivblock")
		petimg.src = ''
		petimg.removeAttribute("class")
		listen = null
		tick = 1
		petopen();
		minipetskin = 0
	}
}
let audiostep = new Audio('assets/step.mp3');
let petgor = 0
let petver = 0
let rotation = 0
let timeout1 = setTimeout(() => {}, 10)
function logKeyPet(e) {
	if (tick == 0) {
		let a = `${e.key}`
		if (a == "w" || a == "ArrowUp") {
			if (rotation != "w") {
				if (minipetskin == 0) {
					petimg.src = 'assets/freddyupwebp.webp'
				}
				rotation = "w"
			}
			if (minipetskin == 0) {
				audiostep.play();
			}
			petver -= 0.1
			petimg.style.transform = "translate("+ petgor + "vw, " + petver + "vh)";
		}
		if (a == "a" || a == "ArrowLeft") {
			if (minipetskin == 0) {
				petimg.src = 'assets/freddyleft.ico'
				audiostep.play();
			}
			rotation = "a"
			petgor -= 0.1
			petimg.style.transform = "translate("+ petgor + "vw, " + petver + "vh)";
		}
		if (a == "s" || a == "ArrowDown") {
			if (minipetskin == 0) {
				petimg.src = 'assets/freddydown.ico'
				audiostep.play();
			}
			rotation = "s"
			petver += 0.1
			petimg.style.transform = "translate("+ petgor + "vw, " + petver + "vh)";
		}
		if (a == "d" || a == "ArrowRight") {
			if (minipetskin == 0){
				petimg.src = 'assets/freddyright.ico'
				audiostep.play();
			}
			rotation = "d"
			petgor += 0.1
			petimg.style.transform = "translate("+ petgor + "vw, " + petver + "vh)";
		}
		if (petgor >= 45.3 || petver >= 44 || petgor <= -50 || petver <= -50) {
			if (petgor >= 45.3) {
				petgor -= 1
			} else if (petver >= 44) {
				petver -= 1.5
			} else if (petgor <= -50) {
				petgor += 1
			} else if (petver <= -50) {
				petver += 1.5
			}
			clearTimeout(timeout1);
			peterrimg.src = "assets/ERRfill.ico"
			peterrimg.setAttribute("class", "peterrimg")
			timeout1 = setTimeout(() => {
				peterrimg.removeAttribute("src")
				peterrimg.removeAttribute("class")
			}, 2000);
		}
	}
}

//------PET SECTION----------------------------------------------------------------------------------------
let inventorybtn = document.getElementById('inventorybtn');
let inventorydiv = document.getElementById('inventorydiv');
let invcontainer = document.getElementById('invcontainer');
let invtitle = document.getElementById('invtitle');
let inventorydiv2 = document.getElementById('inventory');
let invchooseitem = ""
inventorybtn.onclick = () => {
	intervalstop();
	inventorydiv.style.width = "100%"
	invcontainer.setAttribute("class", "invcontainer")

	invtitle.textContent = "Your Inventory"
	inventorydiv2.innerHTML = "<div class='invprofile'><div class='invavatar'><h2 class='invpetname' id='invpetname'>PetName</h2><img class='invpetimg' id='invpetimg' src='assets/cat.ico' width='100%' height='100%' alt=''><h2 class='invpetlvl'>1 level</h2></div><div class='invstat'><div class='petlvl healthlvl'><h3 class='lvlh3'>Выносливость</h3><progress id='lvlhealth' class='lvlhealth' min='0' max='100' value='100'></progress></div><div class='petlvl hungerlvl'><h3 class='lvlh3'>Прожорливость</h3><progress id='lvlhunger' class='lvlhunger' min='0' max='100' value='100'></progress></div><div class='petlvl happylvl'><h3 class='lvlh3'>Жизнерадостность</h3><progress id='lvlhappy' class='lvlhappy' min='0' max='100' value='100'></progress></div></div></div><div class='invitemsandexit'><div class='invitems'><table class='invtable' id='invtable'><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>			</tr>			<tr>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>			</tr>			<tr>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>				<td>&nbsp;</td>			</tr></table></div><div id='invexitdiv' class='invexitdiv'><button id='invactbtn' class='setbtn invexitbtn invexitbtnblock'><h2 style='color: rgb(60,60,60); margin: 0;'>Activate</h2></button><button id='invexitbtn' class='setbtn invexitbtn'><h2 style='color: rgb(60,60,60); margin: 0;'>Exit</h2></button></div></div>"
	let invexitdiv = document.getElementById('invexitdiv');
	let invexitbtn = document.getElementById('invexitbtn');
	let invpetname = document.getElementById('invpetname');
	let invpetimg = document.getElementById('invpetimg');
	let lvlhealth = document.getElementById('lvlhealth');
	let lvlhunger = document.getElementById('lvlhunger');
	let lvlhappy = document.getElementById('lvlhappy');
	if (choosepet == "cat") {
		lvlhealth.setAttribute("value", "40")
		lvlhunger.setAttribute("value", "50")
		lvlhappy.setAttribute("value", "80")
		invpetimg.src = "assets/cat.ico"
	} else if (choosepet == "dog") {
		lvlhealth.setAttribute("value", "60")
		lvlhunger.setAttribute("value", "80")
		lvlhappy.setAttribute("value", "60")
		invpetimg.src = "assets/dog.ico"
	} else if (choosepet == "dragon") {
		lvlhealth.setAttribute("value", "80")
		lvlhunger.setAttribute("value", "90")
		lvlhappy.setAttribute("value", "40")
		invpetimg.src = "assets/dragon.ico"
	}
	
	invpetname.setAttribute("class", "invpetname " + appercase[num1])
	invpetname.onclick = () => {
		num1 = num1 + 1
		if (num1 > 2) {
			num1 = 0
		}
		invpetname.setAttribute("class", "invpetname " + appercase[num1])
		petname.setAttribute("class", "petname " + appercase[num1])
	}

	invexitdiv.className = "invexitdiv"
	
	invexitbtn.onclick = () => {
		inventorydiv.style.width = "0"
		invcontainer.removeAttribute("class")
		invtitle.textContent = ""
		invtip.remove();
		inventorydiv2.innerHTML = ""
		invexitdiv.removeAttribute("class")
		invexitbtn.remove();
		intervalstats();
	}
}

let appercase = ["petnamecapitalize", "petnameuppercase", "petnamelowercase"]
let num1 = 0
petname.onclick = () => {
	num1 = num1 + 1
	if (num1 > 2) {
		num1 = 0
	}
	petname.setAttribute("class", "petname " + appercase[num1])
}
let murcount = 0
let murrandom = Math.random()
let murr1 = new Audio('assets/murr1.mp3')
let murr2 = new Audio('assets/murr2.mp3')
petbtn.onclick = () => {
	murcount += 1
	if (murcount >= 100) {
		mur.textContent = "хватит."
	} else {
		stathappy.value = stathappy.value + 1
		if (choosepet == "cat") {
			mur.textContent = "murr x" + murcount + " :3"
			if (murrandom < 0.7) {
				murr1.play();
			} else if (murrandom >= 0.7) {
				murr2.play();
			}
			murrandom = Math.random()
		} else {
			mur.textContent = " :3 x" + murcount
		}
	}
}

//-------SHOP SECTION------------------------------------------------------------------------------------------
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

itemshop1.onclick = () => {
	if (coin >= 10) {
		coin = coin - 10
		coinvalue.textContent = coin
		stathunger.value = stathunger.value + 10
		stathappy.value = stathappy.value + 5
		BlockShop(coin);
	}
}
itemshop2.onclick = () => {
	if (coin >= 20) {
		coin = coin - 20
		coinvalue.textContent = coin
		stathunger.value = stathunger.value + 20
		stathappy.value = stathappy.value + 10
		BlockShop(coin);
	}
}
itemshop3.onclick = () => {
	if (coin >= 30) {
		coin = coin - 30
		coinvalue.textContent = coin
		stathunger.value = stathunger.value + 30
		stathappy.value = stathappy.value + 15
		BlockShop(coin);
	}
}
itemshop4.onclick = () => {
	if (coin >= 40) {
		coin = coin - 40
		coinvalue.textContent = coin
		stathunger.value = stathunger.value + 40
		stathappy.value = stathappy.value + 20
		BlockShop(coin);
	}
}
itemshop5.onclick = () => {
	if (coin >= 50) {
		coin = coin - 50
		coinvalue.textContent = coin
		stathunger.value = stathunger.value + 50
		stathappy.value = stathappy.value + 25
		BlockShop(coin);
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

function FinishEnding() {
	intervalstop();
	finishtextdiv.style.width = "100%"

	titles.setAttribute("class", "titles")
	titles.textContent = "Pet Evolution v0.85 | Made by MrTreazzy"

	finishtext1.setAttribute("class", "finishtext")
	finishtext1.textContent = "Click here for Congratulations!"
	let finishtexteng = ["Thank you for playing in my new project Pet Evolution!\
	I really proud of you cuz its just awesome what you just finish my game!\
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
	gametime1.textContent = "Well, you finished the game in " + minstr + " minutes and " + secstr + " second."

	gametime2.setAttribute("class", "gametime")
	gametime2.textContent = "Неплохо, ты прошел игру за " + minstr + " минут и " + secstr + " секунд."

	finishtext2.setAttribute("class", "finishtext")
	finishtext2.textContent = "Нажми сюда для поздравлений!"
	let finishtextrus = ["RUS: А теперь на понятном языке. На англ писал без переводчика кстати :3\
	Вобщем пасибочки тебе за игру на моем проекте Pet Evolution!\
	Наверное мне стоит гордится тобой, ведь ты тот, кто действительно ее решил пройти.\
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

let hackdiv = document.getElementById('hackdiv');
let hackcoinh3 = document.getElementById('hackcoinh3');
let br1 = document.getElementById('br1');
let br2 = document.getElementById('br2');
let policediv = document.getElementById('policediv');
let policetext1 = document.getElementById('policetext1');
let policetext2 = document.getElementById('policetext2');

function item5open(coin) {
	itemshop5.innerHTML = "<img src='assets/poison.ico' height='64px' width='64px' alt='oh'><div class='iteminfo'><h1 class='itemtitle' id='item5h3'>ITEM5</h1><h2 class='itemprice' id='item5h3'>50 ©</h2></div>"
	BlockShop(coin);
	itemshop5.onclick = () => {
		if (coin >= 50) {
			coin = coin - 50
			coinvalue.textContent = coin
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
				intervalstop();
				n = 0
				ticket = 1
				hackcoinh3.setAttribute("class", "regtext")
				hackdiv.style.width = "100%"
				hackcoinh3.textContent = "Coin: "
				hackcoinh3.style.color = "#fff"
	
				let coininput = document.createElement('input')
				coininput.id = "hackcoininput"
				coininput.type = "number"
				coininput.name = "coin"
				coininput.className = "hackinput"
				hackcoinh3.append(coininput);
				
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
					coin = Number(coininput.value)
					coinvalue.textContent = coin

					hackcoinh3.textContent = ""
					hackdiv.style.width = "0"
					coininput.remove();
					hacksubmitfake.remove();
					hacksubmit.remove();
					item5open(coin);
					intervalstats();
				}
				hacksubmitfake.onclick = () => {
					hackcoinh3.textContent = ""
					hackdiv.style.width = "0"
					coininput.remove();
					hacksubmitfake.remove();
					hacksubmit.remove();
					item5open(coin);
	
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