class TypeWriter {
  constructor(element) {
    this.element = element;
    this.words = JSON.parse(element.getAttribute('data-words')) || [];
    this.speed = parseInt(element.getAttribute('data-speed'), 10) || 100;
    this.delay = parseInt(element.getAttribute('data-delay'), 10) || 1000;
    this.loop = element.getAttribute('data-loop') === 'yes';
    this.currentText = '';
    this.wordIndex = 0;
    this.isDeleting = false;
    this.type();
  }

  type() {
    const currentWord = this.words[this.loop ? this.wordIndex % this.words.length : this.wordIndex] || '';
    let typeSpeed = this.speed;

    if (this.isDeleting) {
      this.currentText = currentWord.substring(0, this.currentText.length - 1);
      typeSpeed /= 2;
    } else {
      this.currentText = currentWord.substring(0, this.currentText.length + 1);
    }

    this.element.innerHTML = `<span class="write">${this.currentText}</span><span class="blinking-cursor">|</span>`;

    if (!this.isDeleting && this.currentText === currentWord) {
      if (!this.loop && this.wordIndex >= this.words.length - 1) return;
      this.isDeleting = true;
      typeSpeed = this.delay;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.wordIndex++;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.typewrite').forEach(el => new TypeWriter(el));
});
