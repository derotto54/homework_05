let now = 0
let curTime = 2
let slotTime = 1
let timeArray =['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
var timeBlock = document.getElementsByClassName('list-group-item')

//Todays date for header
now = moment().format("dddd MMMM Do YYYY")
document.getElementById('now').innerText = now

//Set the color of the schedule based on the current time
curTime =moment().format('HH')
for (var i = 0; i < timeArray.length; i++) {
    if (curTime > timeArray[i] ) {
        document.getElementById(timeArray[i]).className += ' list-group-item-danger'
    } else if (curTime == timeArray[i]) {
        document.getElementById(timeArray[i]).className += ' list-group-item-primary'
    }
}

//Prompts user input for schedule and saves to local storage
var myAlert = function () {
    var attribute = this.getAttribute('id')
    console.log('myAlert')
    var myEventText = prompt('Set your event here')
    if (myEventText != null) {
        localStorage.setItem(attribute, myEventText)
    }
    refreshSchedule()
}

//Listens for clicks and specifies the element clicked
for (var i = 0; i < timeBlock.length; i++) {
    timeBlock[i].addEventListener('click', myAlert)
}

//Read the Local Storage and set the schedule

var setSchedule = function() {
    for (var i = 0; i < timeArray.length; i++) {
        var e = document.getElementById(timeArray[i])
        e.appendChild.innerHTML = localStorage.getItem(timeArray[i])
    }
}

//Add the users schedule to the DOM 
var refreshSchedule = function() {
    for (var i = 0; i < timeArray.length; i++) { 
        var scheduleEl = document.createElement('h5')
        scheduleEl.classList = 'mb-1 scheduleText'
        var scheduleTextEl = document.createElement('span')
        scheduleTextEl.textContent = localStorage.getItem(timeArray[i])
        scheduleEl.appendChild(scheduleTextEl)
        document.getElementById(timeArray[i]).appendChild(scheduleEl)
        setSchedule()
        var list = document.getElementById(timeArray[i])
        list.removeChild(list.childNodes[4])
    }
}
refreshSchedule()