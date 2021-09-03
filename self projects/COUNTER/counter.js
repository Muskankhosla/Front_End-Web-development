const ct = document.querySelectorAll(".counter");
ct.forEach(counter => {
    counter.innerText = '0'
    const target = +counter.getAttribute('data-target');
    const interval = target / 100;
     
    const updateCounter = () => {
      const value = +counter.innerText;
      if (value < target) {
        counter.innerText = Math.ceil(value + interval);
        
        setTimeout(() => {
          updateCounter()
        }, 20);
      }
    }
  
    updateCounter();
   
  });
  
   
   
