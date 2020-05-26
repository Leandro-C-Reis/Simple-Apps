
setInterval(() => {
  let decimal = document.getElementById("input").value;
  let binary = (decimal >>> 0).toString(2);
  
  if (decimal != "") {
    document.getElementById("output").value = binary;
  }else {
    document.getElementById("output").value = "";
  }

}, 1000);