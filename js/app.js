console.log("Tamagachi-App");

class Tamagachi {
	constructor (name){
		
		this.time = 0
		this.petName = name;
	}
}

const game = {

	time : 0,
	timerID: 0,
	hunger:0,
	sleepiness:0,
	boredom:0,
	age:0,
	roundC: 1000,


	startGame (){
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

	printAttrValue(){
		let ageVal = document.querySelector("#age")
		ageVal.innerText = this.time	
		console.log(ageVal.innerText);

	},

	timeInterval(time){
		this.timerID = setInterval(() => {
			this.time++
			console.log(this.time);
		if(this.time > 10){
			console.log("i do my job");
			clearInterval(this.timerID)

		}else{

			this.printAttrValue()
		}
		}time)
		console.log('i work');
	},
	age(){
		
	}



	

}

$('.addPetButton'). on('click', ()=>{
	
	game.startGame()
})