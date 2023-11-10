let = user1_Click = 0;
let = user2_Click = 0;

let userMarks_1 = 0;
let userMarks_2 = 0;

choseUser = Math.floor(Math.random() * 2) + 1;

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


window.addEventListener('load', () => {

    const player1 = localStorage.getItem('Player_01');
    const player2 = localStorage.getItem('Player_02');
    

    document.getElementById("userName_1").innerHTML = player1;
    document.getElementById("userName_2").innerHTML = player2;

});

function user_01(){

    number_1 = Math.floor(Math.random()* 6) + 1;
    userMarks_1 = userMarks_1 + number_1;
    document.getElementById("userMarks_1").innerHTML = userMarks_1;
    document.getElementById("num_panel_01").innerHTML = number_1;
    user1_Click = user1_Click + 1;
    user2_Click = 0;
    if (user1_Click === 1){

        document.getElementById("btn_1").disabled = true;
        document.getElementById("btn_2").disabled = false;

    }

    if(userMarks_1 >= 100){

        document.getElementById("btn_1").disabled = true;
        document.getElementById("btn_2").disabled = true;
        document.getElementById("roll").style.display = "block";
        document.getElementById("win1").style.display = "block";

    }
    
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

function user_02(){

    number_2 = Math.floor(Math.random()* 6) + 1;
    userMarks_2 = userMarks_2 + number_2;
    document.getElementById("userMarks_2").innerHTML = userMarks_2;
    document.getElementById("num_panel_02").innerHTML = number_2;
    user2_Click = user2_Click + 1;
    user1_Click = 0;
    if (user2_Click === 1){

        document.getElementById("btn_1").disabled = false;
        document.getElementById("btn_2").disabled = true;
        
    }

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

function n1_1(){

    reset_1();
    document.getElementById("n5_1").style.background = "black";

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
    document.getElementById("n5_2").style.background = "black";

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