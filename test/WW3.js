var USA = {
	name : "USA",
	side : "Allies",
	image : "usa.png",
	gdp: 100,
	attack: 5,
	powerFactor: 1.1,
	
	attackState : function(){
	    this.attack = attack*powerFactor;
    },

    defendState : function(power){
        this.gdp = gdp - power;
    }

};

var EU = {
	name : "European Union",
	side : "Allies",
	image : "eu.png",
	gdp: 100,
	attack: 5,
	powerFactor: 1.1,
	
	attackState : function(){
	    this.attack = attack*powerFactor;
    },

    defendState : function(power){
        this.gdp = gdp - power;
    }
};

var CANADA = {
	name : "Canada",
	side : "Allies",
	image : "canada.png",
	gdp: 100,
	attack: 5,
	powerFactor: 1.1,
	
	attackState : function(){
	    this.attack = attack*powerFactor;
    },

    defendState : function(power){
        this.gdp = gdp - power;
    }
};

var INDIA = {
	name : "India",
	side : "Allies",
	image : "india.png",
	gdp: 100,
	attack: 5,
	powerFactor: 1.1,
	
	attackState : function(){
	    this.attack = attack*powerFactor;
    },

    defendState : function(power){
        this.gdp = gdp - power;
    }
};

var USSR = {
	name : "USSR",
	side : "Axis",
	image : "ussr.png",
	gdp: 100,
	attack: 5,
	powerFactor: 1.1,
	
	attackState : function(){
	    this.attack = attack*powerFactor;
    },

    defendState : function(power){
        this.gdp = gdp - power;
    }
};

var PRC = {
	name : "Peoples Republic of China",
	side : "Axis",
	image : "prc.png",
	gdp: 100,
	attack: 5,
	powerFactor: 1.1,
	
	attackState : function(){
	    this.attack = attack*powerFactor;
    },

    defendState : function(power){
        this.gdp = gdp - power;
    }
};

var JAPAN = {
	name : "JAPAN",
	side : "Axis",
	image : "japan.png",
	gdp: 100,
	attack: 5,
	powerFactor: 1.1,
	
	attackState : function(){
	    this.attack = attack*powerFactor;
    },

    defendState : function(power){
        this.gdp = gdp - power;
    }
};

var NK = {
	name : "North Korea",
	side : "Axis",
	image : "NK.png",
	gdp: 100,
	attack: 5,
	powerFactor: 1.1,
	
	attackState : function(){
	    this.attack = attack*powerFactor;
    },

    defendState : function(power){
        this.gdp = gdp - power;
    }
};

var allNations = [USA,EU,CANADA,INDIA,USSR,PRC,JAPAN,NK];


function createState(currentState,ctr){
	console.log("STATE:",currentState);
	console.log("Counter:",ctr);

	var $stateImage = $("<img>")
				.attr("scr", "assets/images/" + currentState.image)
				.addClass("imageOfState")
				.addClass(currentState.side);

	var $stateDiv = $("<div>")
				.addClass("state col-md-4")
				.data("index", ctr)
				.append($stateImage);

	return $stateDiv;

}


for (var i = 0; i<allNations.length; i++){
	console.log("name This: ", allNations[i].name);
	console.log("GDP This: ", allNations[i].gdp);
	console.log("ArrayValue: ",allNations[i]);

	$htmlChar=createState(allNations[i],i);
	$("#row"+allNations[i].side).append($htmlChar);

	// if (allNations[i].side == "ally"){
	// 	$("#rowAllies").append($htmlChar);
	// }
	// if (allNations[i].side == "axis"){
	// 	$("#rowAxis").append($htmlChar);
	// }
}

