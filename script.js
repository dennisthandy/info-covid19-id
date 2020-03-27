const to = document.querySelector('.to');
const confirmed = document.querySelector('#confirmed');
const deaths = document.querySelector('#deaths');
const recovered = document.querySelector('#recovered');

fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(data => {
    let indonesia = data["Indonesia"];
    console.log(indonesia)
    let update = indonesia[indonesia.length - 1];
    to.innerHTML = formatDate(update.date);
    confirmed.innerHTML = update.confirmed;
    deaths.innerHTML = update.deaths;
    recovered.innerHTML = update.recovered;
});

function formatDate(date) {
  let year = date.slice(0,4);
  let month = (date.slice(5,6) < 10) ? ('0' + date.slice(5,6)) : (date.slice(5,6));
  let day = (date.slice(7) < 10) ? ('0' + date.slice(7)) : (date.slice(7));
  return day + '/' + month +'/' +year;
}
