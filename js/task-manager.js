//declare global array to track tasks
let myTasks=[];

//Create unordered list
let userTasks = document.createElement("ul");
userTasks.id = "user-tasks";

//Append list
document.getElementById("task-list").appendChild(userTasks);


function weeklyGoal(userName, dailyGoal, bonusTasks) {
    //Weekly Goal: Calculate the total weekly task goal for a user. -->

    // Calculate weekly goal based on number of workdays (5) per week
    let weeklyGoal = dailyGoal * 5; 

    // Add bonusTasks to weeklyGoal.
    // Note: Check for data type issues
    let totalGoal = weeklyGoal + bonusTasks; 

    // Output results to web page
    let output = "User: " + userName + ": Total Weekly Goal: " + totalGoal;

    //Display to screen
    document.getElementById("goal-message").textContent = output;

    // Output message to console
    console.log("Checking status for: " + userName);


    document.createElement

} 

//Click Listener for submit button
document.getElementById("goal-btn").addEventListener("click", function() {
    
    // Assign field values to variables using document.getElementById().value
    let userName = document.getElementById("userName").value;
    let dailyGoal = document.getElementById("dailyGoal").value;
    let bonusTasks = Number(document.getElementById("bonusTasks").value);

    // Call the weeklyGoal() function
    weeklyGoal(userName, dailyGoal, bonusTasks);
    
});


//Add Task Button with click listener
document.getElementById("add-task").addEventListener("click", function() {

    //Get task from user
    let taskName = document.getElementById("task-name").value;

    //use the .push() method to add it in the myTasks array.
    myTasks.push(taskName);


    //: Append the list item text to the <li>, 
    // then append the <li> to the dynamically created <ul>.
    let listItem = textContent = taskName;

    userTasks.appendChild(listItem);

});
    