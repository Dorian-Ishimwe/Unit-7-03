let userInput = 0
document.getElementById('button').addEventListener('click', age)

function age () {
 userInput = document.getElementById('age').value
 userInput = parseInt(userInput)

 if (userInput >= 18) {
   document.getElementById('answer').innerHTML = 'You can watch R rated movies'
  } else if (userInput >= 13) {
   document.getElementById('answer').innerHTML = 'You can watch PG-13 rated movies'
  } else if (userInput < 13) {
    document.getElementById('answer').innerHTML = 'You can only watch PG and G rated movies'
  }
}
