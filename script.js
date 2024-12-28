document
.getElementById("changetextbutton")
.addEventListener("click", function (){
    let paragraph = document.getElementById("myparagraph");
    paragraph.textContent = "the paragraph is changed"
});

document
.getElementById("highlightfirstcity")
.addEventListener("click", function() {
    let citieslist = document.getElementById("citieslist")
    citieslist.firstElementChild.classList.add("highlight")
})

document
.getElementById("changeorder")
.addEventListener("click", function(){
    let changecoffeetype = document.getElementById("coffeetype")
    changecoffeetype.textContent = "espresso"
    changecoffeetype.style.backgroundColor = "green"
    changecoffeetype.style.padding = "10px"
    changecoffeetype.style.justifyContent = "center"

})


document
.getElementById("addnewiteams").addEventListener("click", function(){

    let newitem = document.createElement("li")
    newitem.textContent = "jams"
    document.getElementById("shoppinglist").appendChild(newitem)
})

document.getElementById("removelasttask").addEventListener("click", function(){
    let eachtask = document.getElementById("tasklist")
    eachtask.lastElementChild.remove();
})


document.getElementById("tealist").addEventListener("click",function(event){
    if(event.target && event.target.matches("#teaitem")){
        alert("you selected:" + event.target.textContent);
    }
});

document.getElementById("feedbackform").addEventListener("submit",function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackinput").value;
    console.log(feedback);
    document.getElementById("feedbackdisplay").textContent = `feedback is: ${feedback}`;
})


document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("domstatus").textContent="dom fully loaded"
})

document.getElementById("togglehighlight").addEventListener("click",function(){
    let descriptiontext = document.getElementById("descriptiontext");
    descriptiontext.classList.toggle("highlight");
});