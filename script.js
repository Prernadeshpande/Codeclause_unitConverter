function convert() {
    const input = document.getElementById("input").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    
    let result;
    
    if (from === "m" && to === "km") {
      result = input / 1000;
    } else if (from === "km" && to === "m") {
      result = input * 1000;
    } else if (from === "mi" && to === "km") {
      result = input * 1.60934;
    } else if (from === "km" && to === "mi") {
      result = input / 1.60934;
    } else if (from === "mi" && to === "m") {
      result = input * 1609.34;
    } else if (from === "m" && to === "mi") {
      result = input / 1609.34;
    } else {
      result = input;
    }
    
    document.getElementById("result").innerHTML = result;
  }
  