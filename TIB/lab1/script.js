document.cookie = '["https://answit.com/wp-content/uploads/2017/01/full-hd.jpg", "https://mobimg.b-cdn.net/v3/fetch/ed/edac26d68cd821bf17c221c90128bc27.jpeg"]';
const imgs = JSON.parse(document.cookie);
img.src = imgs[0];

const onNextClicked = () => {
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = imgs[1];
    img.style.opacity = '1';
  }, 1000);
}

const onPrevClicked = () => {
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = imgs[0];
    img.style.opacity = '1';
  }, 1000);
}
