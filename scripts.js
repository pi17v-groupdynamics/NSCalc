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

$('#Swap').click(function(){
	var temp;
	var inp;
	var out;
	var condition, condition1;
	condition=document.getElementById('InBaseSelect');
	if(condition.value!="other") inp = condition;
	else inp = document.getElementById('OtherInBaseField');

	condition1=document.getElementById('OutBaseSelect');
	if(condition1.value!="other") out = condition1;
	else out = document.getElementById('OtherOutBaseField');
	
	temp = inp.val();
	inp.val() = out.val();
	out.val() = temp;
});
