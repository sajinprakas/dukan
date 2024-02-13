// loading animation

$(document).ready(function() {
	$(window).on("load", function () {
	  $(".loading-block").delay(1000).fadeOut("");
	  $(".loading-block_logo").delay(1000).fadeOut("");
	});
  });
	  
		
		
	/*** Animation on scroll*/
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });


	//Scroll back to top
	
	var progressPath = document.querySelector('.progress-wrap path');
	var pathLength = progressPath.getTotalLength();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
	progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
	var updateProgress = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength / height);
		progressPath.style.strokeDashoffset = progress;
	}
	updateProgress();
	$(window).scroll(updateProgress);	
	var offset = 50;
	var duration = 550;
	jQuery(window).on('scroll', function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.progress-wrap').addClass('active-progress');
		} else {
			jQuery('.progress-wrap').removeClass('active-progress');
		}
	});				
	jQuery('.progress-wrap').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})


	function updateProgressBar(progress, progressBarId) {
        var progressBar = document.getElementById(progressBarId).getElementsByClassName('progress-bar-inner')[0];
        var progressText = document.getElementById(progressBarId).getElementsByClassName('progress-text')[0];

        progressBar.style.width = progress + '%';
        progressText.innerHTML = progress + '%';
    }

    function simulateProgress(totalProgress, progressBarId) {
        var interval = 60; // milliseconds
        var currentProgress = 0;

        var progressInterval = setInterval(function () {
            updateProgressBar(currentProgress, progressBarId);

            if (currentProgress >= totalProgress) {
                clearInterval(progressInterval);
            } else {
                currentProgress++;
            }
        }, interval);
    }

    simulateProgress(100, 'progress-bar1');
    simulateProgress(100, 'progress-bar2');
    simulateProgress(100, 'progress-bar3');
	simulateProgress(100, 'progress-bar4');












	var navigation = new TimelineLite({paused:true, reversed:true});
	navigation.to("#navigationWrap", 0.5, {opacity: 1, display: 'block'})
			.to(".navbar", 0.3, {opacity: 0}, "-=0.1")
			.to(".close", 0.3, {display: "block", opacity: 1}, "-=0.1")
			.from(".menu", 0.5, {opacity: 0, y: 30})
			.from(".social", 0.5, {opacity: 0});

	$(".navbar, .close").click (function() {
	navigation.reversed() ? navigation.play() : navigation.reverse();
	})