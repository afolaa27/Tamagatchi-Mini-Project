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

		this.age()
		this.addPetName()
		this.timeInterval()


	},

	
	addPetName (){
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
	},

	timeInterval(time){
		this.timerID = setInterval(() => {
			this.time++

			if(this.time > 10){
				console.log("i do my job");
				clearInterval(this.timerID)

			}
			else{
				console.log(this.time);
				console.log('i work');
				this.printAttrValue()
			}
		},time)
		
	},
	printAttrValue(){
		let ageVal = document.querySelector("#age")
		ageVal.innerText = this.time	
		//console.log(ageVal.innerText);

	},

	age(){
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