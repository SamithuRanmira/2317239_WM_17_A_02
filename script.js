function getUsersName(){

    // get values from inputs

    const userName1 = document.getElementById("input1").value;
    const userName2 = document.getElementById("input2").value;

    // store input values in localstorage
    
    localStorage.setItem("Player_01", userName1);
    localStorage.setItem("Player_02", userName2);
    
    return;

}