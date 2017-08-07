$(document).ready(function(){

    var USA = {
        name : "USA",
        tag : "USA",
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
        attack: 3,
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
        attack: 4,
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
        attack: 2,
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
        attack: 4,
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
        attack: 2,
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
        image : "nk.png",
        gdp: 100,
        attack: 3,
        powerFactor: 1.1,
        
        attackState : function(){
            this.attack = attack*powerFactor;
        },

        defendState : function(power){
            this.gdp = gdp - power;
        }
    };

    var allNations = [USA,EU,CANADA,INDIA,USSR,PRC,JAPAN,NK];
    var deadNations = [];
    var player1 = -1;
    var player2 = -1;
    var player1picked = false;
    var player2picked = false;
    var player1Power;
    var player2Power;
    var player1Health;
    var player2Health;
    var fightMode = false;

    document.body.style.backgroundImage = "url('assets/images/background.jpg')";

    var soundtrack = document.createElement("audio");
    soundtrack.setAttribute("src", "assets/imperial.mp3");
    soundtrack.play();

    var bomb = document.createElement("audio");
    bomb.setAttribute("src", "assets/bomb.wav");
    

    for (i=0; i<4; i++){ //for loop to go through all enemies

        $("#fightBTN").css("visibility", "hidden");
        initializeStates();

        function createState(currentState,ctr){
            var $stateImage = $("<img>")
                        .attr("src", "assets/images/" + currentState.image)
                        .addClass("imageOfState")
                        .addClass(currentState.side);

            var $stateDiv = $("<div>")
                        .addClass("state col-md-3")
                        .attr("id", ctr)
                        .addClass("ImageContainer")
                        .addClass(currentState.side)
                        .append($stateImage);
            return $stateDiv;
        }

        function initializeStates(){
            $("#rowAllies").empty();
            $("#rowAxis").empty();
            $("#rowFight").empty();
            $("#rowAllies").css("opacity", "1");
            $("#rowAxis").css("opacity", "1");
            player1 = -1;
            player2 = -1;


            for (var i = 0; i<allNations.length; i++){
                var testDead = deadNations.indexOf(allNations[i].name);
                console.log("deadTest: ", testDead);
                if (testDead == -1){
                    $htmlChar=createState(allNations[i],i);
                    $("#row"+allNations[i].side).append($htmlChar);
                }
            }
        }

        $(".ImageContainer").on("click", function(){
            player = $(this).attr("id");  
            console.log("CLICKED ON: ",player);

            if ($(this).hasClass("Allies") == true && player1picked == false){
                $fighterChar=createState(allNations[player]);
                $("#rowFight").append($fighterChar);
                $("#rowAllies").css("opacity", ".3");
                player1picked = true;
                player1 = player; 
            }

            else if ($(this).hasClass("Axis") == true && player2picked == false){
                $fighterChar=createState(allNations[player]);
                $("#rowFight").append($fighterChar);
                $("#rowAxis").css("opacity", ".3");
                player2 = player;
                player2picked = true;
            }

            if (player1picked == true && player2picked == true){
                $("#fightBTN").css("visibility", "visible");
                fightMode=true;
            }
        });

        $("#fightBTN").on("click", function(){
            if (fightMode == true){
                bomb.play();
                player1Power=allNations[player1].attack;
                player2Power=allNations[player2].attack;
                allNations[player1].gdp -= player2Power;
                allNations[player2].gdp -= player1Power;
                allNations[player1].attack = allNations[player1].attack * 2;
                $("#scorePlayer1").text("Health Allies: "+ allNations[player1].gdp);
                $("#scorePlayer2").text("Health Axis: "+ allNations[player2].gdp);


                if (allNations[player1].gdp <= 0){
                    alert("You Loose");
                    deadNations = [];
                    initializeStates();
                    fightMode = false;
                }
                else if (allNations[player2].gdp <= 0){
                    alert("You Defeated: "+ allNations[player2].name);
                    deadNations.push((allNations[player2]).name);
                    console.log(deadNations);
                    initializeStates();
                    $("#fightBTN").css("visibility", "hidden");
                    player1picked = false;
                    player2picked = false;
                    fightMode = false;
                }
            }

            // console.log("player1Power: ",player1Power);
            // console.log("player2Power: ",player2Power);
            // console.log("player1Health: ",allNations[player1].gdp);
            // console.log("player2Health: ",allNations[player2].gdp);
        })
    }//close for loop to kill all enemies
})