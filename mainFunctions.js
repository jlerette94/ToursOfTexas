
function navBtn(fileLoc){
    window.location.assign(fileLoc);
    } 

function openContact() {
    myWindow = window.open("Contact.html", "Contact Us", "_blank","width=400,height=200");
    }

function openContact2() {
    myWindow = window.open("../Contact.html", "Contact Us", "_blank","width=400,height=200");
}

function closeWin() {
    window.close();
    }

function emailCheck(){
    var par1 = document.getElementById("email1").value;
    var par2 = document.getElementById("email2").value;
    if (par1 != "" && par2 != "") {
        document.getElementById("subFrame").style.visibility = "visable";
    }
    else{
        document.getElementById("subFrame").style.visibility = "hidden";
}
}

function return2Home(){
    window.close();
    window.open("Home.html", "Tours of Texas", "_blank");
}

function emailCheck2() {
    var par1 = document.getElementById("email1").value;
    var par2 = document.getElementById("email2").value;

    if (par1 === "" || par2 === "") {
        alert("Please enter both email addresses.");
    } else if (par1 !== par2) {
        alert("Emails do NOT match.");
    } else {
        document.getElementById("contactForm").submit();
        window.close();
    }
}