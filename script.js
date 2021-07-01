// Captures all element with id "time" and keeps it displaying an up-to-date time, to prevent the...
// ... page from being carelessly outdated.
const date = new Date();
const elements = document.querySelectorAll('span#date');
elements.forEach((elm) => (elm.innerHTML = `${date.getDate()}/${date.getMonth() + 1}`));
