class BookList {
  constructor(numRead, numNotRead, nextBook, currentBook, lastBook, arr) {
    this.numRead = numRead;
    this.numNotRead = numNotRead;
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.lastBook = lastBook;
    this.arr = arr;
  }

  add(book) {
    this.arr.push(book);
  }
  finishCurrentBook() {
    this.numRead++;
    this.numNotRead--;
    this.currentBook.read = true;
    this.currentBook.readDate = Date(Date.now());
    this.lastBook = this.currentBook;
    this.currentBook = this.nextBook;
    for (let book of this.arr) {
      if (book.read === false) {
        this.nextBook = book;
        return;
      }
    }
  }
}

class Book {
  constructor(title, genre, author, read, readDate) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = readDate;
  }
}
