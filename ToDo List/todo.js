
// To Do List
var container3 = document.getElementsByClassName('container-3')[0];
var i = 0;

function random_color(){
    var random_colors = ['#fffff','rgb(206, 181, 167)','rgb(161, 124, 107)','rgb(91, 123, 122)'];

    if (i > random_colors.length - 1){
        i = 0;
    }
    return random_color[i++];
}

function submitToDo(){
    var to_do = document.getElementById("to-do").value;
    var node0 = document.createElement("div")
    var node1 = document.createElement("input");
    var node2 = document.createElement ("p");

    node1.type = "checkbox";

    node2.innerHTML = to_do;

    node0.appendChild(node1);
    node0.appendChild(node2);

    container3.insertAdjacentElement("beforeend",node0);

    node2.style.marginLeft = '15px';
    node0.style.setProperty= ("style','border-radius:15px; padding:5px 5px 5px 5px; color#234a54; margin-top:10px; font-size:5px; align-content:flex-start;")
    node0.backgroundColor = random_color();

    node0.addEventListener("dblclick", function(){
        node0.remove();
    })
}
