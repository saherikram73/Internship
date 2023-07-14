const tasks = []
const Add = () => {
    let inputFieldValue = document.getElementById("input_field").value 
    // document.getElementById("listOfTasks").innerHTML = inputFieldValue;
   
    const newTask = document.createTextNode(inputFieldValue);
    tasks.push(inputFieldValue); 

    var listTask = document.createElement("li");
    listTask.appendChild(newTask);
    if (inputFieldValue === '') {
      alert("Please write something!");
    } else {
        document.getElementById("listOfTasks").appendChild(listTask);
        }
    
    document.getElementById("input_field").value = "";
    let DeleteButton = document.createElement("BUTTON");
    let txt = document.createTextNode("Delete");
    DeleteButton.className = "close btn-danger";
    DeleteButton.style.marginLeft = "50px";
    DeleteButton.appendChild(txt);
    listTask.appendChild(DeleteButton);
    DeleteButton.addEventListener('click', () => {
        listTask.remove();
    });
    
    var listOfTasks = document.getElementById("listOfTasks");
    listOfTasks.addEventListener("click", (event)=>{
            console.log("first")
            
            event.target.style.textDecoration = "line-through";
            
              
            }); 
    
}

const Search = () =>{
    
    
let inputFieldValue = document.getElementById("input_field").value 
// for (let index = 0; index < tasks.length; index++) {
//     console.log(typeof inputFieldValue,typeof tasks[index])
//     if(!(inputFieldValue == tasks[index])){
//         listTask.remove();
    
//     }
  let ul, li, a, i, txtValue;
  let upper = inputFieldValue.toUpperCase();
  ul = document.getElementById("listOfTasks");
  li = ul.getElementsByTagName('li');

  
  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(upper) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
    

}

