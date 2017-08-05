var USA = {
        name : "USA";
        side: "Ally";
        image : "usa.png";
        gdp: 100;
        attack: 5;
        powerFactor: 1.1;
       
        attackState : function(){
                this.attack = attack*powerFactor;
        }

        defendState : function(power){
                 this.gdp = gdp - power;
        }
};

var EU = {
        name : "European Union";
        side: "ALLY";
        image : "eu.png";
        gdp: 100;
        attack: 5;
        powerFactor: 1.1;
       
        attackState : function(){
                this.attack = attack*powerFactor;
        }

        defendState : function(power){
                this.gdp = gdp - power;
        }
};

var CANADA = {
        name : "Canada";
        side: "ALLY";
        image : "canada.png";
        gdp: 100;
        attack: 5;
        powerFactor: 1.1;
       
        attackState : function(){
                this.attack = attack*powerFactor;
        }

        defendState : function(power){
                this.gdp = gdp - power;
        }
};

var USSR = {
        name : "USSR";
        side: "AXIS";
        image : "ussr.png";
        gdp: 100;
        attack: 5;
        powerFactor: 1.1;
       
        attackState : function(){
                this.attack = attack*powerFactor;
        }

        defendState : function(power){
                 this.gdp = gdp - power;
        }
};

var PRC = {
        name : "Peoples Republic of China";
        side: "AXIS";
        image : "prc.png";
        gdp: 100;
        attack: 5;
        powerFactor: 1.1;
       
        attackState : function(){
                this.attack = attack*powerFactor;
        }

        defendState : function(power){
                this.gdp = gdp - power;
        }
};

var NK = {
        name : "North Korea";
        side: "AXIS";
        image : "NK.png";
        gdp: 100;
        attack: 5;
        powerFactor: 1.1;
       
        attackState : function(){
                 this.attack = attack*powerFactor;
        }

        defendState : function(power){
                 this.gdp = gdp - power;
        }
};