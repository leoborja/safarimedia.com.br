function scrollToView(element: string) {
  const $element = document.querySelector(element);

  if ($element) {
    $element.scrollIntoView({
      behavior: 'smooth',
    });
  }
}

export { scrollToView };
