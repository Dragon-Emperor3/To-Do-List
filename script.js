// const todoapp= document.getElementsByClassName('todo-app')
const inputBox= document.getElementById('input-box');
const listContainer= document.getElementById('list-container');

function addTask()
{
    if(inputBox.value=="")
        alert("Notes Cannot Be Empty!!");
    else{
        let li= document.createElement('li');
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);  
        let span= document.createElement('span');
        span.innerHTML='<i class="fa-solid fa-trash delete"></i>';
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
    localStorage.setItem('data',li.innerHTML);
}

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }        
    
    else if(e.target.tagName=== "I")
    {
        e.target.parentElement.parentElement.classList.add('slide');
        setInterval(()=>{e.target.parentElement.parentElement.remove();
            saveData();
        },600);

        
        
        // e.target.parentElement.parentElement.remove();
    }
    
            
}, false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function getData(){
    let data= localStorage.getItem("data");
    listContainer.innerHTML= data;
}

getData();

const filter= document.querySelector('#select');
filter.addEventListener('change', (e)=>{
    const todos= document.querySelectorAll('li');
    for(let i=0;i<todos.length;i++)
    {
        switch(e.target.value)
        {
            case "all":{
                todos[i].style.display="block";
                break;
            }
            case "completed":{
                if(todos[i].classList.contains('checked'))
                    todos[i].style.display="block";
                else    
                    todos[i].style.display="none";
                break;
            }
            case "incomplete":{
                if(!todos[i].classList.contains('checked'))
                    todos[i].style.display="block";
                else    
                    todos[i].style.display="none";
                break;
            }
        }
    }
});