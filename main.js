let nameEl = document.getElementById("book-name")
let author = document.getElementById("author")
let bookId = document.getElementById("id")
let submitBtn = document.getElementById("submit")

let display = document.querySelector(".display")
let noti = document.querySelector(".noti")
let del = document.querySelector(".del")

let bookList = []

let bookData = JSON.parse(localStorage.getItem("books"))
// console.log(bookData)

if(bookData){
    bookList = bookData
}

submitBtn.addEventListener("click", ()=>{
    if(nameEl.value && author.value && bookId.value){
        makeList()
    
        nameEl.value = ""
        author.value = ""
        bookId.value = ""
    
        displayList(bookList)
        doneMsg()
    }else{
        inputErr()
    }
})

function makeList(){
    bookList.push({"name": nameEl.value, "author": author.value, "id": bookId.value})
    localStorage.setItem("books", JSON.stringify(bookList))
}   

function displayList(e){
    let displayItems = ""
    for(let i=0; i < e.length; i++){
        displayItems += `<li class="${i}">
                            <span>${e[i].name}</span>
                            <span>${e[i].author}</span>
                            <span>${e[i].id}</span>
                        </li>`
    }
    display.innerHTML = displayItems
}

del.addEventListener("click", ()=>{
    localStorage.clear()
    bookList=[]
    displayList(bookList)
})

function inputErr(){
    noti.textContent = "Write down all the inputs before submiting"
    noti.classList.add("err")

    setTimeout(() => {
        noti.classList.remove("err")
    }, 3000);
}

function doneMsg(){
    noti.textContent = "✔ Successfully added to the list"
    noti.classList.add("done")

    setTimeout(() => {
        noti.classList.remove("done")
    }, 3000);
}
