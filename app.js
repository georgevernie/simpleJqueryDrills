
//Used multiple times throughout the code, used to avoid redundent typing.
let userInput = $('#textSub');
let txtBtn = $('#textSubmitBtn');

// Creates a test button and alerts the user when it is clicked.
$('#btnSubmit').click(function () {
    alert("The Test Button Was Clicked!");
    console.log("The Button was successfully clicked.");
});

// Disables the submit button, (enabled by default) if there is nothing in userInput
if(userInput.text() === ''){
    txtBtn.prop('disabled', true);
    console.log("Submit disabled.");
}

//Adds an event listener for a keypress, and checks to see if there is text from the user in the userInput 
userInput.keypress(function () {
        if(userInput.val() !==''){
            txtBtn.prop('disabled', false);
            console.log("Submit enabled.");
        }
    });

txtBtn.click(function () {
    event.preventDefault(); // Prevents the browser from refreshing after the form is submitted.
    //? This is used for css style practice.
    //$("body").after("<div><h2></h2></div>");
    //$("h2").append(userInput.val());
    //callBack();
    
    //These create our ul and li for the later functions.
    $("body").append("<ul></ul>");
    $("ul").append("<li></li>");
    $("ul > li").append(userInput.val());
    
    
    clickBackLi(); // Gives the li a random color when clicked.
    removeLi(); // Removes the list item when double clicked.
});

//Some styling practice.
function callBack(){
$('h2').hover(function(){
    console.log("hovering hovering hovering");
    $(this).css({background: 'blue', 'border-radius': '20px'});
    },
    function(){
    console.log("hovering hovering hovering");
    $(this).css({background: 'red', 'border-radius': '0px'});
    });
}
// Gives the li a random color when clicked.
function clickBackLi(){
    $('li').click(function(){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        $(this).css('color', 'rgb('+ r + ',' + g + ',' + b + ')');
        });
}
// Removes the list item when double clicked.
function removeLi(){
    $('li').dblclick(function(){
        $(this).remove();
    });
}