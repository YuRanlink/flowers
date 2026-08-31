document.addEventListener('DOMContentLoaded', () => {
  const introScreen = document.getElementById('introScreen');
  const openBtn = document.getElementById('openBtn');

  openBtn.addEventListener('click', () => {
    introScreen.classList.add('intro-screen--hide');
    document.body.classList.remove('container');

    // Hapus intro dari DOM setelah transisi fade-out selesai
    setTimeout(() => {
      introScreen.remove();
    }, 800);
  });
});