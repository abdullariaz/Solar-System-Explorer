document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('menu-left-button').addEventListener('click', () => {
    alert('Celestial menu clicked - Add your menu logic here!');
  });

  document.getElementById('menu-right-button').addEventListener('click', () => {
    alert('Controls menu clicked - Add your control logic here!');
  });

  function updateLiveDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('live-date').textContent = now.toLocaleDateString(undefined, options);
  }
  updateLiveDate();
  setInterval(updateLiveDate, 1000 * 60 * 60);

  const baseCount = 59764;
  const visitsToday = Math.floor(Math.random() * 50);
  document.getElementById('visitor-count').textContent = `Total visits: ${baseCount + visitsToday}`;
});
