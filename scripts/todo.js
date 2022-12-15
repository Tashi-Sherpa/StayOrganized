


window.onload = function(){
    dropdownList()
    let list = document.getElementById("userSelect")
    list.onchange= displayUser

}


function dropdownList(){
    let users = document.getElementById("userSelect")
    fetch("http://localhost:8083/api/users")


.then(response=>response.json())
.then(data=>{
    for(let user of data )
    {
        let option = document.createElement("option")
        option.value = user.id
        option.textContent = user.name
        userSelect.appendChild(option)
    }
})

}

function displayUser(){
    let display = document.getElementById("displayList")
    let list = document.getElementById("userSelect").value

    fetch("http://localhost:8083/api/todos")
    .then(response=>response.json())
    .then(data=>{
        for(let user of data )
        {
            if(list == user.id){
                display.innerHTML = "<span style='color: Red ; '> Catergory: </span>" 
                + user.category + "<br />" + "<span style='color: Red ; '> Description : </span>"
                 + user.description + "<br />" + "<span style='color: Red ; '> Deadline : </span>" + user.deadline + "<br />" + "<span style='color: Red ; '> Priority : </span>" + user.priority + "<br />" + "<span style='color: Red ; '> Completed : </span>" + user.completed;

               
            }
             else if(list == ""){

             display.innerHTML = ""
            }
        }
    })
    
    }

    // Category: "Personal Task"
//  Description: "Finish studying for ENG 211 exam"
//  Deadline: "2022-12-15"
//  Priority: "Medium"





