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

  