// Menangani Q&A
document.querySelectorAll('.qa-question').forEach(question => {
  question.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    const icon = this.querySelector('.qa-icon');
    const isVisible = answer.style.display === 'block';

    // Toggle visibility of the answer
    answer.style.display = isVisible ? 'none' : 'block';
    // Toggle icon between plus and minus
    icon.textContent = isVisible ? '+' : '−';
  });
});

// Menangani filter galeri
document.querySelectorAll('.filter-button').forEach(button => {
  button.addEventListener('click', function() {
    const category = this.getAttribute('data-category');
    document.querySelectorAll('.gallery-item').forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

function openModal(img) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Fungsi untuk filter
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
