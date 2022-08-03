const input = document.getElementById("num");
const wrapper = document.getElementById('wrapper');
calc = document.getElementById("calculation");
final = document.getElementById("final");
var result = 0

function computeResult(op){
    var num  = input.value
    var prev = result
    if (num == ''){
        return true
    }
    result = eval(result + op + parseInt(num))
    calc.textContent = `${prev} ${op}${num}`;
    final.textContent = result;
}
wrapper.addEventListener('click', function(evt) {
    let element = evt.target;  
    operator = element.textContent
    computeResult(operator)
  });


