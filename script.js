
let currentPage = 1;
let totalPages = 5;

const main = document.querySelector('.main');
const pageText = document.querySelector('.numOfPage');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

function renderData(page) {
  main.innerHTML = `<h2>You're viewing Page ${page}</h2>`;
  pageText.innerText = `Page ${page}`;

  prevBtn.disabled = page === 1;
  nextBtn.disabled = page === totalPages;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderData(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderData(currentPage);
  }
});

renderData(currentPage);
