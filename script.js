document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
  });

  document.querySelector('#profile-img').addEventListener('mouseover', () => {
    document.querySelector('#profile-img').classList.add('ripple');
    setTimeout(() => document.querySelector('#profile-img').classList.remove('ripple'), 1000);
  });

  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });