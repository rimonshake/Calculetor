var display = document.getElementById("display");
var btns = document.querySelectorAll(".btns button");


for(i = 0; i<btns.length; i++){
    var button = btns[i]

    button.addEventListener("click", function(e){
        var text = e.target.innerText;
        
        if(text === "="){
            var name=  eval(display.value);
            display.value=name
        }
        else if(text === "C"){
            display.value = " ";
        }
        else{
            display.value = display.value + text;
        }
        
    })

}