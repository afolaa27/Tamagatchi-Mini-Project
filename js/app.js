console.log("Tamagachi-App");

class Tamagachi {
	constructor (name, time){
		this.hunger = 0
		this.sleepiness = 0
		this.boredom = 0
		this.age = 0
		this.time = 0
		this.petName = name;
	}
}

const game = {

	time : 0,
	timerID: 0,

	startGame (){
		this.timerID = setInterval(() => {

			let timeValue = new Tamagachi()

			timeValue.time++
			console.log(timeValue.time);

			if(this.time = 10){
				clearInterval(this.timerID)

			}

		},10)


		console.log('i work'); 

		this.addPetName()
		

		

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
		
		//this.printAttrValue()

	},
	printAttrValue(){
			let ageVal = document.querySelector("")
			console.log(ageVal.value);



	}



	

}

$('.addPetButton'). on('click', ()=>{


	game.startGame()
})