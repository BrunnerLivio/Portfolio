export function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className = `${el.className} ${className}`; // eslint-disable-line no-param-reassign
  }
}

export function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'), ' '); // eslint-disable-line no-param-reassign
  }
}

export function offset(el) {
  // Firefox workaround
  const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  return {
    top: el.getBoundingClientRect().top + bodyScrollTop,
  };
}
