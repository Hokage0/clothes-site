let icon  = document.getElementById("bar-icone");
let meanu = document.getElementById("nav_list");
let close = document.getElementById("close")

if(icon) {
    icon.addEventListener('click', () => {
        meanu.classList.add("active")
    })
}  
if (close) {
    close.addEventListener('click', () => {
        meanu.classList.remove("active")
    })
}