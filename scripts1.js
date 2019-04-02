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
};


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
};

$('#Swap').click(function(){
	var temp;
	var inp;
	var out;
	var condition, condition1;
	condition=document.getElementById('InBaseSelect');
	if(condition.value!="other") inp = condition;
	else inp = document.getElementById('OtherInBaseField');

	if(condition.value!="other") {	
		condition1=document.getElementById('OutBaseSelect');		
		if(condition1.value!="other") out = condition1;
		else 
			{
				out = document.getElementById('OtherOutBaseField');
				block=document.getElementById('OtherBase');
  				input=document.getElementById('OtherInBaseField');
    				block.style.display="grid";
   				input.disabled=false;
    				input.focus();
				inp = document.getElementById('OtherInBaseField');
			}
	}
	else 
	
	temp = inp.val();
	inp.val() = out.val();
	out.val() = temp;
});


if ($(#InBaseSelect).val() != 'Другая СС') inp = $(#InBaseSelect);
	else inp = $(#OtherInBaseField);
	if ($(#OutBaseSelect).val() != 'Другая СС') out = $(#OutBaseSelect);
	else out = $(#OtherOutBaseField);