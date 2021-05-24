


function age (year,month,day){
  const yearDay = year * 365;
  const monthDay = month * 30;
  
  const ageInDays = yearDay + monthDay + day;

  return ageInDays;
}
console.log(`O total da idade em dias é ${age(30,5,10)} dias`);
