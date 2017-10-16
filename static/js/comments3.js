class Comments {
    constructor(postId, tbodyId = 'comments', formId = 'commentsform') {
        this.comments = JSON.parse(localStorage[postId] || '[]')
        this.tbodyId = tbodyId
        this.formId = formId
        this.postId = postId
    }

    display() {
        document.getElementById(this.tbodyId).innerHTML = this.comments.reduce((str, comment, i) => {
            return str + `<tr id="row${i+1}"><td>${comment.name}</td><td>${comment.msg}</td></tr>`
        }, '')
        //how this works for object?
    }

    store() {
        let comment = document.getElementById(this.formId)
        let name = comment.elements.namedItem("name").value
        let msg = comment.elements.namedItem("message").value
        if(name!=""&&msg!=""){
        this.comments.push({
            name,
            msg
        })
        //Here is a object? How can I store it into HTML
        localStorage[this.postId] = JSON.stringify(this.comments)

        let tbody = document.getElementById(this.tbodyId)
        let n = tbody.children.length
        tbody.innerHTML += `<tr id="row${n+1}"><td>${name}</td><td>${msg}</td></tr>`
    }
    else{
        alert("Please fill in the blanks");
    }

        event.preventDefault()
    }
}

let comments = new Comments(document.querySelector('title').innerHTML)
//here I set a new object comments? And when I called the function, I should use comments.store?
// with the Id of Blog 1?