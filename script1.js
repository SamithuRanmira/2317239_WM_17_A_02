let = user1_Click = 0;  //amount of player1 clicked
let = user2_Click = 0;  //amount of player1 clicked

let userMarks_1 = 0;  //total marks of the rolled
let userMarks_2 = 0;  //total marks of the rolled

//chose randomly who is the first roll
choseUser = Math.floor(Math.random() * 2) + 1;

//randomly chosed player button enable and disable another player button
if (choseUser === 1){

    alert("Start with first Player");
    document.getElementById("btn_1").disabled = false;
    document.getElementById("btn_2").disabled = true;

}

else{

    alert("Start with Second Player");
    document.getElementById("btn_1").disabled = true;
    document.getElementById("btn_2").disabled = false;
}

//get players name from localstorage and set values in html tags
window.addEventListener('load', () => {

    const player1 = localStorage.getItem('Player_01');
    const player2 = localStorage.getItem('Player_02');
    

    document.getElementById("userName_1").innerHTML = player1;
    document.getElementById("userName_2").innerHTML = player2;

});

function rollStart1(){

    document.getElementById("dice_01").style.display = "none";
    document.getElementById("dice_roll_div_1").style.display = "block";
    let img = document.createElement('img');
    img.src = '/src/dice.gif';
    document.getElementById("dice_roll_div_1").appendChild(img);
    img.classList.add('dice_roll_1');

    //check 1st player clicked value and gisable first player roll button and enable second player roll button
    if (user1_Click === 1){

        document.getElementById("btn_1").disabled = true;

    }

    setTimeout(() => {

        document.getElementById("dice_01").style.display = "block";
        document.getElementById("dice_roll_div_1").style.display = "none";
        img.remove();

            //set total & dice dots values in html
        document.getElementById("userMarks_1").innerHTML = userMarks_1;
        document.getElementById("num_panel_01").innerHTML = number_1;
        document.getElementById("btn_2").disabled = false;

    
    }, 3400);
    
}

//first player click button function
function user_01(){

    //randomly get the value of dice
    number_1 = Math.floor(Math.random()* 6) + 1;
    //assign total of marka
    userMarks_1 = userMarks_1 + number_1;

    //assign clicked values
    user1_Click = user1_Click + 1;
    user2_Click = 0;

    //call dice cube rolling animation
    rollStart1();

    //check the totla and display the winner
    if(userMarks_1 >= 100){

        //disable players roll buttons
        document.getElementById("btn_1").disabled = true;
        document.getElementById("btn_2").disabled = true;
        //display play again button & winner
        document.getElementById("roll").style.display = "block";
        document.getElementById("win1").style.display = "block";

    }
    
    //randomly genarated values and get similar side of the dots in dice cube
    if (number_1 === 1){

        n1_1();

    }

    else if(number_1 === 2){

        n2_1();

    }

    else if(number_1 === 3){

        n3_1();

    }

    else if(number_1 === 4){

        n4_1();

    }

    else if(number_1 === 5){

        n5_1();

    }

    else{

        n6_1();

    }

}

function rollStart2(){

    document.getElementById("dice_02").style.display = "none";
    document.getElementById("dice_roll_div_2").style.display = "block";
    let img = document.createElement('img');
    img.src = '/src/dice.gif';
    document.getElementById("dice_roll_div_2").appendChild(img);
    img.classList.add('dice_roll_2');

    if (user2_Click === 1){

        document.getElementById("btn_2").disabled = true;

    }

    setTimeout(() => {

        document.getElementById("dice_02").style.display = "block";
        document.getElementById("dice_roll_div_2").style.display = "none";
        img.remove();

            //set total & dice dots values in html
        document.getElementById("userMarks_2").innerHTML = userMarks_2;
        document.getElementById("num_panel_02").innerHTML = number_2;
        document.getElementById("btn_1").disabled = false;
            
    
    }, 3200);

}

function user_02(){

    number_2 = Math.floor(Math.random()* 6) + 1;
    userMarks_2 = userMarks_2 + number_2;

    user2_Click = user2_Click + 1;
    user1_Click = 0;

    rollStart2();

    if(userMarks_2 >= 100){

        document.getElementById("btn_1").disabled = true;
        document.getElementById("btn_2").disabled = true;
        document.getElementById("roll").style.display = "block";
        document.getElementById("win2").style.display = "block";

    }


    if (number_2 === 1){

        n1_2();

    }

    else if(number_2 === 2){

        n2_2();

    }

    else if(number_2 === 3){

        n3_2();

    }

    else if(number_2 === 4){

        n4_2();

    }

    else if(number_2 === 5){

        n5_2();

    }

    else{

        n6_2();

    }

}

//set all dots to white color in 1st dice cube
function reset_1(){

    document.getElementById("n1_1").style.background = "white";
    document.getElementById("n2_1").style.background = "white";
    document.getElementById("n3_1").style.background = "white";
    document.getElementById("n4_1").style.background = "white";
    document.getElementById("n5_1").style.background = "white";
    document.getElementById("n6_1").style.background = "white";
    document.getElementById("n7_1").style.background = "white";
    document.getElementById("n8_1").style.background = "white";
    document.getElementById("n9_1").style.background = "white";
    document.getElementById("n7_1").style.display = "block";
    document.getElementById("n8_1").style.display = "block";
    document.getElementById("n9_1").style.display = "block";

}

//set all dots to white color in 1st dice cube
function reset_2(){

    document.getElementById("n1_2").style.background = "white";
    document.getElementById("n2_2").style.background = "white";
    document.getElementById("n3_2").style.background = "white";
    document.getElementById("n4_2").style.background = "white";
    document.getElementById("n5_2").style.background = "white";
    document.getElementById("n6_2").style.background = "white";
    document.getElementById("n7_2").style.background = "white";
    document.getElementById("n8_2").style.background = "white";
    document.getElementById("n9_2").style.background = "white";
    document.getElementById("n7_2").style.display = "block";
    document.getElementById("n8_2").style.display = "block";
    document.getElementById("n9_2").style.display = "block";

}


//set randomly genarated values similar sides of dots function

function n1_1(){

    reset_1();
    document.getElementById("n5_1").style.background = "red";

}

function n2_1(){

    reset_1();
    document.getElementById("n1_1").style.background = "black";
    document.getElementById("n9_1").style.background = "black";

}

function n3_1(){

    reset_1();
    document.getElementById("n1_1").style.background = "black";
    document.getElementById("n5_1").style.background = "black";
    document.getElementById("n9_1").style.background = "black";

}

function n4_1(){

    reset_1();
    document.getElementById("n1_1").style.background = "black";
    document.getElementById("n3_1").style.background = "black";
    document.getElementById("n7_1").style.background = "black";
    document.getElementById("n9_1").style.background = "black";

}

function n5_1(){

    reset_1();
    document.getElementById("n1_1").style.background = "black";
    document.getElementById("n3_1").style.background = "black";
    document.getElementById("n5_1").style.background = "black";
    document.getElementById("n7_1").style.background = "black";
    document.getElementById("n9_1").style.background = "black";

}

function n6_1(){

    reset_1();
    //disable last 3 of dots to display 6 of dots in dice cude
    document.getElementById("n7_1").style.display = "none";
    document.getElementById("n8_1").style.display = "none";
    document.getElementById("n9_1").style.display = "none";
    document.getElementById("n1_1").style.background = "black";
    document.getElementById("n2_1").style.background = "black";
    document.getElementById("n3_1").style.background = "black";
    document.getElementById("n4_1").style.background = "black";
    document.getElementById("n5_1").style.background = "black";
    document.getElementById("n6_1").style.background = "black";

}

function n1_2(){

    reset_2();
    document.getElementById("n5_2").style.background = "red";

}

function n2_2(){

    reset_2();
    document.getElementById("n1_2").style.background = "black";
    document.getElementById("n9_2").style.background = "black";

}

function n3_2(){

    reset_2();
    document.getElementById("n1_2").style.background = "black";
    document.getElementById("n5_2").style.background = "black";
    document.getElementById("n9_2").style.background = "black";

}

function n4_2(){

    reset_2();
    document.getElementById("n1_2").style.background = "black";
    document.getElementById("n3_2").style.background = "black";
    document.getElementById("n7_2").style.background = "black";
    document.getElementById("n9_2").style.background = "black";

}

function n5_2(){

    reset_2();
    document.getElementById("n1_2").style.background = "black";
    document.getElementById("n3_2").style.background = "black";
    document.getElementById("n5_2").style.background = "black";
    document.getElementById("n7_2").style.background = "black";
    document.getElementById("n9_2").style.background = "black";

}

function n6_2(){

    reset_2();
    document.getElementById("n7_2").style.display = "none";
    document.getElementById("n8_2").style.display = "none";
    document.getElementById("n9_2").style.display = "none";
    document.getElementById("n1_2").style.background = "black";
    document.getElementById("n2_2").style.background = "black";
    document.getElementById("n3_2").style.background = "black";
    document.getElementById("n4_2").style.background = "black";
    document.getElementById("n5_2").style.background = "black";
    document.getElementById("n6_2").style.background = "black";

}

function reloadPage(){

    location.reload();

}