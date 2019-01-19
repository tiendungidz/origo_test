import React, { Component } from 'react';



class DefaultHeader extends Component {

	constructor(props) {
		super(props); //initialize, ready
		
		this.state = { 
			title: "Dung", //Variable #1
			title2: "Duy", //Variable #2
			title3: "Lan", //Variable #3
			title4: "Dao",
			title5: "Chien"
		};
	}
	
	//Initialize
	componentDidMount() {
		this.changeName();
		this.changeName2("Thomas");
		this.changeName3("Thanh Lan");
		this.changeName4("Dao Tron");
		this.changeName5("Le Chien")
	}

	
	changeName (){	
		var myVar1;
		var myVar2;
		var myVar3;
		var myVar4;
		var myVar5;
		var myVar6;
		var myVar7;
		var myVar8;
		var myVar9;
		var myVar10;

		myVar1 = 5;
		myVar2 = myVar1 + 5;
		myVar3 = 2 * (myVar1 + myVar2);
		myVar4 = (myVar3 - myVar2) + 12 / (myVar3 - (myVar3  - myVar2));
		myVar5 = ((myVar4 -(myVar3 + myVar2)) *(myVar4 / (12 *(myVar4 + (myVar3 -20)*2))));
		myVar6 = (myVar5 - (myVar4 + myVar2) + (123 - (myVar5 + 2))/2) - myVar3;
		myVar7 = myVar6  + ((myVar5 - myVar4) / myVar4) ;
		myVar8 = (myVar7 - myVar4) * myVar4;
		myVar9 = myVar7 + myVar8 + myVar5;
		myVar10 = myVar7 - myVar8 + myVar9;
		this.setState({title: myVar9 * (myVar4 - myVar10)})
		this.setState({items: myVar10 - myVar9})
	
	}

	dangKyGoogle(){
		//....
		//....

		var UsernameGoogle;
		var PasswordGoogle;

	}

	dangKyFacebook(){
		//....
		//....

		var UsernameFacebook;
		var PasswordFacebook;

	}

	manualLogin(){
		// ....
		// ....

		var Username;
		var Password;

	}

	login(username, password){
		this.setState({
			title: username,
			title2: username + "example",
			title3: "aosdjas"
		})
	}

	logout(){
		//....
	}

	doiState(stateNao, stateMoi, stateNao2, stateMoi2){
		stateNao = stateMoi;
	}

	changeName2(toName){
		this.setState({
			title2: toName,
		})
	}

	changeName3(toName){
		this.setState({
			title3: toName
		})
	}
	
	changeName4(toName){
		this.setState({
			title4: toName
		})
	}

	changeName5(toName){
		this.setState({
			title5: toName
		})
	}
	
	render() {
    	return (
        	<header className="HeaderWrapper">
            	<a className="HeaderTitle Title" href="/">{this.state.title}</a>
            	<a className="HeaderItem Bread" href="/stations">{this.state.items}</a>
				<a className="HeaderItem Bread" href="XinChao.js">{this.state.title2}</a>
            	<a className="HeaderItem Bread" href="/stations3">{this.state.title3}</a>
				<a className="HeaderItem Bread" href="/stations4">{this.state.title4}</a>
            	<a className="HeaderItem Bread" href="/stations5">{this.state.title5}</a>
     		</header>
    	);
  	}
}

export default DefaultHeader;