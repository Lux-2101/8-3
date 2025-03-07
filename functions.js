
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) 
{
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

// Total duration in seconds for 2 years
var totalSeconds = 2 * 365 * 24 * 60 * 60; // 2 years in seconds

function updateTimer() {
    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(totalSeconds / (3600 * 24));
    var hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    // Format the time values to be two digits
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    // Display the result
    var result = "<span class=\"digit\">" + days + "</span> ngày <span class=\"digit\">" + hours + "</span> giờ <span class=\"digit\">" + minutes + "</span> phút <span class=\"digit\">" + seconds + "</span> giây";
    $("#clock").html(result);

    // Decrease the total seconds
    if (totalSeconds > 0) {
        totalSeconds--;
    } else {
        clearInterval(timerInterval); // Stop the timer when it reaches zero
        $("#clock").html("<span class=\"digit\">00</span> ngày <span class=\"digit\">00</span> giờ <span class=\"digit\">00</span> phút <span class=\"digit\">00</span> giây");
    }
}

// Call updateTimer every second
var timerInterval = setInterval(updateTimer, 1000);

// Initial call to display the timer immediately
updateTimer();
