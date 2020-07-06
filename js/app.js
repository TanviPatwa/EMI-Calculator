function calculate(){
    var loanAmt = document.getElementById("loanAmt").value;
    var interestRate = document.getElementById("interestRate").value;
    var duration = document.getElementById("duration").value;

    var errorMsg = document.getElementById("errorMsg");
    errorMsg.style.display = 'none';
    errorMsg.innerHTML = "";

    if(isNaN(loanAmt) || loanAmt <=0){
        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Invalid Loan Amount";
        return;
    }
    if(isNaN(interestRate) || interestRate <=0){
        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Invalid Interest Rate";
        return;
    }
    if(isNaN(duration) || duration <=0){
        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Invalid Duration";
        return;
    }
    interestRate = interestRate / (12 * 100);
    duration = duration * 12;
    var emi = loanAmt * interestRate * Math.pow(1 + interestRate, duration) / (Math.pow(1 + interestRate, duration) - 1);
    document.getElementById('emi').innerHTML = formatCurrency(emi.toFixed(0));

    var totalPay = emi * duration;
    document.getElementById('totalPay').innerHTML = formatCurrency(totalPay.toFixed(0));

    var totalInterest = totalPay - loanAmt;
    document.getElementById('totalInterest').innerHTML = formatCurrency(totalInterest.toFixed(0));
}
calculate();

function formatCurrency(x){

    x=x.toString();
    var afterPoint = '';
    if(x.indexOf('.') > 0)
       afterPoint = x.substring(x.indexOf('.'),x.length);
    x = Math.floor(x);
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
    // console.log(res);
    return res;
}