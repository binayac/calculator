function compute()
{
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const result = document.getElementById("result")
    interest = principal*rate*years/100;
    console.log(interest);
    result.innerHTML = interest;
}
    
function updateValue(value) {
    document.getElementById('rangeValue').textContent = value + '%';
  }
  