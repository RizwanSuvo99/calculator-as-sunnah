let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let output = "";
let array = Array.from(buttons);
array.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      output = Function("return " + output)();
      input.innerHTML = output;
    } else if (e.target.innerHTML == "AC") {
      output = "";
      input.innerHTML = "0";
    } else if (e.target.innerHTML == "DEL") {
      output = output.substring(0, output.length - 1);
      if(output == ""){
        input.innerHTML = "0";
        return 0;
      }
      input.innerHTML = output;
    } else {
      output += e.target.innerHTML;
      input.innerHTML = output;
    }
  });
});
