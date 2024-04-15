let countEl = document. getElementById("count-el")
let count = 0
let saveEl = document.getElementById('save-el')

function increment () {
count = count + 1
countEl.innerText= count}

function save() {
 saveEl.textContent += count + ", "
 count = 0;
 countEl.textContent = 0;

}


function reload() {
    location.reload()
}