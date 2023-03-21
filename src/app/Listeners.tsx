class Listeners {
  static run() {
    Listeners.search();
  }

  static search() {
    const input = document.querySelector('.searchInput') as HTMLInputElement;
    if (input)
      input.addEventListener('input', () => {
        localStorage.setItem('search', input.value);
      });
  }
}

export default Listeners;
