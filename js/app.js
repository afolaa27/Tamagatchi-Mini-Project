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
	sleepiness:0,
	boredom:0,
	age:0,
	roundC: 1000,


	startGame (){
		this.addPet()
		this.age()
		this.timeInterval()
		


	},

	
	addPet(){
		let petNameValue = new Tamagachi()
		const getPetName = document.querySelector('#inputName')
		let setPetName = document.querySelector('#Head')
		
		petNameValue.petName = getPetName.value
		console.log(petNameValue.petName);
		let petLocate = document.querySelector('#name')
		petLocate.innerText = petNameValue.petName
		setPetName.innerText = "Code Name " + petNameValue.petName 
		getPetName.value = ""

		let statusUdate = document.querySelector('#status')
		statusUdate.innerText = petNameValue.petName + " Created "

		let locateDisp = document.querySelector('#displayGif')
		//console.log(locateBack);
		locateDisp.style.backgroundImage = "url(https://media.giphy.com/media/i0W1wW0VqgsPS/giphy.gif)"


		
	},

	timeInterval(time){
		this.timerID = setInterval(() => {
			this.time++
			if(this.time > 11){
				
				
				clearInterval(this.timerID)
			}
			else {
				
				this.printAttrValue()
			}

			
		},this.time)
		
	},
	printAttrValue(){
		this.age()
			
		//console.log(ageVal.innerText);

	},

	age(){
		let ageVal = document.querySelector("#age")
		ageVal.innerText = this.time
		const ageTime = 1000
		this.timeInterval(ageTime)

	},
	feed(){
		const feedTime = 1000
		this.setInterval(feedTime)

	}



	

}

$('.addPetButton'). on('click', ()=>{
	
	game.startGame()
})
$('.feed'). on('click',() => {

})
$('.sleep'). on('click',() => {

})
$('.lights'). on('click',() => {
	
	let locateBack = document.querySelector('#displayGif')
	console.log(locateBack);
	locateBack.style.backgroundColor = "rgba(255,255,255,0.5"
	//locateBack.backGroundColor = 'yellow'
})
$('.lights'). on('dblclick',() => {
	
	let locateBack = document.querySelector('#displayGif')
	console.log(locateBack);
	locateBack.style.backgroundColor = "transparent"
	
})