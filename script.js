const inputElem = document.querySelector('input')
const btn = document.querySelector('button')
const form = document.querySelector('.text-container')

let isduplicate = false

function handleSubmit(e){
    e.preventDefault();  
    
    let inputText = inputElem.value;

    if(!inputText){
        alert("write a task");
        return;
    }

    // addTask(inputText);

    if (isduplicate == true) {
        alert("duplicate")
    }
    else{
        addTask(inputText);  // fun call
    }


    inputElem.value = "";
}


function addTask(inputValue){
    console.log(inputValue);

    const taskrow = document.createElement('tr');
    taskrow.innerHTML=`<td>${inputValue}</td>
                        <td>
                            <i class="ri-delete-bin-line delete"></i>
                        </td>`
                        
    const tbody = document.querySelector('tbody') 
    tbody.appendChild(taskrow);

   // --------------------------------------

    console.log(tbody);

    const trElem = tbody.querySelectorAll('tr')
    console.log(trElem);

    trElem.forEach((trVal)=>{
        console.log(trVal);

        // console.log(trVal.firstChild.textContent);

        const alltrCont = trVal.firstChild.textContent;
        // console.log(alltrCon);

        
    

        if(alltrCont == inputValue){
            // alert("already exist");
            // return;

            // console.log(inputValue);

            isduplicate=true
            
        }

    })

    
    // =====================================

    let deleteIcon =  taskrow.querySelector('.delete');   
    deleteIcon.addEventListener('click', ()=> deleteTaskRow(taskrow))       // // //

}

// ========================

function deleteTaskRow(row){  
    row.remove();
}



form.addEventListener('submit', handleSubmit);  

