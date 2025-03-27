(() => {
  const collected = new Set();
  let countNoNew = 0;
  let lastCollectedSize = 0;
  
  const scrollAndCollect = () => {
    // Collect names from the desired <strong> elements.
    const nameElements = document.querySelectorAll('strong[data-qa="member_name"]');
    nameElements.forEach(el => {
      collected.add(el.textContent.trim());
    });
    
    // Scroll the last name element into view to load more members.
    if (nameElements.length > 0) {
      const lastElem = nameElements[nameElements.length - 1];
      lastElem.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    
    // Check if new names were added.
    if (collected.size === lastCollectedSize) {
      countNoNew++;
    } else {
      lastCollectedSize = collected.size;
      countNoNew = 0;
    }
    
    // If no new names have been added after a few cycles, stop.
    if (countNoNew >= 3) {
      clearInterval(intervalId);
      console.log("Collected names (" + collected.size + "):", Array.from(collected));
    }
  };
  
  const intervalId = setInterval(scrollAndCollect, 500);
})();
