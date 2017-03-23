function makeSiema(selector, perPage) {
  const mySiema = new Siema({
      selector: selector,
      duration: 200,
      easing: 'ease-out',
      perPage: perPage,
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: false
  });
  return mySiema;
}

function setButtons(prevSelector, nextSelector,sliderSelector) {
  document.querySelector(prevSelector).addEventListener('click', () => sliderSelector.prev());
  document.querySelector(nextSelector).addEventListener('click', () => sliderSelector.next());
}

const siemaArticle = makeSiema('.siema-article', 1)
setButtons('.siema-article-prev','.siema-article-next',siemaArticle)
