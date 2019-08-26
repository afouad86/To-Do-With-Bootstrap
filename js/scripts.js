function createNewTask (){
    var li = document.createElement ("li");
    li.setAttribute('class', 'list-group-item task');
    var taskDetails = document.createElement ("div");
    taskDetails.setAttribute('class', 'd-flex task-details');
    var taskFlag = document.createElement ("div");
    taskFlag.setAttribute('class', 'p-2 task-flag');
    var checkBox = document.createElement ("input");
     checkBox.setAttribute('class', 'checkbox');
      checkBox.setAttribute('type', 'checkbox');
       checkBox.setAttribute('onchange', 'completeTask(this)');
      taskFlag.appendChild(checkBox);
    var taskName = document.createElement ("div");
    taskName.setAttribute('class', 'p-2 task-name');
    taskName.textContent = document.getElementById("taskNameIn").value;
    var taskArchive = document.createElement ("div");
    taskArchive.setAttribute('class', 'ml-auto p-2 task-archive');
    var taskArchiveBtn = document.createElement ("button");
    taskArchiveBtn.setAttribute('class', 'btn btn-outline-danger');
    taskArchiveBtn.setAttribute('type', 'button');
    taskArchiveBtn.textContent = "Archive";
    taskArchiveBtn.setAttribute('onClick', 'moveToArchive(this)');
    taskArchive.appendChild(taskArchiveBtn);
    taskDetails.appendChild(taskFlag);
    taskDetails.appendChild(taskName);
    taskDetails.appendChild(taskArchive);
    var taskDescription = document.createElement ("div");
    taskDescription.setAttribute('class', 'd-flex flex-column task-description');
    taskDescription.textContent = document.getElementById("taskDescIn").value;
    li.appendChild(taskDetails);
    li.appendChild(taskDescription);
    var tasks = document.getElementById("tasks");
    tasks.appendChild(li);
    var tasksCount = document.getElementsByClassName("task").length;
     document.getElementById("tasksCount").innerHTML=tasksCount;
    }
    
   
    
     function completeTask(checkBox){
       if(checkBox.checked )
             checkBox.parentNode.parentNode.nextElementSibling.style.textDecoration  = "line-through";
        else
         checkBox.parentNode.parentNode.nextElementSibling.style.textDecoration  = "none";
           
           
    }
     function removeTask(removeButton){
         removeButton.parentNode.parentNode.parentNode.remove();
        }
    function moveToArchive(archiveButton){
        
 
        
         var li = document.createElement ("li");
    li.setAttribute('class', 'list-group-item archivedTask');
    var taskDetails = document.createElement ("div");
    taskDetails.setAttribute('class', 'd-flex task-details');
    var taskFlag = document.createElement ("div");
    taskFlag.setAttribute('class', 'p-2 task-flag');
    var checkBox = document.createElement ("input");
     checkBox.setAttribute('class', 'checkbox');
      checkBox.setAttribute('type', 'checkbox');
       checkBox.setAttribute('onchange', 'completeTask(this)');
      taskFlag.appendChild(checkBox);
    var taskName = document.createElement ("div");
    taskName.setAttribute('class', 'p-2 task-name');
    taskName.textContent =archiveButton.parentNode.previousElementSibling.innerHTML;
    var taskArchive = document.createElement ("div");
    taskArchive.setAttribute('class', 'ml-auto p-2 task-archive');
    var taskArchiveBtn = document.createElement ("button");
    taskArchiveBtn.setAttribute('class', 'btn btn-danger');
    taskArchiveBtn.setAttribute('type', 'button');
      taskArchiveBtn.setAttribute('onClick', 'removeTask(this)');
    taskArchiveBtn.textContent = "Remove";
    taskArchive.appendChild(taskArchiveBtn);
    taskDetails.appendChild(taskFlag);
    taskDetails.appendChild(taskName);
    taskDetails.appendChild(taskArchive);
    var taskDescription = document.createElement ("div");
    taskDescription.setAttribute('class', 'd-flex flex-column task-description');
    taskDescription.textContent = archiveButton.parentNode.parentNode.nextElementSibling.innerHTML;
    li.appendChild(taskDetails);
    li.appendChild(taskDescription);
    var archivedTasks = document.getElementById("archivedTasks");
    archivedTasks.appendChild(li);
    archiveButton.parentNode.parentNode.parentNode.remove();
    var tasksCount = document.getElementsByClassName("task").length;
     document.getElementById("tasksCount").innerHTML=tasksCount;
    }
    