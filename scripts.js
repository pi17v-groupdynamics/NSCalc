function inBase() {
    let condition = document.getElementById('InBaseSelect');
    let block = document.getElementById('OtherBase');
    let input = document.getElementById('OtherInBaseField');
  if(condition.value==="other") {
    block.style.display="grid";
    input.disabled=false;
    input.focus();
  }
  else {input.disabled=true; input.value="";}
  return false;
}


function outBase() {
    let condition = document.getElementById('OutBaseSelect');
    let block = document.getElementById('OtherBase');
    let input = document.getElementById('OtherOutBaseField');
  if(condition.value==="other") {
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

	if (selectOne.hasAttribute('disabled') === true && selectTwo.hasAttribute('disabled') === false)
		{
		selectOne.disabled = false;
		selectTwo.disabled = true;
		}
	else if (selectOne.hasAttribute('disabled') === false && selectTwo.hasAttribute('disabled') === true)
		{
		selectOne.disabled = true;
		selectTwo.disabled = false;
		}

    let output=document.querySelector('#ResultField');
    let input=document.querySelector('#InputField');
    let temp = output.innerHTML;
    output.innerHTML = input.value;
    input.value = temp;
	// let temp = $("#ResultField").text;
    // $("#ResultField").text = $("#InputField").val();
    // $("#InputField").val(temp);
}


function Convert()
{
    let reg1 = new RegExp("^(?:d+([*+-]|/(?!0)))+d+$");
    let reg = new RegExp("^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$");

    let Stroka = document.getElementById('InputField');
    // let reg = "^(?:\d+([*+-]|/(?!0)))+\d+$";
    if ($("#NumRadioVariable").prop("checked"))
        if (reg1.test(Stroka) === false)
            convertBase(parseFloat($("#InputField").val()));
        else alert ("Введено некорректное значение");
    else
        if (reg1.test(Stroka) === false)
            convertBase(parseFloat(eval($("#InputField").val())));
        else alert ("Введено некорректное значение");
	//
	// let Stroka = document.getElementById('InputField');
	// if (reg.test(Stroka) === false) alert ("Вы дебил");
	// else {
    //
    // }

}

function error() {
    $('#ErrorsBlock').show(1000);
    setTimeout(function(){
        $('#ErrorsBlock').hide(2000);
    }, 5000);
}

function convertBase(val) {
    let base1, base2;
    base1 = $("#InBaseSelect").val();
    if (base1 === "other")
        base1 = $("#OtherInBaseField").val();

    base2 = $("#OutBaseSelect").val();
    if (base2 === "other")
        base2 = $("#OtherOutBaseField").val();

    if (typeof(val) === "number")
        $("#ResultField").text(parseFloat(String(val)).toString(base2));
    else
        $("#ResultField").text(parseInt(val.toString(), base1).toString(base2));
}

function ExpressionRadio() {
    if ($("#ExpressionRadioVariable").prop("checked",true)) {
       $("#InputField").val("");
       $("#InBaseSelect").val("10");
       $("#InBaseSelect").attr("disabled","disabled");
   }
}

function NumRadio() {
    if ($("#NumRadioVariable").prop("checked", true)) {
        $("#InputField").val("");
        $("#InBaseSelect").removeAttr("disabled");
    }
}