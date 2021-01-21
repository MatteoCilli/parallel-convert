$(".alternate-world").click(function() {
    $(".alternate-world").removeClass("active");
    $(".base-world-date").text("");
    $(this).addClass("active");
});



function getDate() {

    // get chosen date
    var chosenDateValue = $("#chosenDateID").val();
    var chosenDate = new Date(chosenDateValue)


    // take which one is active
    if ($('#A').hasClass('active')) {
        // since 1.1.1970
        var chosenDateMs = chosenDate.getTime();
        var daysInA = Math.floor(chosenDateMs / (24 * 60 * 60 * 1000));

        // mod6 [since a week is 6 days] of [days since 1.1.1970 + 4 (since back then it was thursday)]
        var remainderDays = (daysInA + 4) % 6;

        // switch for the week day, Saturday not welcome
        var weekday;
        switch (remainderDays) {
            case 0:
                weekday = "Sunday";
                break;
            case 1:
                weekday = "Monday";
                break;
            case 2:
                weekday = "Tuesday";
                break;
            case 3:
                weekday = "Wednesday";
                break;
            case 4:
                weekday = "Thursday";
                break;
            case 5:
                weekday = "Friday";
                break;
        }

        // final message
        console.log(weekday + " " + chosenDate.toLocaleDateString("en-GB"));
        var output = weekday + " " + chosenDate.toLocaleDateString("en-GB");

    } else if ($('#B').hasClass('active')) {
        // since 1.1.1970
        var chosenDateMs = chosenDate.getTime();
        var chosenDateYear = chosenDate.getFullYear(); //
        var chosenDateMonth = (chosenDate.getMonth()); //

        var daysInA = Math.floor(chosenDateMs / (24 * 60 * 60 * 1000));
        var leapYears = 0;

        // mod365 [many years gone...] of [days since 1.1.1970), taking 366 into the firefight]
        var remainderDays = (daysInA % 365) - leapYears;


        var monthsPassed;
        if (chosenDate.getDate() > 15) {
            monthsPassed = (12 * (chosenDateYear - 1970)) + chosenDateMonth + 1;
        } else {
            monthsPassed = (12 * (chosenDateYear - 1970)) + chosenDateMonth;
        }

        var shift = monthsPassed % 7;
        var remainderDays = chosenDate.getDay() - shift;

        var weekday;
        switch (remainderDays) {
            case -6:
                weekday = "Monday";
                break;
            case -5:
                weekday = "Tuesday";
                break;
            case -4:
                weekday = "Wednesday";
                break;
            case -3:
                weekday = "Thursday";
                break;
            case -2:
                weekday = "Friday";
                break;
            case -1:
                weekday = "Saturday";
                break;
            case 0:
                weekday = "Sunday";
                break;
            case 1:
                weekday = "Monday";
                break;
            case 2:
                weekday = "Tuesday";
                break;
            case 3:
                weekday = "Wednesday";
                break;
            case 4:
                weekday = "Thursday";
                break;
            case 5:
                weekday = "Friday";
                break;
            case 6:
                weekday = "Saturday";
                break;
        }

        // final message
        if (chosenDate.getDate() != 15) {
            console.log(weekday + " " + chosenDate.toLocaleDateString("en-GB"));
        } else {
            console.log("There's no 15 in this world!");
        }

        var output = weekday + " " + chosenDate.toLocaleDateString("en-GB");

    } else if ($('#C').hasClass('active')) {

        // since 1.1.1970
        var chosenDateMs = chosenDate.getTime();
        var chosenDateYear = chosenDate.getFullYear(); //
        var chosenDateMonth = (chosenDate.getMonth()); //

        var daysInA = Math.floor(chosenDateMs / (24 * 60 * 60 * 1000));
        var leapYears = 0;

        var remainderDays = (daysInA % 365) - leapYears;

        var lbj;
        if (chosenDate.getDate() > 15) {
            lbj = (12 * (chosenDateYear - 1970)) + chosenDateMonth + 1;
        } else {
            lbj = (12 * (chosenDateYear - 1970)) + chosenDateMonth;
        }

        var shift = lbj % 6;
        var remainderDays = ((daysInA + 4) % 6) - shift;

        var weekday;
        switch (remainderDays) {
            case -5:
                weekday = "Monday";
                break;
            case -4:
                weekday = "Tuesday";
                break;
            case -3:
                weekday = "Wednesday";
                break;
            case -2:
                weekday = "Thursday";
                break;
            case -1:
                weekday = "Friday";
                break;
            case 0:
                weekday = "Sunday";
                break;
            case 1:
                weekday = "Monday";
                break;
            case 2:
                weekday = "Tuesday";
                break;
            case 3:
                weekday = "Wednesday";
                break;
            case 4:
                weekday = "Thursday";
                break;
            case 5:
                weekday = "Friday";
                break;
        }

        // final message
        if (chosenDate.getDate() != 15) {
            console.log(weekday + " " + chosenDate.toLocaleDateString("en-GB"));
        } else {
            console.log("There's no 15 in this world!");
        }
        var output = weekday + " " + chosenDate.toLocaleDateString("en-GB");
    }

    var package = {};
    package.message = output;

    request = $.ajax({
        url: "/converter.php",
        type: "post",
        data: package,
        success: function(result) {
            console.log("The day is" + output);
        }
    });

    // switch for base world weekday
    var baseWeekday;
    switch (chosenDate.getDay()) {
        case 0:
            baseWeekday = "Sunday";
            break;
        case 1:
            baseWeekday = "Monday";
            break;
        case 2:
            baseWeekday = "Tuesday";
            break;
        case 3:
            baseWeekday = "Wednesday";
            break;
        case 4:
            baseWeekday = "Thursday";
            break;
        case 5:
            baseWeekday = "Friday";
            break;
        case 6:
            baseWeekday = "Saturday";
            break;
    }

    if (chosenDate.getDate() == 15 && !$('#A').hasClass('active')) {
        $(".base-world-date").text("No 15th here!");
    } else if (chosenDate != "Invalid Date" && !$('#A').hasClass('active') && !$('#B').hasClass('active') && !$('#C').hasClass('active')) {
        $("#base-world-text").text("Choose a world!");
    } else if (chosenDate == "Invalid Date" && !$('#A').hasClass('active') && !$('#B').hasClass('active') && !$('#C').hasClass('active')) {
        $(".base-world-date").text("No date chosen");
        $("#base-world-text").text("Choose a world!");
    } else if (chosenDate == "Invalid Date" && (!$('#A').hasClass('active') || !$('#B').hasClass('active') || !$('#C').hasClass('active'))) {
        $(".base-world-date").text("No date chosen");
        $("#base-world-text").text("Choose a date!");
    } else {
        $(".base-world-date").text(output);
        $("#base-world-text").text(baseWeekday);
    }
    /*
    if (chosenDate.getDate() == 15 && !$('#A').hasClass('active')) {
        $(".base-world-date").text("No 15th here!");
    } else if (chosenDate == "Invalid Date" || !$('#A').hasClass('active') && !$('#B').hasClass('active') && !$('#C').hasClass('active')) {
        $(".base-world-date").text("No date chosen");
        $("#base-world-text").text("Choose a world!");
    } else if (chosenDate == "Invalid Date" && !$('#A').hasClass('active') || !$('#B').hasClass('active') || !$('#C').hasClass('active')) {
        $(".base-world-date").text("No date chosen");
        $("#base-world-text").text("Choose a date!");
    } else {
        $(".base-world-date").text(output);
    }
    */
};