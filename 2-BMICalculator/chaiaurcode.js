const form = document.querySelector('form');
console.log(form);

//this usecase will give us empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  //const height = document.querySelector('#height').value //string
  const height = parseInt(document.querySelector('#height').value); //integer
  const weight = parseInt(document.querySelector('#weight').value); //integer
  const results = document.querySelector('#results');

  //height !=NaN
  // Check if height is valid
  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please provide a valid height! ${height}`;
    results.style.color = 'red';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please provide a valid weight! ${weight}`;
    results.style.color = 'red';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span>The BMI is: ${bmi}<span/>`;
    results.style.color = 'green';
    //bmi === 18 || bmi === 24: Executes if bmi is exactly 18 or exactly 24.
    //bmi >= 18.5 && bmi < 25: Executes if bmi is between 18.6 and 24.9 (inclusive of 18.5 and exclusive of 25).
    //for underweight
    if (bmi <= 18.6) {
      results.innerHTML = `<span>You are Under Weight : ${bmi}<span/>`;
      //for normal
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>You are in Normal Range : ${bmi}<span/>`;
      //for overweight
    } else {
      results.innerHTML = `<span>You are Overweight : ${bmi}<span/>`;
    }
  }
});
