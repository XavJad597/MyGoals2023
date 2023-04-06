// Create a close button and append it to each item
var myNodelist = document.getElementsByTagName("LI");
var i ;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode('\u00d7');
    span.className = "close";
    span.innerHTML ='x'
    span.appendChild(txt);
    myNodelist[i].appendChild(span);

}

// click on a close button to hide/remove   the current list item
var closeButton = document.getElementsByClassName('close');
var i;
for (i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
   
   
  }
    }

//add a checked symbol when clicking on a list item 
var list = document.getElementById('myList');
list.addEventListener('click',function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle ('checked');
    }

}, false);

// Create a new list when clicking on Add button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild (t);
    if (inputValue === '') {
       alert("You must write something!") 
     } else {
        document.getElementById ("myList").appendChild(li);
     }
    document.getElementById ("myInput");

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
}


