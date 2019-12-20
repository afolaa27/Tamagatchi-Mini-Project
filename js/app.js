console.log("Tamagachi-App");

class Tamagachi {
	constructor (name){
		
		this.time = 0
		this.petName = name;
	}
}

const game = {

	time : 0,
	timerID: "",
	hunger:0,
	sleeps:0,
	boredom:0,
	age:0,
	
	timeLight:0,
	validate:false,


	startGame (){
		this.addPet()
		this.timeInterval()
	},

	
	addPet(){
		let petNameValue = new Tamagachi()
		const getPetName = document.querySelector('#inputName')
		let setPetName = document.querySelector('#Head')
		
		petNameValue.petName = getPetName.value
		let petLocate = document.querySelector('#name')

		petLocate.innerText = petNameValue.petName
		setPetName.innerText = "Code Name " + petNameValue.petName 
		getPetName.value = ""

		let statusUdate = document.querySelector('#status')
		statusUdate.innerText = petNameValue.petName + " Created "

		let locateDisp = document.querySelector('#displayGif')	
		locateDisp.style.backgroundImage = "url(https://media.giphy.com/media/i0W1wW0VqgsPS/giphy.gif)"

		
	},

	printAttrValue(){
		let petLocateHunger = document.querySelector('#hunger')
		petLocateHunger.innerText = this.hunger

		let petLocateBoredom = document.querySelector('#boredomess')
		petLocateBoredom.innerText = this.boredom

		let petLocateSleepiness = document.querySelector('#sleepiness')
		petLocateSleepiness.innerText = this.sleeps

		let ageVal = document.querySelector("#age")
		
		ageVal.innerText = this.age
		
		this.killpetCheck()
		

	},
	play(){
		let locateDisp = document.querySelector('#displayGif')
		//console.log(locateBack);
		locateDisp.style.backgroundImage = "url(https://media.giphy.com/media/abonYnUKXMFLa/giphy.gif)"
		
		let statusUdate = document.querySelector('#status')
		statusUdate.innerText =" Fun is good ... "
		this.boredom--
		let petLocateHunger = document.querySelector('#boredom')
		petLocateHunger.innerText = this.boredom
	},

	
	feed(){
		let locateDisp = document.querySelector('#displayGif')
		//console.log(locateBack);
		locateDisp.style.backgroundImage = "url(https://media.giphy.com/media/KirK3WZtkmfaE/giphy.gif)"
		
		let statusUdate = document.querySelector('#status')
		statusUdate.innerText =" You Fed An Agent "
		this.hunger--
		let petLocateHunger = document.querySelector('#hunger')
		petLocateHunger.innerText = this.hunger
	},
	sleep(){

		let locateDisp = document.querySelector('#displayGif')
		
		locateDisp.style.backgroundImage = "url(https://media.giphy.com/media/LgcDsIX4q6LiU/giphy.gif)"

		let statuUdate = document.querySelector('#status')
		statuUdate.innerText =" Agent Hibenating "

		let petLocateSleepiness = document.querySelector('#sleepiness')
		this.sleeps--
		petLocateSleepiness.innerText = this.sleeps

	},
	timeInterval(time){
		this.timerID = setInterval(() => {
			this.time++
			this.timeLight++
			if (this.time % 6 ===0){
				this.age++

			}
			if (this.time % 3 === 0 ){	
				this.hunger++
			}
			if (this.time % 6 === 0 ){	
				this.sleeps++
			}	
			if (this.time % 2 === 0 ){	
				this.boredom++
			} if (this.timeLight % 6 === 0){

				this.validate = true
				this.lights(this.validate)

			}	
			
			else {
				
				this.printAttrValue()
			}
			
		}, 1000)
		
	},
	killpetCheck(){

		if (this.sleepiness === 10 || this.hunger ===10 || this.boredom === 10){
			clearInterval(this.timerID)
			let locateBack = document.querySelector('#displayGif')
			let statusUdate = document.querySelector('#status')
			statusUdate.innerText =" You killed An Agent " 

			locateBack.style.backgroundImage = "url(https://media.giphy.com/media/41xheAhKk10i20ymQt/giphy.gif)"


		}
	},
	lights(validate){

		
		
		let locateBack = document.querySelector('#displayGif')
		console.log(locateBack);
		
		locateBack.style.opacity = ".1"
		console.log(this.time);

		let statusUdate = document.querySelector('#status')
		statusUdate.innerText =" Lights Off"

		if (validate){
			console.log(locateBack);
			statusUdate.innerText =" Lights on"
			locateBack.style.opacity = "1.0"
		}
		


	}

}

$('.addPetButton'). on('click', ()=>{
	
	game.startGame()
})
$('.feed'). on('click',() => {
	game.feed()
})
$('.sleep'). on('click',() => {
	game.sleep()
})
$('.play'). on('click',() => {
	game.play()
})
$('.lights'). on('click',() => {
	game.lights()
	//locateBack.backGroundColor = 'yellow'
})
