function makeSiema(selector, perPage) {
  const mySiema = new Siema({
      selector: selector,
      duration: 200,
      easing: 'ease-out',
      perPage: perPage,
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: true
  });
  return mySiema;
}

function setButtons(prevSelector, nextSelector,sliderSelector) {
  document.querySelector(prevSelector).addEventListener('click', () => sliderSelector.prev());
  document.querySelector(nextSelector).addEventListener('click', () => sliderSelector.next());
}

const siemaScreen1 = makeSiema('.siema-screen1', 1);
setButtons('.prev-screen1','.next-screen1',siemaScreen1)

const siemaScreen4clients = makeSiema('.siema-screen4-clients', 4);
setButtons('.prev-screen4-clients','.next-screen4-clients',siemaScreen4clients)

const siemaScreen4partners = makeSiema('.siema-screen4-partners', 4);
setButtons('.prev-screen4-partners','.next-screen4-partners',siemaScreen4partners)

jQuery(window).on('resize', function() {
  if(jQuery(window).width() < 600) {
    console.log('wowowow');
    siemaScreen1.destroy(function() {
      console.log('well done');
    })
  }
})
