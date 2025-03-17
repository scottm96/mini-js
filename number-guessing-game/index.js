const message = document.getElementById("message")

const min = 1
const max = 100
answer = Math.floor((Math.random() * max))

function start(){
    answer = Math.floor((Math.random() * max))
    let attempts = 0
    running = true

    while(running){
        play = Number(window.prompt("Enter the correct number!"))


        if (isNaN(play)){
            window.alert("A 'NUMBER!!' try again smarty")
            attempts++
        }else if(play > answer){
            window.alert("try again fam. but this time, go a little lower")
            attempts++
        }else if(play < answer){
            window.alert("try again fam. but this time, go a little higher")
            attempts++
        }else if(play === answer){
            message.textContent = `Congratulations! you guessed the correct answer: ${answer}. It took you ${attempts} attempts.`
            running = false
        }
    }
}