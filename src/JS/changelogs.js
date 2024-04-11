addEventListener('DOMContentLoaded', () => {
  const $ = selector => document.querySelector(selector);
  const $home = $('#home');
  const $settings = $('#settings');
  const $versions = $('#versions');

  $home.addEventListener('click', () => {
    window.location.href = '../index.html';
  });

  $settings.addEventListener('click', () => {
    window.location.href = 'settings.html';
  });

  $versions.addEventListener('click', () => {
    window.location.href = 'versions.html';
  });
});
