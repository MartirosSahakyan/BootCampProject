class Shiritori {
  constructor() {
    this.words = [];
    this.game_over = false;
  }

  play(word) {
    if (this.words.length === 0) {
      this.words.push(word);
      return this.words;
    }
    let lastWord = this.words[this.words.length - 1];
    let firstLetter = word[0];
    let lastLetter = lastWord[lastWord.length - 1];
    if (lastLetter !== firstLetter || this.words.some((el) => el === word)) {
      this.game_over = true;
      return "game over";
    }
    this.words.push(word);
    return this.words;
  }

  restart() {
    this.words = [];
    this.game_over = false;
    return "game restarted";
  }
}

const game = new Shiritori();

console.log(game.play("moskva"));
console.log(game.play("amsterdam"));
console.log(game.play("madam"));
console.log(game.play("moskva"));

console.log(game.restart());

console.log(game.play("apple"));
console.log(game.play("elon"));
console.log(game.play("moskva"));
