$(document).ready(function(){

    var USA = {
        name : "USA",
        tag : "USA",
        side : "Allies",
        image : "usa.png",
        gdp: 100,
        attack: 5,
        Startattack: 5,
        powerFactor: 1.15,
    };

    var EU = {
        name : "EuropeanUnion",
        side : "Allies",
        image : "eu.png",
        gdp: 100,
        attack: 3,
        Startattack: 3,
        powerFactor: 1.12,
    };

    var CANADA = {
        name : "Canada",
        side : "Allies",
        image : "canada.png",
        gdp: 100,
        attack: 4,
        Startattack: 4,
        powerFactor: 1.1,
    };

    var INDIA = {
        name : "India",
        side : "Allies",
        image : "india.png",
        gdp: 100,
        attack: 2,
        Startattack: 2,
        powerFactor: 1.105,
    };

    var USSR = {
        name : "USSR",
        side : "Axis",
        image : "ussr.png",
        gdp: 100,
        attack: 6,
        Startattack: 6,
        powerFactor: 1.1,
    };

    var PRC = {
        name : "Peoples Republic of China",
        side : "Axis",
        image : "prc.png",
        gdp: 100,
        attack:8,
        Startattack:8,
        powerFactor: 1.15,
    };

    var JAPAN = {
        name : "JAPAN",
        side : "Axis",
        image : "japan.png",
        gdp: 100,
        attack: 3,
        Startattack: 3,
        powerFactor: 1.12,
    };

    var NK = {
        name : "North Korea",
        side : "Axis",
        image : "nk.png",
        gdp: 100,
        attack: 3,
        Startattack: 3,
        powerFactor: 1.1,
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
    soundtrack.loop = true;
    soundtrack.play();
    
    $("#pause").on("click", function(){
        $("#pause").css("visibility", "hidden");
        $("#play").css("visibility", "visible");
        soundtrack.pause();
    });
    $("#play").on("click", function(){
        $("#play").css("visibility", "hidden");
        $("#pause").css("visibility", "visible");
        soundtrack.play();
    });

    $("p").hover(function(){
            $(this).css("background-color", "yellow");
            }, function(){
            $(this).css("background-color", "pink");
        });

    var bomb = document.createElement("audio");
    bomb.setAttribute("src", "assets/bomb.wav");

    // var cheer = document.createElement("audio");
    // bomb.setAttribute("src", "assets/cheer.mp3");

    // var cocked = document.createElement("audio");
    // bomb.setAttribute("src", "assets/gunCock.mp3");

    // var gun_shot = document.createElement("audio");
    // bomb.setAttribute("src", "assets/gun_shot.mp3");
    

        $("#fightBTN").css("visibility", "hidden");
        $(".progress").css("visibility", "hidden");
        $(".play").css("visibility", "hidden");

        function createState(currentState,ctr){
            var stateImage = $("<img>")
                        .attr("src", "assets/images/" + currentState.image)
                        .addClass("imageOfState")
                        .addClass(currentState.side);

            var stateDiv = $("<div>")     
                        .addClass("state col-md-3")
                        .attr("id", ctr)
                        .addClass("ImageContainer")
                        .addClass(currentState.side)
                        .append(stateImage);
                        console.log(stateDiv);
            return stateDiv;
        }

        function resetHealth(){
            for (var i = 0; i<allNations.length; i++){
                allNations[i].gdp = 100;
                allNations[i].attack = allNations[i].Startattack;
            }
        }

        function initializeStates(){
            $("#rowAllies").empty();
            $("#rowAxis").empty();
            $("#rowFight").empty();
            $("#rowAllies").css("opacity", "1");
            $("#rowAxis").css("opacity", "1");
            player1 = -1;
            player2 = -1;
            player1picked = false;
            player2picked = false;
            fightMode = false;

            for (var i = 0; i<allNations.length; i++){
                var testDead = deadNations.indexOf(allNations[i].name);
                if (testDead == -1){
                    console.log(allNations[i].name)

                    $htmlChar=createState(allNations[i],i);
                    $("#row"+allNations[i].side).append($htmlChar);
                }
            }
            console.log("initialized");
        }

            $(".lineup").on("click", ".ImageContainer", function(){
                console.log("CLICKED ON ImageContainer");
                player = $(this).attr("id");  

                if ($(this).hasClass("Allies") == true && player1picked == false){
                    $fighterChar=createState(allNations[player]);
                    $("#rowFight").append($fighterChar);
                    $("#rowAllies").css("opacity", ".3");
                    player1picked = true;
                    player1 = player; 
                    $("#alliesBar").css("visibility", "visible");
                    // cocked.play();
                }

                else if ($(this).hasClass("Axis") == true && player2picked == false){
                    $fighterChar=createState(allNations[player]);
                    $("#rowFight").append($fighterChar);
                    $("#rowAxis").css("opacity", ".3");
                    player2 = player;
                    player2picked = true;
                    $("#axisBar").css("visibility", "visible");
                    // cocked.play();
                }

                if (player1picked == true && player2picked == true){
                    $("#fightBTN").css("visibility", "visible");
                    fightMode=true;
                }
            });
//***********************************************************************
//***********************************************************************
//***********************************************************************
        //WHY DOES THIS NEED TO BE IN MY INITIALIZE SCRIPT ??????
//***********************************************************************
//****The go find happened only on page load. it can be written with a listener 
//$(document).on('click', '.imageContainer', function(){


//};
//***********************************************************************
        $(".buttonDiv").on("click","#fightBTN", function(){
            
            if (fightMode == true){
                bomb.play();
                player1Power = allNations[player1].attack;
                player2Power = allNations[player2].attack;
                allNations[player1].gdp -= player2Power;
                allNations[player2].gdp -= player1Power;
                console.log("hit");
                allNations[player1].attack = allNations[player1].attack * allNations[player1].powerFactor;
                console.log("GDP1: ", allNations[player1].gdp)
                console.log("GDP2: ", allNations[player2].gdp)
                //$("#scorePlayer1").text("Health Allies: "+ allNations[player1].gdp);
                //$("#scorePlayer2").text("Health Axis: "+ allNations[player2].gdp);
                $("#alliesBar").width(allNations[player1].gdp + "%");
                $("#axisBar").width(allNations[player2].gdp + "%");

                if (allNations[player1].gdp <= 0){
                    alert("You Loose");
                    deadNations = [];
                    resetHealth();
                    initializeStates();
                    $("#fightBTN").css("visibility", "hidden");
                }

                else if (allNations[player2].gdp <= 0){
                    alert("You Defeated: "+ allNations[player2].name);
                    deadNations.push((allNations[player2]).name);
                    if(deadNations.length == 4){
                        deadNations = [];
                        resetHealth();
                        alert("VICTORY");
                    }
                    console.log(deadNations);
                    initializeStates();
                    $("#fightBTN").css("visibility", "hidden");
                }
            }
        })
        initializeStates();
})
