# Age Calculator App

This is a solution to the Age Calculator App challenge on Frontend Mentor. The objective is to create a simple web app that takes a user's date of birth and calculates their age in years, months, and days. This challenge allows you to practice form validation, date calculation, and responsive design.

## Table of Contents
- [Overview](#overview)
- [The Challenge](#the-challenge)
- [Try These](#try-these)
- [Links](#links)
- [My Process](#my-process)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
### The Challenge
Users should be able to:
- Input their date of birth and view their exact age in years, months, and days.
- Receive validation errors if:
    - Any input field is empty when the form is submitted.
    - The day number is not between 1-31.
    - The month number is not between 1-12.
    - The year is in the future.
    - The date is invalid (e.g., 31st of April).
- View the responsive layout based on the screen size.
- **Bonus**: Age numbers animate to their final count when the form is submitted.

## Try these (Test Cases)
Here are the test cases covered by the program:

1. **Day greater than 31 or Month greater than 12**:
    - Input: Day = 32, Month = 13, Year = 2023
    - Expected Output: Error message indicating invalid day or month.

2. **Day 31 for months with 30 or fewer days**:
    - Input: Day = 31, Month = 4, Year = 2023
    - Expected Output: Error message indicating the month has only 30 days.

3. **Day 29 or greater for February (non-leap year) and Day 30 for February (leap year)**:
    - Input: Day = 30, Month = 2, Year = 2023
    - Expected Output: Error message indicating February has only 28 days in non-leap years.
    - Input: Day = 30, Month = 2, Year = 2024
    - Expected Output: Error message indicating February of leap year has only 29 days.

4. **Year in the future**:
    - Input: Day = 15, Month = 8, Year = 2025
    - Expected Output: Error message indicating year cannot be in the future.

5. **Future month of the current year**:
    - Input: Day = 10, Month = 12, Year = Current Year (e.g., 2023, if current month is 9)
    - Expected Output: Error message indicating month cannot be in the future.

6. **Future day of the current year and month**:
    - Input: Day = 30, Month = Current Month, Year = Current Year (if today is 15th)
    - Expected Output: Error message indicating day cannot be in the future.

7. **Decimal, alphanumeric, or special characters**:
    - Input: Day = 12.5, Month = '@', Year = '202X'
    - Expected Output: Error message indicating invalid characters.

8. **Zero for Day, Month, and Year**:
    - Input: Day = 0, Month = 0, Year = 0
    - Expected Output: Error message indicating day, month, and year cannot be zero.

9. **Empty input for any field**:
    - Input: Day = '', Month = '', Year = ''
    - Expected Output: Error message indicating no fields can be left empty.


# Age-Calculator-app
## Features
- Validates day, month, and year inputs.
- Checks for leap years and ensures February has the correct number of days.
- Prevents future dates from being entered.
- Handles invalid characters and empty inputs.
- Provides error messages for various invalid input scenarios.

## Validations
The following validations are included in the program:

- **Month Validation**: Ensures the month entered is between 1 and 12.
- **Day Validation**: Ensures the day is appropriate for the given month.
- **February Validation**: Handles leap years correctly by ensuring February has 29 days in leap years and 28 days otherwise.
- **Future Year Validation**: Prevents future years from being entered.
- **Current Year Month Validation**: Prevents future months of the current year from being entered.
- **Current Year and Month Day Validation**: Prevents future days of the current month and year from being entered.
- **Character Validation**: Prevents the use of decimals, alphanumeric, or special characters in the date fields.
- **Zero Validation**: Ensures the day, month, and year values cannot be zero.
- **Empty Input Validation**: Ensures none of the inputs are left empty.


## Links
- Solution URL: [Solution URL](https://github.com/Tabish0101/Age-Calculator-app)
- Live Site URL: [Age Calculator App URL](https://age-calculator-tabishjeelani.netlify.app/)

## My Process
### Built With
- Semantic HTML5
- CSS (Flexbox, Grid, custom properties)
- JavaScript
- Mobile-first design

## What I Learned
In this project, I learned how to handle real-time form validation, live error display, and calculations for date differences using JavaScript. The biggest takeaway was ensuring form fields only accept valid input and calculating leap years to handle February correctly. 

## Useful resources

- **MDN Web Docs** - Helped with understanding the Date object and calculating age from input values.
- **CSS Tricks** - Provided great insight into responsive design and layout techniques using Flexbox and Grid.
- **Kevin Paul** - YouTube channel for CSS.

## Author

- **GitHub** - [Tabish Jeelani](https://github.com/Tabish0101)
- **Frontend Mentor** - [@Tabish0101](https://www.frontendmentor.io/profile/Tabish0101)

## Acknowledgments

Special thanks to the Frontend Mentor community for providing such interesting and practical challenges! This project helped me reinforce my knowledge in JavaScript and form handling.


## How to Run
1. Clone the repository.
2. Open the `index.html` file in any browser.
3. Enter a date and click the "Validate" button to check the validity of the entered date.
4. Based on the input, the program will display either a success or an error message.

---
