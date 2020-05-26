
setInterval(renderBorder, 5)

function renderBorder() {
  let top = document.getElementById("top");
  let right = document.getElementById("right");
  let bottom = document.getElementById("bottom");
  let left = document.getElementById("left");
  
  let border_radius = `${top.value}% ${100 - top.value}% 
   ${100 - bottom.value}% ${bottom.value}%
   /
   ${left.value}% ${right.value}%
   ${100 - right.value}% ${100 - left.value}%
  `;

  document.getElementById("content").style.borderRadius = border_radius;
  document.querySelector("#result").innerHTML = border_radius;

}

function copyOutput() { 
  // Select the email link anchor text  
  let outLink = document.querySelector('#result');

  /* let range = document.createRange();  
  range.selectNode(outLink);   */

  window.getSelection().selectAllChildren(outLink); //or addRange()
  document.execCommand('copy');
}