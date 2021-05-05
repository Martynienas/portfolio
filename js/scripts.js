let yearSpan = document.querySelector('#current-year');
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
yearSpan.textContent = currentYear