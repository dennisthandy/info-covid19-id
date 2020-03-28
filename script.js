const to = document.querySelector('.to');
const confirmed = document.querySelector('#confirmed');
const deaths = document.querySelector('#deaths');
const recovered = document.querySelector('#recovered');
const datas = document.querySelectorAll('.datas');

fetch("https://corona.lmao.ninja/countries/Indonesia")
  .then(response => response.json())
  .then(data => {
    if (data != undefined) {
      to.style.animation = 'none';
      datas.forEach((item, i) => {
        item.style.animation = 'none';
      });
      to.innerHTML = formatDate();
      confirmed.innerHTML = data.cases;
      deaths.innerHTML = data.deaths;
      recovered.innerHTML = data.recovered;
    }

});

function formatDate() {
  var today = new Date();
  var dd = String(today.getDate().padStart(2, '0'));
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;
  return today;
}
