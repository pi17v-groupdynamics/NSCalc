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


function Convert() {

    base1 = $("#InBaseSelect").val();
    if (base1 === "other")
        base1 = $("#OtherInBaseField").val();

    base2 = $("#OutBaseSelect").val();
    if (base2 === "other")
        base2 = $("#OtherOutBaseField").val();

    if (base1 > 36 || base1 < 2 || base2 > 36 || base2 < 2)
        error();

    let Stroka = document.getElementById('InputField');


    if ($("#InputField").val().indexOf(",") > -1 | $("#InputField").val().indexOf("%") > -1) {
        error();
        return;
    }

    let word = $("#InputField").val();


    if ($("#NumRadioVariable").prop("checked"))
    {
        for (let i = 0; i <= word.length; i++)
        {
            if (parseInt(word.charAt(i)) >= base1) {
            error();
            return;
        }   }
        word = $("#InputField").val();
    }
    else
    {
        try {
            word = eval($("#InputField").val());
        }
        catch (e) {
            error();
            return;
        }

    }

    // for (let i = 0; i <= word.length; i++)
    //     if (parseInt(word.charAt(i) >= base1))
    //     {
    //         error();
    //         return;
    //     }

    let negative = false;
    if (parseInt(word)<0)
    {word=word*-1;
    negative = true;
    }

    if (negative === false)
        $("#ResultField").text(ConvertSys(word,base1,base2,0,false)[0]);
    else $("#ResultField").text(ConvertSys(word,base1,base2,0,false)[0] * -1);

}


function is_dig(dig,base)
{

    var diap = new String("[0-9.");
    if(base>10)
    {
        for(var i="A".charCodeAt(0);i<="A".charCodeAt(0)+(base-1-10);i++)
        {
            diap+=String.fromCharCode(i);
        }
    }
    diap+="]";


    var dig =String(dig).toLocaleUpperCase();
    var re = new RegExp(diap+"{"+(dig.length)+"}","i");
    return (re.exec(dig)==null ? error() : true);
}

String.prototype.toFixed = function(prec)
{
    if(prec<1) return parseFloat(this);
    return parseFloat(parseFloat(this).toFixed(prec));
}
function error() {
    $('#ErrorsBlock').show(1000);
    setTimeout(function(){
        $('#ErrorsBlock').hide(2000);
    }, 5000);
}

const abc = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function convertBase(val) {
    let base1, base2;
    base1 = $("#InBaseSelect").val();
    if (base1 === "other")
        base1 = $("#OtherInBaseField").val();

    base2 = $("#OutBaseSelect").val();
    if (base2 === "other")
        base2 = $("#OtherOutBaseField").val();

}

function ConvertSys(dig,sFrom,sTo,hexUp,fix)
{
    var results=new Array(new Array(),new Array());
    if(!is_dig(dig,sFrom) || isNaN(sFrom) || isNaN(sTo) || sFrom<=1 || sTo<=1 || sFrom>36 || sTo>36) return false;
    if(sTo==sFrom) return new Array(dig,results);
    hexUp=hexUp ? 0 : 32;
    var trunc = String("");
    var prPos = String(dig).indexOf(".");
    if(prPos!=-1)
    {
        fix = fix==undefined ? 16 : fix;
        fix = fix<1 ? 16 : fix;
        trunc = String(String(dig).substr(prPos+1));
        var i=0;
        trunc = String(trunc).substr(i);
        if(sFrom!=10)
        {
            var dec = 0;
            for(var i=0;trunc[i];i++)
            {
                var tmp = trunc[i];

                if(isNaN(tmp) && sFrom>10)
                {
                    tmp = tmp.toLocaleUpperCase().charCodeAt(0)-55;
                }

                dec+=parseFloat(tmp*(1/Math.pow(sFrom,i+1)));
                //alert(dec)
            }
            trunc = String(dec);
            var pr = String(trunc).indexOf(".");
            trunc = parseFloat(String(trunc).substr(pr+1));
        }
        trunc = parseFloat("0."+trunc);
        trunc = String(trunc).toFixed(fix);
        var pr = String(trunc).indexOf(".");
        trunc = parseFloat(String(trunc).substr(pr+1));
        if(sTo!=10)
        {

            var tmp = "0."+parseFloat(trunc);

            var tr = new String("");

            while(String(tr).length<fix && tmp!=0)
            {

                tmp = tmp*sTo;
                var one = parseInt(tmp);
                if(one>9 && sTo>10)
                {
                    tr+= String.fromCharCode(tmp+55+hexUp)
                }
                else tr+=String(one);
                var pr = String(tmp).indexOf(".");
                if(pr!=-1)
                {
                    tmp = parseFloat("0."+String(tmp).substr(pr+1));

                }
                else tmp=0;
            }
            trunc = tr;
        }
        dig = String(dig).substr(0,prPos);
        trunc = "."+trunc;
    }
    var tmp,i;
    if(sFrom!=10)
    {
        dig=String(dig);
        i=0;
        var len = dig.length;
        var dec = 0;
        while(dig[i])
        {
            tmp=dig[i];
            if(sFrom>10 && isNaN(tmp))
            {
                tmp=dig[i].toLocaleUpperCase();
                tmp=tmp.charCodeAt(0)-55;


            }
            dec+=parseInt(tmp)*Math.pow(sFrom,len-i-1);
            i++;
        }
        if(sTo==10) return new Array(String(dec+trunc),results);
        dig = dec;
    }


    dig  = parseInt(dig);
    var result = dig==0 ? new String("0") : new String("");

    var i=0;
    while(dig!=0)
    {
        results[0][i]=dig;
        tmp=dig % sTo;
        if(sTo>10 && tmp>=10)
        {
            tmp = String.fromCharCode(tmp+55+hexUp);
        }
        results[1][i++]=tmp;
        result=tmp+result;
        dig=Math.floor(dig/sTo);

    }
    return new Array(String(result+trunc),results);
}


function ExpressionRadio() {
    if ($("#ExpressionRadioVariable").prop("checked",true)) {
       $("#InputField").val("");
       $("#InBaseSelect").val("10");
       $("#InBaseSelect").attr("disabled","disabled");
       $("#Swap").attr("onclick","");
   }
}

function NumRadio() {
    if ($("#NumRadioVariable").prop("checked", true)) {
        $("#InputField").val("");
        $("#InBaseSelect").removeAttr("disabled");
        $("#Swap").attr("onclick","Swap();");
    }
}
