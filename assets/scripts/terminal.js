const output = document.getElementById("output");
const commandInput = document.getElementById("command");

commandInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = commandInput.value;
    output.innerHTML += `<div><span class="prompt">$ </span>${command}</div>`;
    commandInput.value = "";
    // Handle the command and execute corresponding actions
    handleCommand(command);
  }
});

function handleCommand(command) {
  // You can define your own logic here to handle different commands
  // For example, you can execute shell commands using AJAX or fetch API
  // and display the output in the terminal-like interface
  output.innerHTML += `<div>${command}: command not found</div>`;
}
