function adjustIconHeight(textarea) {
  const icon = textarea.previousElementSibling;
  icon.style.height = `${textarea.clientHeight}px`;
}

adjustIconHeight();
