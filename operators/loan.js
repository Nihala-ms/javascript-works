var loanAmount=500000;
var interestRate=10;
var Tenure=3;


var monthlyRate=interestRate/(12*100);
var year=Tenure*12;
var emi=(loanAmount*monthlyRate*((1+monthlyRate))**year)/(((1+monthlyRate))**year-1);
console.log("emi:",emi);