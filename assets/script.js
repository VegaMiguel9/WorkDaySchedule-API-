$(document).ready(function () {
    // listen for save button click
    $('.saveBtn').on('click', function () {
        // get nearby value
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id')
        console.log("this", time)
        console.log("value", value)
        // save in localStorage
        localStorage.setItem(time, value);
        // Show notification that item was saved to localStorage by adding class 'show'

        // Timeout to remove 'show' class after 5 seconds
        setTimeout(function () {
            $('.notification').removeClass('show');
        }, 5000);
    });

    function hourUpdater() {
        // get current number of hours (preferably with moment.js)
        var currentDay = document.querySelector("#currentDay");
        setInterval(function(){
        currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
        }, 100)
        
        var eachFunction = function() {
            var blockHour = parseInt($(this).attr('data-hour'))
            console.log(blockHour)

            if (blockHour < currentDay) {
                $(this).addClass('past');
            } else if (blockHour === currentDay) {
                $(this).removeClass('past');
                $(this).addclass('present');
            } else{
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addclass('future');
            }
        }

        var timeBlock = $('.time-block').each(eachFunction)
        console.log("timeBlock", timeBlock)
    }

    hourUpdater();

    // load any saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    ///need to repeat line 21 for all the other hours


    // display current day on page
    $('#currentDay').text(moment().format('dddd, MMMM, Do'));
});