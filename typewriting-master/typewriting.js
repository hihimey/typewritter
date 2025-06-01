class TextTyper {
  constructor(target) {
    this.target = target;
    this.wordList = JSON.parse(target.getAttribute('data-words')) || [];
    this.typingSpeed = Number(target.getAttribute('data-speed')) || 100;
    this.pauseDelay = Number(target.getAttribute('data-delay')) || 1000;
    this.shouldLoop = target.getAttribute('data-loop') === 'yes';
    this.displayed = '';
    this.index = 0;
    this.deleting = false;
    this.animate();
  }

  animate() {
    const word = this.wordList[this.shouldLoop ? this.index % this.wordList.length : this.index] || '';
    let interval = this.typingSpeed;

    if (this.deleting) {
      this.displayed = word.slice(0, this.displayed.length - 1);
      interval = Math.floor(this.typingSpeed / 2);
    } else {
      this.displayed = word.slice(0, this.displayed.length + 1);
    }

    this.target.innerHTML = `<span class="write">${this.displayed}</span><span class="blinking-cursor">|</span>`;

    if (!this.deleting && this.displayed === word) {
      if (!this.shouldLoop && this.index >= this.wordList.length - 1) return;
      this.deleting = true;
      interval = this.pauseDelay;
    } else if (this.deleting && this.displayed === '') {
      this.deleting = false;
      this.index++;
    }

    setTimeout(() => this.animate(), interval);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.typewrite').forEach(node => new TextTyper(node));
});
