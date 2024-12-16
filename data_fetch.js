
// function fetchData() {
//     var xhtp = new XMLHttpRequest();

//     xhtp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             // 1. Parse the response as JSON
//             let data = JSON.parse(this.responseText);
            
//             // 2. Select the table where the data will be inserted
//             let table1 = document.getElementById('todo_table');
            
//             // 3. Loop through the array of todo items
//             for (let i = 0; i < data.length; i++) {
//                 let rowcount = table1.rows.length;
                
//                 // 4. Insert a new row in the table
//                 var row = table1.insertRow(rowcount);
                
//                 // 5. Create cells (<td>) for each row and populate them
//                 let cell1 = row.insertCell(0);
//                 cell1.innerHTML = data[i].userId; // Correct property name
                
//                 let cell2 = row.insertCell(1);
//                 cell2.innerHTML = data[i].id; // Correct property name
                
//                 let cell3 = row.insertCell(2);
//                 cell3.innerHTML = data[i].title; // Correct property name
                
                

//                 // Add checkbox for marking completion
//                 let cell4 = row.insertCell(3);
//                 let checkbox = document.createElement('input');
//                 checkbox.type = 'checkbox';
//                 checkbox.checked = data[i].completed; // Check if already completed
//                 checkbox.disabled = data[i].completed; // Disable checkbox if already completed
//                 checkbox.addEventListener('change', function() {
//                     if (this.checked) {
//                         completedTasksCount++;
//                     } else {
//                         completedTasksCount--;
//                     }
//                     checkIfFiveTasksCompleted();
//                 });
//                 cell4.appendChild(checkbox);
//             }
//         }
//     }

//     // Open the GET request to the API endpoint
//     xhtp.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    
//     // Send the request
//     xhtp.send();
// }


// function checkIfFiveTasksCompleted() {
//     return new Promise((resolve, reject) => {
//         if (completedTasksCount === 5) {
//             resolve();
//         }
//     }).then(() => {
//         alert("Congrats. 5 Tasks have been Successfully Completed");
//     });
// }

let completedTasksCount = 0; // Track user-checked tasks
let alertShown = false; // Flag to prevent multiple alerts

function fetchData() {
    var xhtp = new XMLHttpRequest();

    xhtp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // 1. Parse the response as JSON
            let data = JSON.parse(this.responseText);
            
            // 2. Select the table where the data will be inserted
            let table1 = document.getElementById('todo_table');
            
            // 3. Loop through the array of todo items
            for (let i = 0; i < data.length; i++) {
                let rowcount = table1.rows.length;
                
                // 4. Insert a new row in the table
                var row = table1.insertRow(rowcount);
                
                // 5. Create cells (<td>) for UserID, ID, and Title
                let cell1 = row.insertCell(0);
                cell1.innerHTML = data[i].userId;
                
                let cell2 = row.insertCell(1);
                cell2.innerHTML = data[i].id;
                
                let cell3 = row.insertCell(2);
                cell3.innerHTML = data[i].title;

                // 6. Add checkbox for marking completion (this is NOT part of the table columns)
                let cell4 = row.insertCell(3);
                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';

                // Add event listener for changes in the user's manual input
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        completedTasksCount++;
                    } else {
                        completedTasksCount--;
                    }
                    checkIfFiveTasksCompleted();
                });

                cell4.appendChild(checkbox);
            }
        }
    };

    // Open the GET request to the API endpoint
    xhtp.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    
    // Send the request
    xhtp.send();
}

function checkIfFiveTasksCompleted() {
    return new Promise((resolve, reject) => {
        if (completedTasksCount === 5) {
            resolve();
        }
    }).then(() => {
        if (!alertShown) {
            alertShown = true; // Prevent multiple alerts
            alert("Congrats. 5 Tasks have been Successfully Completed");
        }
    });
}





