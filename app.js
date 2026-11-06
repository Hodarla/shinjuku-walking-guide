const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.spot-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach((card) => {
      card.hidden = filter !== 'all' && !card.dataset.tags.split(' ').includes(filter);
    });
  });
});

const routeButtons = document.querySelectorAll('[data-route]');
const routePanels = document.querySelectorAll('.route-panel');

routeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    routeButtons.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });
    routePanels.forEach((panel) => {
      panel.classList.remove('active');
      panel.hidden = true;
    });
    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');
    const panel = document.querySelector(`#route-${button.dataset.route}`);
    panel.hidden = false;
    panel.classList.add('active');
  });
});
