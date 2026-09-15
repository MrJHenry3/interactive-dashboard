        
       
       function weeklyGoal(userName, dailyGoal, bonusTasks) {
        // Weekly Goal: Calculate the total weekly task goal for a user.
        
 
        // Output message to console
        console.log("Checking status for: " + userName); 
 
        // Calculate weekly goal based on number of workdays (5) per week
        let weeklyGoal = dailyGoal * 5; 
 
        // Add bonusTasks to weeklyGoal. 
        // Note: Check for data type issues
        let totalGoal = weeklyGoal + bonusTasks; 
 
        // Output results to web page
        output = "User: " + userName + ": Total Weekly Goal: " + totalGoal;
       
        // Assign field values to variables using document.getElementById().value
        let userName = document.getElementById("userName").value;
        let dailyGoal = document.getElementById("dailyGoal").value;
        let bonusTasks = document.getElementById("bonusTasks").value;
    
        //Call the weeklyGoal() function
        weeklyGoal(userName, dailyGoal, bonusTasks);
        
    };

    