
async function getUser(place) {
    const api_url = `https://timezone.abstractapi.com/v1/current_time/?api_key=aee7c2acfc954821b7cf68e71921acef&location=${place}`
    
    const response = await fetch(api_url);
    
    const data = await response.json();
    
    time = await data.datetime
    document.getElementById("time").innerText = `${place}'s time = ${time} ${data.timezone_abbreviation}`

}



document.querySelectorAll(".allPaths").forEach(e => {
e.addEventListener("mouseover", function () {
    window.onmousemove=function (j) {
        x = j.clientX
        y = j.clientY
        document.getElementById('name').style.top = y-60  + 'px'
        document.getElementById('name').style.left = x +10 + 'px'
    }
    
    e.style.fill = "#fda643"
    document.getElementById("name").style.opacity = 1
    
    document.getElementById("namep").innerText = e.id
})
e.addEventListener("mouseleave", function () {
    e.style.fill = "#ececec"
    document.getElementById("name").style.opacity = 0
})

e.addEventListener("click",function(){
    getUser(e.id)
})

})

