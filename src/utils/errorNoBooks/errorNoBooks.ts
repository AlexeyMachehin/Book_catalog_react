export let errorNoBooks = document.querySelector<HTMLElement>(".error-no-books");

export function showMessage(): void {
  errorNoBooks.classList.add("error-no-books__done");
  setTimeout(() => {
    errorNoBooks.classList.remove("error-no-books__done");
  }, 3000);
}
