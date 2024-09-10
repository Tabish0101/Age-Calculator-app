console.log('Welcome to Age calclator')

// Input Tags
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

// Submit button and output text
const submitButton = document.getElementById('submit-btn');
const outputYears = document.getElementById('optput__y');
const outputMonths = document.getElementById('optput__m');
const outputDays = document.getElementById('optput__d');

// Error texts
const yearError = document.getElementById('year-error');
const monthError = document.getElementById('month-error')
const dayError = document.getElementById('day-error')

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        submitButton.click();
    }
})

// Year
year.addEventListener('focus', () => {
    year.style.outline = "none";
})
year.addEventListener('keyup', (event) => {
    liveDetectionOfNaN(year, yearError, event);
})

// Month
month.addEventListener('focus', () => {
    month.style.outline = "none";
})
month.addEventListener('keyup', (event) => {
    liveDetectionOfNaN(month, monthError, event);
})

// Day
day.addEventListener('focus', () => {
    day.style.outline = "none";
})
day.addEventListener('keyup', (event) => {
    liveDetectionOfNaN(day, dayError, event);
})

submitButton.addEventListener('click', () => { 
    // RESET visivility of error text
    yearError.style.display = "none";
    monthError.style.display = "none";
    dayError.style.display = "none";

    // RESET outline of input tags
    year.style.outline = "none";
    month.style.outline = "none";
    day.style.outline = "none";

    // RESET age output text 
    outputYears.innerText = "--";
    outputMonths.innerText = "--";
    outputDays.innerText = "--";

    getDataFromInput();
})

function getDataFromInput(){

    const objectDOB = {
        day: day.value,
        month: month.value,
        year: year.value
    }

    // if DOB is valid the calculate age
    if(checkValidity(objectDOB)){
        if(checkConditionallyInvalidDates(objectDOB)){
            // claculate the age after adjusting leading zeros
            calculateAndDisplayAge(adjustAgeForLeadingZeros(objectDOB));
        }
    }

}// end of checkValidity() fuunction

function checkValidity(objectDOB){
    const date = new Date();

    // checks for missing entries
    if(objectDOB.year === "" || objectDOB.month === "" || objectDOB.day === "")
    {
        if(objectDOB.year === ""){
            yearError.innerText = "*This is required";
            yearError.style.display = "inherit";
            year.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";
        }
        if(objectDOB.month === ""){
            monthError.innerText = "*This is required";
            monthError.style.display = "inherit";
            month.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";
        }
        if(objectDOB.day === ""){
            dayError.innerText = "*This is required";
            dayError.style.display = "inherit";
            day.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";
        }
    }
    else if(objectDOB.year <= 0 || objectDOB.month > 12 || objectDOB.month <= 0 || objectDOB.day > 31 || objectDOB.day <= 0){    // checks for Invalid entries
        // checks for Invalid year
        if(objectDOB.year <= 0){
            yearError.innerText = "Invalid Year!";
            yearError.style.display = "inherit";
            year.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";
        }
        // checks for Invalid month
        if(objectDOB.month > 12 || objectDOB.month <= 0){
            monthError.innerText = "Invalid Month!";
            monthError.style.display = "inherit";
            month.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";
        }
        // checks for Invalid day
        if(objectDOB.day > 31 || objectDOB.day <= 0){
            dayError.innerText = "Invalid Day!";
            dayError.style.display = "inherit";
            day.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";
        }
    }
    else if(objectDOB.year >= date.getFullYear()){
        // checks for dates entered in FUTURE
        if(objectDOB.year >= date.getFullYear()){
            if(objectDOB.year > date.getFullYear()){
                yearError.innerText = "Must be in past";
                yearError.style.display = "inherit";
                year.style.outline = " 1.5px solid hsla(0, 100%, 50%, 1)";
            }
            else if(objectDOB.year == date.getFullYear()){
                if(objectDOB.month >= date.getMonth() + 1){
                    if(objectDOB.month > date.getMonth() + 1){
                        monthError.innerText = "Must be in past";
                        monthError.style.display = "inherit";
                        month.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";
                    }
                    else if(objectDOB.month == date.getMonth() + 1){
                        if(objectDOB.day > date.getDay()){
                            dayError.innerText = "Must be in past";
                            dayError.style.display = "inherit";
                            day.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";
                        }
                        else return true;
                    }
                    else return true;
                }
                else return true;
            }
        } else return true;
    }
    else return true;
    
    
} // end of checkValidity() fuunction

function checkConditionallyInvalidDates(objectDOB){
    // check for invalid dates like 30th Feb, 31st April and so on

    // First check for LEAP YEARS
    let leapYear;
    if((objectDOB.year)%4 == 0){
        leapYear = 1;
    }
    else{
        leapYear = 0;
    }

    // check for MONTHS Feb->2, April->4, June->6, Sep->9, Nov->11
    if(objectDOB.month == 2 || objectDOB.month == 4 || objectDOB.month == 6 || objectDOB.month == 9 || objectDOB.month == 11){
        if(objectDOB.month == 2){  
            if(objectDOB.day > 28 + leapYear){
                dayError.innerText = "Invalid Day!";
                dayError.style.display = "inherit";
                day.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";
                if(leapYear == 1){
                    dayError.innerHTML = `${dayError.innerText} <br> Feb has 29 Days in a Leap Year.`;
                    return false;
                }
                else{
                    dayError.innerHTML = `${dayError.innerText} <br> Feb has 28 Days.`;
                    return false;
                }
            }
            else return true;
        }
        else{
            if(objectDOB.day > 30){
                dayError.innerHTML = "Invalid Day! <br> This month has 30 days.";
                dayError.style.display = "inherit";
                day.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";
                return false;
            }
            else return true;
        }
    }return true;

} // end of checkSpecificInvalidDates() fuunction

function adjustAgeForLeadingZeros(objectDOB){
    let adjustedObjectDOB = {...objectDOB}
    if(objectDOB.day.length == 1){
        adjustedObjectDOB.day = '0' + adjustedObjectDOB.day
    }
    if(objectDOB.month.length == 1){
        adjustedObjectDOB.month = '0' + adjustedObjectDOB.month
    }
    if(objectDOB.year.length < 4){
        const numberOfZeros = 4 - objectDOB.year.length
        for(let i=0; i<numberOfZeros; i++){
            adjustedObjectDOB.year = '0' + adjustedObjectDOB.year;
        }
    }
    return adjustedObjectDOB
} // end of adjustAgeForLeadingZeros() fuunction

function calculateAndDisplayAge(objectDOB){
    const currentDate = Date.now();

    let dateString = `${objectDOB.year}-${objectDOB.month}-${objectDOB.day}T00:00:00`
    const pastDate = new Date(dateString);
    const milliseconds = currentDate - pastDate; 

    if(milliseconds.toString() == "NaN"){
        dayError.innerText = "Please enter Integers only";
        dayError.style.display = "inherit";
        day.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";

        monthError.innerText = "Please enter Integers only";
        monthError.style.display = "inherit";
        month.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";

        yearError.innerText = "Please enter Integers only";
        yearError.style.display = "inherit";
        year.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";
    }else{
        const ageYears = milliseconds/(365.25*24*60*60*1000)
        const ageMonths = (ageYears-(Math.floor(ageYears)))*12;
        const ageDays = (ageMonths-(Math.floor(ageMonths)))*30.437;
    
        outputYears.innerText = Math.floor(ageYears);
        outputMonths.innerText = Math.floor(ageMonths);
        outputDays.innerText = Math.floor(ageDays);
    }


} // end of calculateAndDisplayAge() fuunction

function liveDetectionOfNaN(targetObject, targetTag, e){
    if(e.key !== 'Enter'){
        if(isNaN(targetObject.value)){
            targetTag.innerHTML = `NaN, <br> Please enter Numbers only`;
            targetTag.style.display = "inherit";
            targetObject.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";
        }
        else if(targetObject.value.includes('.')){
            targetTag.innerHTML = `Please enter Integers only`;
            targetTag.style.display = "inherit";
            targetObject.style.outline = "1.5px solid hsla(0, 100%, 50%, 1)";
        }
        else{
            targetTag.style.display = "none";
            targetObject.style.outline = "none";
        }
    }
}