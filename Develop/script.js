var currentDay = document.querySelector("#currentDay");
currentDay.textContent = moment().format('LLLL');
var sameDay = moment().format("dddd")
/* Checks to see if its the same day, if it doesnt it clears localStorage. */ 
if (sameDay !== localStorage.getItem("day")){
    localStorage.clear();
}

localStorage.setItem("day", sameDay)

var hours = [];
var saveButton = document.querySelectorAll(".saveBtn");
/* Setting each hour to a key and assigning it to a variable */
var firstHour =  localStorage.getItem("9") || "";
var secondHour =  localStorage.getItem("10") || "";
var thirdHour =  localStorage.getItem("11") || "";
var fourthHour =  localStorage.getItem("12") || "";
var fifthHour =  localStorage.getItem("13") || "";
var sixthHour =  localStorage.getItem("14") || "";
var seventhHour =  localStorage.getItem("15") || "";
var eigthHour =  localStorage.getItem("16") || "";
var ninthHour =  localStorage.getItem("17") || "";
var currentHour = parseInt(moment().format('H HH'));
console.log(currentHour)
/* Putting values of hours back onto page*/
$("#firstInput").text(firstHour);
$("#secondInput").text(secondHour);
$("#thirdInput").text(thirdHour);
$("#fourthInput").text(fourthHour);
$("#fifthInput").text(fifthHour);
$("#sixthInput").text(sixthHour);
$("#seventhInput").text(seventhHour);
$("#eigthInput").text(eigthHour);
$("#ninthInput").text(ninthHour)

$(saveButton).on("click", function(e){
    e.preventDefault()
    var hour = $(this).parents("section").attr("data-hour");
    var text = $(this).parent("div").siblings("textarea").val()
    localStorage.setItem(hour, text)
})

$('section').each(function() { // Checks each section for a data-hour and creates and 
    // assigns it into highlightHour variable.
    var hightlightHour = parseInt($(this).attr("data-hour"));
    if (hightlightHour == currentHour) {
        $(this).children().children().children().addClass("present")
        $(this).children().children().addClass("present")
    } else if (hightlightHour < currentHour) { // Conditional for before current hour.
        $(this).children().children().siblings().addClass("past")
        $(this).children().children().children().addClass("past")
    } else { // Conditional for after current hour.
        $(this).children().children().siblings().addClass("future")
        $(this).children().children().children().addClass("future")
    }
})