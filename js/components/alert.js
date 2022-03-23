export default class Alert {

	constructor( alertid ){
		this.alert = document.getElementById(alertid); // variable del objeto
	}

	show(){

		this.alert.style.display  = "block";
	}

	hide(){
		this.alert.style.display  = "none";
	}

}