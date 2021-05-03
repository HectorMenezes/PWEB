function upper(){
    var checkupper = document.getElementById("up");
    var checklower = document.getElementById("lower");

    if(checklower.checked) checklower.checked = false;

    var text = document.getElementById("text");
    
    if(checkupper.checked) text.value = text.value.toUpperCase(); 
}

function lower(){
    var checkupper = document.getElementById("up");
    var checklower = document.getElementById("lower");

    if(checkupper.checked) checkupper.checked = false;

    var text = document.getElementById("text");
    if(checklower.checked) text.value = text.value.toLowerCase();
    
}