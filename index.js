let hours = 0;
    let x = 0, y = 0, z = 0;
    let totalSeconds = 0;
    let countdownTimer;
    let remainingSeconds = 0;
    let initialHours = 0;
    let increaseHoursInterval;
    let decreaseHoursInterval;
    let increaseMinutesInterval;
    let decreaseMinutesInterval;
    let increaseSecondsInterval;
    let decreaseSecondsInterval;
    let remainingTotalSeconds = 0;
    document.getElementById("up1").addEventListener("mousedown", function() {
      increaseHoursInterval = setInterval(function() {
        document.getElementById("start").style.display = "inline-block";
        hours++;
        if (hours === 24) {
          hours = 0;
        }
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        x = hours;
      }, 50);
    },);

    document.getElementById("up1").addEventListener("mouseup", function() {
      document.getElementById("start").style.display = "inline-block";
      clearInterval(increaseHoursInterval);
    });

    document.getElementById("down1").addEventListener("mousedown", function() {
      document.getElementById("start").style.display = "inline-block";
      decreaseHoursInterval = setInterval(function() {
        if (hours === 0) {
          hours = 24;
        }
        hours--;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        x = hours;
      }, 50);
    });

    document.getElementById("down1").addEventListener("mouseup", function() {
      clearInterval(decreaseHoursInterval);
      document.getElementById("start").style.display = "inline-block";
    });

    let minutes = 0;

    document.getElementById("up2").addEventListener("mousedown", function() {
      document.getElementById("start").style.display = "inline-block";
      increaseMinutesInterval = setInterval(function() {
        minutes++;
        if (minutes === 60) {
          minutes = 0;
        }
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        y = minutes;
      }, 50);
    });

    document.getElementById("up2").addEventListener("mouseup", function() {
      document.getElementById("start").style.display = "inline-block";
      clearInterval(increaseMinutesInterval);
    });

    document.getElementById("down2").addEventListener("mousedown", function() {
      document.getElementById("start").style.display = "inline-block";
      decreaseMinutesInterval = setInterval(function() {
        if (minutes === 0) {
          minutes = 60;
        }
        minutes--;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        y = minutes;
      }, 50);
    });

    document.getElementById("down2").addEventListener("mouseup", function() {
      document.getElementById("start").style.display = "inline-block";
      clearInterval(decreaseMinutesInterval);
    });

    let seconds = 0;

    document.getElementById("up3").addEventListener("mousedown", function() {
      document.getElementById("start").style.display = "inline-block";
      increaseSecondsInterval = setInterval(function() {
        seconds++;
        if (seconds === 60) {
          seconds = 0;
        }
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
        z = seconds;
      }, 50);
    });

    document.getElementById("up3").addEventListener("mouseup", function() {
      document.getElementById("start").style.display = "inline-block";
      clearInterval(increaseSecondsInterval);
    });

    document.getElementById("down3").addEventListener("mousedown", function() {
      document.getElementById("start").style.display = "inline-block";
      decreaseSecondsInterval = setInterval(function() {
        if (seconds === 0) {
          seconds = 60;
        }
        seconds--;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
        z = seconds;
      }, 50);
    });

    document.getElementById("down3").addEventListener("mouseup", function() {
      document.getElementById("start").style.display = "inline-block";
      clearInterval(decreaseSecondsInterval);
    });

    function speakCountdown() {
      let utterance = new SpeechSynthesisUtterance("The countdown is complete");
      speechSynthesis.speak(utterance);
    }

    function startCountdown() {
      totalSeconds = x * 3600 + y * 60 + z;
      
      countdownTimer = setInterval(function() {
        let displayHours = Math.floor(totalSeconds / 3600);
        remainingSeconds = totalSeconds % 3600;
        let displayMinutes = Math.floor(remainingSeconds / 60);
        let displaySeconds = remainingSeconds % 60;
        initialHours = x;
        displayHours = displayHours < 10 ? "0" + displayHours : displayHours;
        displayMinutes = displayMinutes < 10 ? "0" + displayMinutes : displayMinutes;
        displaySeconds = displaySeconds < 10 ? "0" + displaySeconds : displaySeconds;
        
        document.getElementById("hours").innerHTML = displayHours;
        document.getElementById("minutes").innerHTML = displayMinutes;
        document.getElementById("seconds").innerHTML = displaySeconds;

        if (totalSeconds <= 0) {
          document.getElementById("text").innerHTML = "Countdown Complete";
          document.getElementById("pause").style.display = "none";
        }
        
        if (totalSeconds <= -1) {
          clearInterval(countdownTimer);
          speakCountdown();
          location.reload();
        }

        totalSeconds--;
      }, 1000);

      document.getElementById("pause").style.display = "inline-block";
      document.getElementById("continue").style.display = "inline-block";
      document.getElementById("reset").style.display = "inline-block";
    }

    let pauseButton = document.getElementById("pause");
    let continueButton = document.getElementById("continue");
    
    document.getElementById("start").onclick = function() {
      if(hours === 0 && minutes === 0 && seconds ===0 ){
        location.reload();
        
    }else{
      startCountdown();
      continueButton.style.display = "none";
      document.getElementById("start").style.display = "none";
      document.getElementById("up1").style.display = "none";
      document.getElementById("up2").style.display = "none";
      document.getElementById("up3").style.display = "none";
      document.getElementById("down1").style.display = "none";
      document.getElementById("down2").style.display = "none";
      document.getElementById("down3").style.display = "none";
      document.getElementById("text").innerHTML = "Counting...";
    };};

    document.getElementById("pause").onclick = function() {
      pausedHours = x;
      document.getElementById("pause").style.display = "none";
      clearInterval(countdownTimer);
       remainingTotalSeconds = totalSeconds;
      document.getElementById("text").innerHTML = "Paused";
      document.getElementById("continue").style.display = "inline-block";
    };

    document.getElementById("reset").onclick = function() {
      clearInterval(countdownTimer);
      location.reload();
    };

    document.getElementById("continue").onclick = function() {
      continueCountdown();
      document.getElementById("continue").style.display = "none";
      document.getElementById("text").innerHTML = "Counting...";
      document.getElementById("start").style.display = "none";
      document.getElementById("up1").style.display = "none";
      document.getElementById("up2").style.display = "none";
      document.getElementById("up3").style.display = "none";
      document.getElementById("down1").style.display = "none";
      document.getElementById("down2").style.display = "none";
      document.getElementById("down3").style.display = "none";
    };
  
  

  function continueCountdown() {
    let newTotalSeconds = remainingTotalSeconds + 1;
    totalSeconds = newTotalSeconds;
   
    countdownTimer = setInterval(function() {
      let displayHours = Math.floor(totalSeconds / 3600);
      remainingSeconds = totalSeconds % 3600;
      let displayMinutes = Math.floor(remainingSeconds / 60);
      let displaySeconds = remainingSeconds % 60;
  
      displayHours = displayHours < 10 ? "0" + displayHours : displayHours;
      displayMinutes = displayMinutes < 10 ? "0" + displayMinutes : displayMinutes;
      displaySeconds = displaySeconds < 10 ? "0" + displaySeconds : displaySeconds;
  
      document.getElementById("hours").innerHTML = displayHours;
      document.getElementById("minutes").innerHTML = displayMinutes;
      document.getElementById("seconds").innerHTML = displaySeconds;
  
      if (totalSeconds <= 0) {
        document.getElementById("text").innerHTML = "Countdown Complete";
        document.getElementById("pause").style.display = "none";
      }
  
      if (totalSeconds <= -1) {
        clearInterval(countdownTimer);
        speakCountdown();
        location.reload();
      }
  
      totalSeconds--;
    }, 1000);
  
    document.getElementById("pause").style.display = "inline-block";
    document.getElementById("continue").style.display = "inline-block";
    document.getElementById("reset").style.display = "inline-block";
  }




  