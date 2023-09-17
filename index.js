function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let metar = (height / 100 )
  let BMI = ( weight / metar**2 )
    console.log (BMI)    
    window.alert(`YOUR BMI IS ${BMI}`)
  

  if ( BMI < 18.5 ) {
    alert(`${BMI} Underweight`)

  }
  else if ( BMI > 18.5 && BMI < 24.9) {
    alert(`${BMI} Healthy Weight`)
  }
  else if ( BMI > 25.0 && BMI < 29.9) {
    alert(`${BMI} Overweight`)
  }
  else ( BMI > 30 ) 
 {alert(`${BMI} Above Obesity`)}

}

