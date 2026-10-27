//declare global array to track tasks
let tasks=[];
let nextID = 1;

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
    let listItem = document.createElement("li");
    
    listItem.textContent = taskName;

    userTasks.appendChild(listItem)
    document.getElementById("task-name").value="";


});

function addTask(name, priority, isImportant) {

let task = {
	id: nextId,
	name: name,
	priority: priority,
	isImportant: isImportant,
	isCompleted: false
};

nextId++;

tasks.push(task);

console.log(JSON.stringify(tasks));

displayTasks();

}


function displayTasks() {
	let taskList = document.getElementById("user-tasks");
	taskList.innerHTML = "";
	tasks.forEach(function(task) {
		let li = document.creatElement("li");
		li.textContent = task.name + "(" + task.priority + ")";
    
        //Styling
	
        if(task.isImportant) {
            li.style.color = "red";
        }
        
        if(task.priority === "High") {
            li.style.fontWeight = "bold";
        }

        if(task.priority === "Medium") {
            li.style.color = "orange";
        }

        if (task.priority === "Low") {
            li.style.color = "green";
        }
	


        if (task.isCompleted) {
            li.style.textDecoration = "line-through";
        }

	
        let completeButton = document.createElement("button");

        completeButton.textContent = "Complete";

        completeButton.addEventListener("click", function() {

            task.isCompleted = true;

            console.log(JSON.stringify(tasks));

            displayTasks();
            
        });

                // Add button to List
        li.appendChild(completeButton);

        // Add LI to Unordered List
        taskList.appendChild(li);
}


	
	
        let completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", function() {
            task.isCompleted = true;
            console.log(JSON.stringify(tasks));
            displayTasks();
    });


document.getElementByID("task-button").addEventListener("click", function() {

	let name = document.getElementById("task-name2").value;
	
	let priority = document.getElementById("task-priority").value;

	let isImportant = document.getElementById("its-important").checked;

	addTask(
	    name,
	    priority,
	    isImportant
	);


});
