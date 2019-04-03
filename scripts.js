function inBase() {
  condition=document.getElementById('InBaseSelect');
  block=document.getElementById('OtherBase');
  input=document.getElementById('OtherInBaseField');
  if(condition.value=="other") {
    block.style.display="grid";
    input.disabled=false;
    input.focus();
  }
  else {input.disabled=true; input.value="";}
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
  else {input.disabled=true; input.value="";}
  return false;
}

function Swap()
{
	let selectOne=document.querySelector('.InBSe');
  	let selectTwo=document.querySelector('.OutBSe');
 	let valOne=selectOne.value;
 	selectOne.value=selectTwo.value;
  	selectTwo.value=valOne;

	selectOne=document.querySelector('#OtherInBaseField');
  	selectTwo=document.querySelector('#OtherOutBaseField');
 	valOne=selectOne.value;
 	selectOne.value=selectTwo.value;
  	selectTwo.value=valOne;

	if (selectOne.hasAttribute('disabled') == true && selectTwo.hasAttribute('disabled') == false)
		{
		selectOne.disabled = false;
		selectTwo.disabled = true;
		}
	else if (selectOne.hasAttribute('disabled') == false && selectTwo.hasAttribute('disabled') == true)
		{
		selectOne.disabled = true;
		selectTwo.disabled = false;
		}
}