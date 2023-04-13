
// frente das cartas
var a1 =document.getElementById("a1")
var a2 =document.getElementById("a2")
var a3 =document.getElementById("a3")
var a4 =document.getElementById("a4")
var a5 =document.getElementById("a5")
var a6 =document.getElementById("a6")
var a7 =document.getElementById("a7")
var a8 =document.getElementById("a8")
var a9 =document.getElementById("a9")
var a10 =document.getElementById("a10")

// verso das cartas
var b1 =document.getElementById("b1")
var b2 =document.getElementById("b2")
var b3 =document.getElementById("b3")
var b4 =document.getElementById("b4")
var b5 =document.getElementById("b5")
var b6 =document.getElementById("b6")
var b7 =document.getElementById("b7")
var b8 =document.getElementById("b8")
var b9 =document.getElementById("b9")
var b10 =document.getElementById("b10")

//  ==================== vira cartas ======================= 
b1.addEventListener("click", function() {
    a1.style.display = "block";
    b1.style.display  = "none";
    handleClick(1)
  });

  b2.addEventListener("click", function() {
    a2.style.display = "block";
    b2.style.display  = "none";
    handleClick(2)
  });

  b3.addEventListener("click", function() {
    a3.style.display = "block";
    b3.style.display  = "none";
    handleClick(3)
  });

  b4.addEventListener("click", function() {
    a4.style.display = "block";
    b4.style.display  = "none";
    handleClick(4)
  });

  b5.addEventListener("click", function() {
    a5.style.display = "block";
    b5.style.display  = "none";
    handleClick(5)
  });

  b6.addEventListener("click", function() {
    a6.style.display = "block";
    b6.style.display  = "none";
    handleClick(6)
  });

  b7.addEventListener("click", function() {
    a7.style.display = "block";
    b7.style.display  = "none";
    handleClick(7)
  });

  b8.addEventListener("click", function() {
    a8.style.display = "block";
    b8.style.display  = "none";
    handleClick(8)
  });

  b9.addEventListener("click", function() {
    a9.style.display = "block";
    b9.style.display  = "none";
    handleClick(9)
  });

  b10.addEventListener("click", function() {
    a10.style.display = "block";
    b10.style.display  = "none";
    handleClick(10)
  });

var click1 = 0;
var click2 = 0

function handleClick(click) {
    if (click1 === 0) {
        click1 = click
    } else if (click2 === 0) {
        click2 = click

        if ((click1 + click2) === 11) {
            alert("Acertou")
            click1 = 0;
            click2 = 0;
        } else {
            alert("Errou")
            click1 = 0;
            click2 = 0;

            a1.addEventListener("click", function() {
                b1.style.display = "block";
                a1.style.display  = "none";
              });
            
            a2.addEventListener("click", function() {
                b2.style.display = "block";
                a2.style.display  = "none";
              });
            
            a3.addEventListener("click", function() {
                b3.style.display = "block";
                a3.style.display  = "none";
              });
            
            a4.addEventListener("click", function() {
                b4.style.display = "block";
                a4.style.display  = "none";
              });
            
            a5.addEventListener("click", function() {
                b5.style.display = "block";
                a5.style.display  = "none";
              });
            
            a6.addEventListener("click", function() {
                b6.style.display = "block";
                a6.style.display  = "none";
              });
            
            a7.addEventListener("click", function() {
                b7.style.display = "block";
                a7.style.display  = "none";
              });
            
            a8.addEventListener("click", function() {
                b8.style.display = "block";
                a8.style.display  = "none";
              });
            
            a9.addEventListener("click", function() {
                b9.style.display = "block";
                a9.style.display  = "none";
              });
            
            a10.addEventListener("click", function() {
                b10.style.display = "block";
                a10.style.display  = "none";
              });
                

            
        }
    } 
}