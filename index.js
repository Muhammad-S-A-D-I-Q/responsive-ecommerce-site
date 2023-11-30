var images =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITy0mPdfTtES6P-oSNkYmdHwhcWzIGU2qArWC69GHjF0qWp_lop4n3o193enz4E4DZUo&usqp=CAU"
,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTTJ7t-tPY3-PulTOcFrxubg6iPO5b-bQvE9U5V-lquKy7eY5_DBLq5XI_9f6WuP6Isc&usqp=CAU"
,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW36StNfL1Xhqzia11btQtvEqc8dedUJ-38dQKny-BC85oNRYmEXN6G7sJRZYl5oIcJdk&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_QAkWQZllX-5QH7xpB6mLJrmjSD48pLw37DC1ox67Et57aykp1S32CBQ3pBH_m5ggeM&usqp=CAU"]

var sliderImg = document.getElementById("img");
var index = 0;
// console.log(sliderImg);

function left() {

  if (index === images.length - 1) {
    index = 0;
    sliderImg.src = images[index];
  } else {
    index += 1;
    sliderImg.src = images[index];
  }
}
function right() {

    if (index === 0) {
      index = images.length - 1;
      sliderImg.src = images[index];
    } else {
      index -= 1;
      sliderImg.src = images[index];
    }
  }
  
/////form


function sub(){
    var names = document.getElementById("fname");
    var namess = document.getElementById("lname");
    var namesss = document.getElementById("subject");
    if(names.value === ""){
           alert("Enter your name !");
    }else if (namess.value === ""){
        alert("Enter your last name !");
    }else if (namesss.value === ""){
        alert("Enter your Subject !");
    }else{
        console.log(names.value);
        console.log(namess.value);
        console.log(namesss.value);
    }

}






