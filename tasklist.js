const form = document.querySelector("#task-form")
const taskInput = document.querySelector("#task")
const addBtn = document.querySelector(".btn-success")
const filterInput = document.querySelector("#filter")
const liContainer = document.querySelector(".list-group")
const clearBtn = document.querySelector("#clear")


callEvents()

function callEvents() {

  document.addEventListener("DOMContentLoaded", loadTask)
  form.addEventListener('submit', addTask)
  liContainer.addEventListener("click", deleteTask)
  clearBtn.addEventListener("click", clearTask)
  filterInput.addEventListener("keyup", filterTask)
}

function loadTask() {
  let info;
  if (localStorage.getItem("tasks") === null) {
    info = []
  } else {
    info = JSON.parse(localStorage.getItem("tasks"))
  }
  info.forEach(eachTask => {
    let li = document.createElement("li")
    li.className = "list-group-item"
    li.appendChild(document.createTextNode(eachTask))
    let link = document.createElement("a")
    link.className = "delete-list float-right"
    link.innerHTML = "<i class='fa fa-window-close'></i>"
    li.appendChild(link)
    liContainer.appendChild(li)
  })
}
//add task
function addTask(e) {
  let task = taskInput.value
  if (task === '') {
    alert("Add a Task")
  } else {
    let li = document.createElement("li")
    li.className = "list-group-item"
    li.appendChild(document.createTextNode(task))
    let link = document.createElement("a")
    link.className = "delete-list float-right"
    link.innerHTML = "<i class='fa fa-window-close'></i>"
    li.appendChild(link)
    liContainer.appendChild(li)
  }

  localStore(task)

  e.preventDefault()
}

function localStore(task) {
  let info;
  if (localStorage.getItem("tasks") === null) {
    info = []
  } else {
    info = JSON.parse(localStorage.getItem("tasks"))
  }
  info.push(task)
  localStorage.setItem("tasks", JSON.stringify(info))
}






// deleteTask
function deleteTask(e) {
  if (e.target.parentElement.classList.contains("delete-list")) {
    if (confirm("Are you sure")) {
      e.target.parentElement.parentElement.remove()
    }
  }
  deletestoreItem(e.target.parentElement.parentElement)
}

function deletestoreItem(targetItem) {
  let info;
  if (localStorage.getItem("tasks") === null) {
    info = []
  } else {
    info = JSON.parse(localStorage.getItem("tasks"))
  }
  info.forEach((target, index) => {
    if (targetItem.textContent === target) {
      info.splice(index, 1)
    }
  })
  localStorage.setItem("tasks", JSON.stringify(info))
}

//clearTask
function clearTask() {
  // liContainer.innerHTML = ''
  //or
  while (liContainer.firstChild) {
    liContainer.removeChild(liContainer.firstChild)
  }

  clearStore()
}

function clearStore() {
  localStorage.clear()
}

//filter
function filterTask(e) {
  let text = e.target.value.toLowerCase()
  let items = document.querySelectorAll(".list-group-item")
  items.forEach(item => {
    let content = item.firstChild.textContent
    if (content.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block"
    }
    else {
      item.style.display = "none"
    }
  })
}

//or

//filterTask
// function filterTask(e){
//   let text = filterInput.value.toLowerCase()
//   let items = document.querySelectorAll(".list-group-item")
//   items.forEach(item=>{
//     let content = item.innerText
//     if (content.toLowerCase().indexOf(text) != -1) {
//       item.style.display = "block"
//     }
//     else{
//       item.style.display = "none"
//     }
//   })

// }

//localstorage
































// // console.log(123);

// // array
// let arr = ["string", 23, true, false]

// // arr[1] = "yes"
// // console.log(arr[4]);
// // console.log(arr.length);
// // let neww = arr.slice(1)
// // console.log(neww);
// // console.log(arr.slice(1));
// // console.log(arr);

// //slice splice, reduce, map, foreach, filter, find

// // let str = "olaitan"
// // str.slice(1)
// // console.log(str.slice(2));
// // function add(num){
// //   // let str = String(num)

// //   let numb = Array.from(num)
// //   console.log(numb);
// //   let res = numb.reduce(function(num, total){
// //     return num + total
// //   })
// //   console.log(res);


// // }
// // add(123)






// //object
// // key:value
// // function
// let obj = {
//   name:"Tolu",
//   age: 30,
//   hasChildren: true,
//   getBirthYear: function(num){
//     // alert(5)
//     return num
//   }
// }
// obj.myarr = [1,3,4,5,6,6,7]
// obj.childobj = {adress:'Lautech', dept:"chemical"}

// console.log(obj.getBirthYear(1997));

// let obj32 ={}
// obj32.name = "Blessing"
// console.log(obj);


// // localStorage
// let ary = [1,3,4,5,6,7,8,{name:"Blessing"}]
// localStorage.setItem("name", JSON.stringify(ary))
// let store = JSON.parse(localStorage.getItem("name"))
// console.log(store[7].name);
// // es6
// // Json
// //async await