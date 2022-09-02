export async function getThumbnailLink(book: string): Promise<string> {
  return await fetch("https://www.googleapis.com/books/v1/volumes?q=" + book)
    .then((response) => response.json())

    .then((value) => {
      if (value.items != null) {
        for (var i = 0; i < value.items.length; i++) {
          var item = value.items[i];

          if (item.volumeInfo.imageLinks != null) {
            return item.volumeInfo.imageLinks.thumbnail;
          }
        }
      }
    });
}
