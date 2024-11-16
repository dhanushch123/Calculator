

function display(element)
{
    let section = document.querySelector(".section")
    section.innerText = section.innerText+element;
}
function del()
{
    let section = document.querySelector(".section");
    let str = section.innerText;
    let newstr = str.substring(0,str.length-1);
    section.innerText = newstr;
    
}
function reset()
{
    let section = document.querySelector(".section");
    section.innerText = ""; 
}

function result()
{
    function findOperatorIndex(expression)
    {
        for(let i=0;i<expression.length;i++)
        {
            if(expression[i] == "+" || expression[i] == "-" || expression[i] == "x" || expression[i] == "/")
            {
                return {
                    operator : expression[i],
                    oIndex : i
                }
            }
        }
    }
    function evaluateResult(operand1,operand2,operator)
    {
        switch(operator)
        {
            case("+"):
            return operand1 + operand2
            break;
            case("-"):
            return operand1 - operand2
            break;
            case("x"):
            return operand1*operand2
            break;
            case("/"):
            let res = operand1/operand2
            return res.toFixed(5)
            break;
        }
    }







    let section = document.querySelector(".section");
    let expression = section.innerText;
    let obj = findOperatorIndex(expression)
    let operand1 = Number(expression.substring(0,obj.oIndex))
    let operand2 = Number(expression.substring(obj.oIndex+1))
    let res = evaluateResult(operand1,operand2,obj.operator)
    
    section.innerText = String(res)

}

