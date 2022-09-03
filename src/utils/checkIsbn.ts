export async function checkIsbn(isbn: string): Promise<string> {
  if (isbn != "") {
    return await fetch(`https://openlibrary.org/isbn/${isbn}.json`).then(
      (response) => {
        if (response.ok) {
          return isbn + "✔️";
        } else {
          return isbn + "❌";
        }
      }
    );
  } else {
    return isbn;
  }
}
