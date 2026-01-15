 let minutes = 60; 
  const hourTimerEl = document.getElementById("hourTimer");

  const hourInterval = setInterval(() => {
    minutes--; 
    hourTimerEl.textContent = minutes;

    if (minutes === 30) {
      alert("Залишилось менше половини часу!");
    }

    if (minutes === 0) {
      clearInterval(hourInterval);
      alert("Час вичерпано!");
    }

  }, 60 * 1000); 


   const secondTimerEl = document.getElementById("secondTimer");
  const startBtn = document.getElementById("startBtn");
  const animBox = document.getElementById("animBox");

  startBtn.addEventListener("click", () => {
    startBtn.disabled = true; 
    let time = 30 * 1000; 

    const interval = setInterval(() => {
      time -= 10; // 
      let displayTime = (time / 1000).toFixed(2);
      secondTimerEl.textContent = displayTime;

      if (time <= 10000) { 
        animBox.style.background = "orange"; 
      }

      if (time <= 0) {
        clearInterval(interval);
        secondTimerEl.textContent = "0.00";
        startBtn.disabled = false; 
        animBox.style.background = "blue";
        alert("Час вичерпано!");
      }
    }, 10); 
  });