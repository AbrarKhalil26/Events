let btn_add = document.querySelector(".add");
let btn_remove = document.querySelectorAll(".del");
let btn_edit = document.querySelectorAll('.edit');
let formAdd = document.querySelector(".actionAddEvent");
let btn_ok = document.querySelector(".ok");
let contentAddInput = document.querySelectorAll(".box_addEvent .infoInput");
let contentEditInput = document.querySelectorAll(".box_editEvent .infoInput");
let boxEvent = document.querySelectorAll(".box");
let n = boxEvent.length - 1;

// ---------------------------------------------------
// -------------Stop load page------------

let form = document.getElementById("form");
form.addEventListener('submit',e => {
    e.preventDefault();
})

// ---------------------------------------------------
// --------------------Add Event Btn------------

btn_add.addEventListener('click',()=>{
    formAdd.classList.remove("active");
})

btn_ok.addEventListener('click',() =>{
    let empty = 0;
    for(let i = 0; i < contentAddInput.length ; i++){
        if(contentAddInput[i].value == "") empty++;
    }

    console.log("Empty = " + empty);
    if(empty == 0){
        formAdd.classList.add("active");
        Info();
        ++n;
        boxEvent = document.querySelectorAll(".box");
        btn_remove = document.querySelectorAll(".del");
        // console.log('box[' + btn_remove.length + ']');
    }


    // console.log("Length boxEvent "+ boxEvent.length + "\n In Add n = "+ n);
})

// ---------------------------------------------------
// --------------------Details Event--------------

function Info(){
    let month = contentAddInput[0].value;
    let day = contentAddInput[1].value;
    let content = contentAddInput[2].value;
    let time = contentAddInput[3].value;
    let state = contentAddInput[4].value;

    createEvent(month, day, content, time, state);
    // Clear input fields
    for (let i = 0; i < contentAddInput.length; i++) {
        contentAddInput[i].value = "";
    }
}


// ---------------------------------------------------
// ------------------Create Event---------------------

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}


function createEvent(month, day, content, time, state){
    // Parent Event
    let divBox = document.createElement('div');
    divBox.classList.add('box','col-lg-4','col-sm-6');
    // cards
    let divCard = document.createElement('div');
    divCard.classList.add('cards');

    // ---------------------------------------------
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
    // ---------------------------------------------
    
    // ---------------------------------------------
    // Delete & Edit
    let divEdit = document.createElement('div');
    divEdit.classList.add('del_edit');

    let create_btnEdit = document.createElement('button');
    create_btnEdit.innerHTML = 'Edit';
    create_btnEdit.setAttribute("type","submit");
    create_btnEdit.classList.add('edit','rounded-pill');
    
    let create_btnDel = document.createElement('button');
    create_btnDel.innerHTML = 'Delete';
    create_btnDel.setAttribute("type","submit");
    create_btnDel.classList.add('del','rounded-pill');

    divEdit.appendChild(create_btnEdit);
    divEdit.appendChild(create_btnDel);

    // Parent Event
    divCard.appendChild(divEvent);
    divCard.appendChild(divEdit);
    divBox.appendChild(divCard);
    
    insertAfter(divBox,  document.getElementById('parent_box').lastElementChild);

    // console.log()
}

// ---------------------------------------------------
// -------------Remove Event Btn---------

btn_remove.forEach(element => {
    element.addEventListener('click',()=>{

        console.log("Click remove");
        // we use the `Array.from()` method to convert the `btn_remove` `NodeList` to an array, and 
        // then use the `indexOf()` method directly on the resulting array to get the index of the `box` element.

        const index = Array.from(btn_remove).indexOf(element);
        
        if (boxEvent[index]) {
            boxEvent[index].remove();
            --n;
            console.log('The Event are removed: box[' + index + ']');
        }
        boxEvent = document.querySelectorAll(".box");
        btn_remove = document.querySelectorAll(".del");
        console.log("Length boxEvent "+ boxEvent.length + "\n In Remove n = "+ n);
    })
});

// ---------------------------------------------------
// ------------------Close Btn--------------------
let close = document.querySelector('.close');
close.addEventListener('click', ()=>{
    formAdd.classList.add("active");
})

// ---------------------------------------------------
// --------------------Edit Btn----------------------

let formEdit = document.querySelector('.actionEditEvent').

btn_edit.forEach(element => {
    element.addEventListener('click', () =>{
        console.log("click edit");
        formEdit.classList.remove("active");
    })

})