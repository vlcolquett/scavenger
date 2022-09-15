function startRedirect(){
    //alert("Hello Again");
    //else alert("wronnnnng")
    q1 = document.getElementById("q1").value
    console.log(q1)
    if (q1 == "pinching tails and sucking heads"){
        //document.getElementById("1").style.display = "none";
        location.replace("https://turing.cs.olemiss.edu/~vlcolque/scavenger/clue1.html");
        //welcome and picture of magnolia tree
    }else {
        alert("hmmm let's try again")
    }
}

function reappear(){
    document.getElementById("reappear").style.display = "inline"
}

function dragAndDrop(){
    div11 = document.getElementById("div11").innerHTML.toString()
    div12 = document.getElementById("div12").innerHTML.toString()
    div13 = document.getElementById("div13").innerHTML.toString()
    div14 = document.getElementById("div14").innerHTML.toString()
    div15 = document.getElementById("div15").innerHTML.toString()
    div16 = document.getElementById("div16").innerHTML.toString()
    div17 = document.getElementById("div17").innerHTML.toString()
    div18 = document.getElementById("div18").innerHTML.toString()
    div19 = document.getElementById("div19").innerHTML.toString()
    div20 = document.getElementById("div20").innerHTML.toString()

    div1 = '<img src="media/toy_story.jpg" draggable="true" ondragstart="drag(event)" id="drag1" width="88" height="31">'
    div2 = '<img src="media/alien.webp" draggable="true" ondragstart="drag(event)" id="drag2" width="88" height="31">'
    div3 = '<img src="media/terminator.jpeg" draggable="true" ondragstart="drag(event)" id="drag3" width="88" height="31">'
    div4 = '<img src="media/the_shining.jpg" draggable="true" ondragstart="drag(event)" id="drag4" width="88" height="31">'
    div5 = '<img src="media/breaking_bad.webp" draggable="true" ondragstart="drag(event)" id="drag5" width="88" height="31">'
    div6 = '<img src="media/dark_knight.jpg" draggable="true" ondragstart="drag(event)" id="drag6" width="88" height="31">'
    div7 = '<img src="media/pulp_fiction.jpeg" draggable="true" ondragstart="drag(event)" id="drag7" width="88" height="31">'
    div8 = '<img src="media/jaws.jpg" draggable="true" ondragstart="drag(event)" id="drag8" width="88" height="31">'
    div9 = '<img src="media/hobbit.jpg" draggable="true" ondragstart="drag(event)" id="drag9" width="88" height="31">'
    div10 = '<img src="media/potc.jpeg" draggable="true" ondragstart="drag(event)" id="drag10" width="88" height="31">'
    console.log(div11)
    console.log(div1)
    if(div11 == div1 && div12 == div3 && div13 == div8 && div14 == div5 && div15 ==
        div7 && div16 == div10 && div17 == div9 && div18 == div4 && div19 == div6 && div20 == div2){
            location.replace("https://turing.cs.olemiss.edu/~vlcolque/scavenger/6045.html")
    }else{
        alert("seems like you haven't figured it out yet")
    }
}

function releaseYears(){
    b1 = document.getElementById("b1").value
    b2 = document.getElementById("b2").value
    b3 = document.getElementById("b3").value 
    b4 = document.getElementById("b4").value
    b5 = document.getElementById("b5").value 
    b6 = document.getElementById("b6").value
    b7 = document.getElementById("b7").value
    b8 = document.getElementById("b8").value
    b9 = document.getElementById("b9").value
    b10 = document.getElementById("b10").value

    if(b1 == "95" && b2 == "84" && b3 == "75" && b4 == "08" && b5 == "94" && b6 == "03" && b7 == "12" && b8 == "80" && b9 == "08" && b10 == "86"){
        location.replace("file:///C:/Users/vlcol/OneDrive/Desktop/scavenger/clue8.html")
    }else{
        alert("whomp whomp, try againnnn")
    }
}

function bricks(){
    brickGuess = document.getElementById("brick").value
    ki = brickGuess.includes("k")
    ei = brickGuess.includes("e")
    ni1 = brickGuess.includes("n")
    oi = brickGuess.includes("o")
    if (ki && ei && ni1 && oi){
        var word; 
        var kennon="kennon"; 
        word=prompt('Well, you got the letters... maybe unscramble them for the next location: '); 
        if (word.toLowerCase()==kennon) {
            alert('What are you waiting for? The stars to come out?! Get Going!'); 
        }else { alert("Let's try that again..."); 
        } 
    }else{
        alert("you are not correct")
    }
}