// asking players for tasks and priorities
function taskJunkie () {
    while (true) {
        // ask the player to name a task
        task = game.askForString("whats the task?", 10)
        // importancE of task
        priority = game.askForNumber("priority (1 = highest, 5 = lowest):")
        if (priority < 1 || priority > 5) {
            game.splash("enter a number between 1 and 5 please!")
            continue;
        }
        // saving task
        tasks.push(task)
        priorities.push(priority)
        // asks if they want to add more tasks
        if (game.ask("will that be all?")) {
            break;
        }
    }
    tasks.sort((a, b) => priorities[tasks.indexOf(a)] - priorities[tasks.indexOf(b)]);
// alert that sorting is done and start the timer
    game.splash("timer starts now")
    // go through each in order
    for (let i = 0; i <= tasks.length - 1; i++) {
        game.splash(`next: ${tasks[i]} (priority: ${priorities[i]})`)
        pause(30000)
        game.splash(`time for ${tasks[i]}!`)
    }
    if (game.ask("do you want to schedule new tasks?")) {
        tasks = []
        priorities = []
        taskJunkie()
    } else {
        game.splash("adios!")
    }
}
let priority = 0
let task = ""
let priorities: number[] = []
let tasks: string[] = []
taskJunkie()
