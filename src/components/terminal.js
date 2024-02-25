function autoType(elementId, typingSpeed, text) {
  let textArray = text.split("");
  let inputElement = document.getElementById(elementId);
  let index = 0;

  let typingInterval = setInterval(() => {
      if (index < textArray.length) {
          inputElement.value += textArray[index];
          index++;
      } else {
          clearInterval(typingInterval);
      }
  }, typingSpeed);
}

// Call the function with the id of your input field, the typing speed in milliseconds, and the text to type
autoType("input", 100, "Hello, world!");



//its the jsut wrong element id... maybe convert to react????