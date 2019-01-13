import React, { Component } from 'react';


class DefaultHeader extends Component {
	constructor(props) {
        super(props);
		this.state = { 
            title: "Dung"
		};
		this.state = { 
            items: "Dung"
        };
	}
	
	//Initialize
	componentDidMount() {
		this.changeName();
	

	}
	changenameMenuitems1(){
	


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
	
	render() {
    	return (
        	<header className="HeaderWrapper">
            	<a className="HeaderTitle Title" href="/">{this.state.title}</a>
            	<a className="HeaderItem Bread" href="/stations">{this.state.items}</a>
				<a className="HeaderItem Bread" href="/stations2">Xin Chao</a>
            	<a className="HeaderItem Bread" href="/stations3">Xin Chao</a>
				<a className="HeaderItem Bread" href="/stations4">Xin Chao</a>
            	<a className="HeaderItem Bread" href="/stations5">Xin Chao</a>
            	<a className="HeaderItem Bread" href="/stations6">Xin Chao</a>
     	</header>
    	);
  	}
}

export default DefaultHeader;