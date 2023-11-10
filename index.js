function getUsersName(){

    const userName1 = document.getElementById("input1").value;
    const userName2 = document.getElementById("input2").value;

    localStorage.setItem("Player_01", userName1);
    localStorage.setItem("Player_02", userName2);

    window.location = "/game.html";
    
    return;

}