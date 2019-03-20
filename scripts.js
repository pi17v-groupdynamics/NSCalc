function inBase() {
  condition=document.getElementById('InBaseSelect');
  block=document.getElementById('OtherBase');
  input=document.getElementById('OtherInBaseField');
  if(condition.value=="other") {
    block.style.display="grid";
    input.disabled=false;
    input.focus();
  }
  else input.disabled=true;
  return false;
}


function outBase() {
  condition=document.getElementById('OutBaseSelect');
  block=document.getElementById('OtherBase');
  input=document.getElementById('OtherOutBaseField');
  if(condition.value=="other") {
    block.style.display="grid";
    input.disabled=false;
    input.focus();
  }
  else input.disabled=true;
  return false;
}

function swap() {

}
