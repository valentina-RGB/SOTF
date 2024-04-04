const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const button = item.querySelector('.accordion-button');
  
  button.addEventListener('click', () => {
    const content = item.querySelector('.accordion-content');
    
    item.classList.toggle('active'); // Toggle active class on item
    content.classList.toggle('show'); // Toggle show class on content
  });
});
