console.log("it works");




var bulbs = document.getElementsByClassName("bulb");
var first_bulb = bulbs[0];
first_bulb.style.fill = "white";




// function setup(i){

//     //dimming the previous bulbs
//     //bubl form in range 0~(i-1)
//     for (let j = 0; j < i; j++) {
//         bulbs[j].style.fill = "pink";
//     }

//     //lighting the current bulbs
//     bulbs[i].style.fill = "yellow"

//     //dimming the next bulbs
//     //bubl form in range i~(bulbs.length)
//     for (let j = i+1 ; j < bulbs.length; j++) {
//         bulbs[j].style.fill = "green";
//     }

//     console.log("loop");
// }



function move() { 
    var current_bulb = 0;
    var previous_bulb = 0;
    var id = setInterval(start, 1000);
    function start() {
        if (current_bulb >= previous_bulb) {
            // dimming the previous bulbs
            //bubl form in range 0~(i-1)
            for (let j = 0; j < current_bulb; j++) {
                bulbs[j].style.fill = "pink";
            }

            //lighting the current bulbs
            bulbs[current_bulb].style.fill = "yellow"

            //dimming the next bulbs
            //bubl form in range i~(bulbs.length)
            for (let j = current_bulb+1 ; j < bulbs.length; j++) {
                bulbs[j].style.fill = "green";
            }
            console.log("current_bulb is " + current_bulb);
            previous_bulb = current_bulb;
            current_bulb++;
            if (current_bulb==bulbs.length) {
                previous_bulb = current_bulb ;
                current_bulb--;
                console.log("forward finished !");
                console.log("the value of current : " + current_bulb);
                console.log("the value of prev :" + previous_bulb);
            }
        }
        
        if (current_bulb <= previous_bulb) {
            console.log("backward now");
            // dimming the previous bulbs
            //bubl form in range 0~(i-1)
            for (let j = 0; j < current_bulb; j++) {
                bulbs[j].style.fill = "pink";
            }

            //lighting the current bulbs
            bulbs[current_bulb].style.fill = "yellow"

            //dimming the next bulbs
            //bubl form in range i~(bulbs.length)
            for (let j = current_bulb+1 ; j < bulbs.length; j++) {
                bulbs[j].style.fill = "green";
            }
            console.log("current_bulb is " + current_bulb);
            previous_bulb = current_bulb;
            current_bulb--;
            if (current_bulb==0) {
                previous_bulb = 0 ;
                console.log("backward finished !");
                console.log("the value of current : " + current_bulb);
                console.log("the value of prev :" + previous_bulb);
            }
        }
    
    
  }
}



console.log("done");
