const output = document.querySelector(".output");
const startNextBtn = document.querySelector(".start-next");
const resetBtn = document.querySelector(".reset");
const inputReg =  /^-?\d+$/;
let acc = 0;
const inputTest = () =>{
    const input = document.querySelector(".input-box").value.trim(); 
    if (!inputReg.test(input)) {
        output.textContent = "Please enter a valid number.";
        output.setAttribute("id", "output-invalid");
        output.style.display = "flex";
        return false;
    }
    output.setAttribute("id", "output"); // Set id to "output" for valid input
    output.style.display="flex";
    return true;
}
function fibonacci(n){
    if (n <= 0) return [];
    if (n === 1) return [0];
  
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  return sequence;
}
const displayResults = (array) => {
    if (acc >= array.length) {
      output.textContent = "Length of Fibonacci sequence reached!";
    } else {
      output.textContent = array[acc];
      acc++;
    }
  };
const resetFunc = ()=>{
    output.textContent = "";
    acc = 0;
}



startNextBtn.addEventListener("click",()=>{
    const input = document.querySelector(".input-box").value.trim(); 
    inputTest();
    const sequence = fibonacci(input);
    displayResults(sequence);
    startNextBtn.textContent = "Next Number";

});
resetBtn.addEventListener("click",()=>{
    output.style.display = "none";
    resetFunc();
})
