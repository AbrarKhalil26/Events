let btn_add = document.querySelector(".add");
let btn_remove = document.querySelector(".remove");
let add_box = document.querySelector(".AddEvent");
let btn_ok = document.querySelector(".ok");
let contentInput = document.querySelectorAll(".infoInput");
let boxEvent = document.querySelectorAll(".box");
let n = boxEvent.length - 1;

// --------------------------------------
// -------------Stop load page------------

let form = document.getElementById("form");
form.addEventListener('submit',e => {
    e.preventDefault();
})

// ---------------------------------------------
// --------------------Add Event Btn------------

btn_add.addEventListener('click',()=>{
    add_box.classList.remove("active");
})

btn_ok.addEventListener('click',() =>{
    let empty = 0;
    for(let i = 0; i < contentInput.length ; i++){
        if(contentInput[i].value == "") empty++;
    }
    if(empty == 0){
        add_box.classList.add("active");
        Info();
        ++n;
    }
    
    console.log("Length boxEvent "+ boxEvent.length + "\n In Add n = "+ n);
})

// -----------------------------------------------
// --------------------Details Event--------------

function Info(){
    let month = contentInput[0].value;
    let day = contentInput[1].value;
    let content = contentInput[2].value;
    let time = contentInput[3].value;
    let state = contentInput[4].value;

    createEvent(month, day, content, time, state);
    // Clear input fields
    for (let i = 0; i < contentInput.length; i++) {
        contentInput[i].value = "";
    }
}


// ------------------------------------------
// -------------Create Event-----------------

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}


function createEvent(month, day, content, time, state){
    // Parent Event
    let divBox = document.createElement('div');
    divBox.classList.add('box','col-lg-4','col-sm-6');
    // Event
    let divEvent = document.createElement('div');
    divEvent.classList.add('event','px-lg-5','p-4');
    
    let pMonth = document.createElement('p');
    pMonth.innerHTML = month;
    
    let numDay = document.createElement('h2');
    numDay.innerHTML = day;
    
    let pContent = document.createElement('p');
    pContent.classList.add('mt-4','mb-5');
    pContent.innerHTML = content;
    
    let divParentDetails = document.createElement('div');
    divParentDetails.classList.add('date','row','justify-content-between','align-items-center');
    
    let divDetails = document.createElement('div');
    divDetails.classList.add('details','col-md-7');
    
    let pTime = document.createElement('p');
    pTime.innerHTML = time;
    
    let pState = document.createElement('p');
    pState.innerHTML = state;
    
    let divArrow = document.createElement('div');
    divArrow.classList.add('arrow','col-md-3');
    
    let iArrow = document.createElement('i');
    iArrow.classList.add('fa-solid','fa-arrow-right-long');

    // Content Event
    divEvent.appendChild(pMonth);
    divEvent.appendChild(numDay);
    divEvent.appendChild(pContent);
    divEvent.appendChild(divParentDetails);
    divParentDetails.appendChild(divDetails);
    divDetails.appendChild(pTime);
    divDetails.appendChild(pState);
    divParentDetails.appendChild(divArrow);
    divArrow.appendChild(iArrow);
    
    // Parent Event
    divBox.appendChild(divEvent);
    
    insertAfter(divBox,  document.getElementById('parent_box').lastElementChild);

    boxEvent = document.querySelectorAll(".box");
    
}

// --------------------------------------
// -------------Remove Event Btn---------
btn_remove.addEventListener('click',()=>{
    if (boxEvent[n]) {
        boxEvent[n].remove();
        --n;
    }
    boxEvent.length = n;
    // console.log("Length boxEvent "+ boxEvent.length + "\n In Remove n = "+ n);
})

// -----------------------------------------------
// ----------------Remove Event Btn---------------
let close = document.querySelector('.close');
close.addEventListener('click', ()=>{
    add_box.classList.add("active");
})