var x;
var y;
var users= {
    Pranav: 1234,
    Manoj: 1234,
    Sahil: 1234
};

function lgin() {
    x=document.getElementById("User1").value;
    y=document.getElementById("User2").value;
    if(x.length>0) {
        if (users.hasOwnProperty(x) === true) {
            if (users[x] == y) {
                document.getElementById("next").action = "success.html";
            }
            else if(users[x]!=y)
                alert("Invalid User or Password!");
        }
        else if (users.hasOwnProperty(x) === false) {
            alert("Invalid User or Password!");
        }
    }
}

function pop() {
    var dis = window.location.search.split("?");
    var disp = dis[1].split("=");
    var l = unescape(disp[1]);
    l="Welcome "+l+" !!!";
    document.getElementById("display").innerHTML = l;
}