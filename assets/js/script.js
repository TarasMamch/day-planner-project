var currentDate = document.getElementById('currentDay')
var currentTime = document.getElementsByClassName('textarea')
$('.textarea').css('background-color', 'grey')

currentDate.innerHTML = `${moment().format("dddd, MMMM Do YYYY")}`
currentTime.className += "present"

for (let i = 0; i < 24; i++) {
    let hour = $('.row')[i].children[0].innerText
    if (hour == moment().get('hour')) {
        $('.textarea')[i].attributes.style.value = 'background-color: red;'
    } else if (hour > moment().get('hour')) {
        $('.textarea')[i].attributes.style.value = 'background-color: green;'
    }
}

$('.saveBtn').on('click', function () {
    let text = $('.textarea')[this.value - 1].value
    localStorage.setItem(this.value - 1, text)
})

function setPage() {
    for (let i = 0; i < 24; i++) {
        const test = localStorage.getItem(i)
        $('.textarea')[i].value = test
    }
}

setPage()