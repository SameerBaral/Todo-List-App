const inputElem = document.querySelector('input');
const btn = document.querySelector('button');
const form = document.querySelector('.text-container');


function handleSubmit(e){
    e.preventDefault();  
    let inputText = inputElem.value;
    
    // when blank
    if(!inputText){
        alert("write a task");
        return;
    }
    
    const tbody = document.querySelector('tbody') ;
    const allRows = tbody.querySelectorAll('tr');
    let isduplicate = false;    //intial value 

    // loop over arr rows to find duplicate value
    allRows.forEach((row)=>{       
        const rowText = row.firstChild.textContent;   
        
        if(inputText  === rowText){
            isduplicate = true;
        }
    })
    
    // add new task when no duplicate found
    if (isduplicate) {
        alert("task already exists");
    }else{
        addTask(inputText);
    }

    inputElem.value = "";  //clear input after adding task
}


function addTask(inputValue){

    const taskrow = document.createElement('tr');
    taskrow.innerHTML=`<td>${inputValue}</td>
                        <td>
                            <i class="ri-delete-bin-line delete"></i>
                        </td>`
                        
    const tbody = document.querySelector('tbody') ;
    tbody.appendChild(taskrow);

    let deleteIcon =  taskrow.querySelector('.delete');   
    deleteIcon.addEventListener('click', ()=> deleteTaskRow(taskrow));

}



function deleteTaskRow(row){  
    row.remove();
}

form.addEventListener('submit', handleSubmit);  

