// tabs for section Menu
function changeImage(imageId) {
    const img = document.getElementById('image');
    if (imageId === 'img1') {
      img.src = 'img/menu-img.png';
    } else if (imageId === 'img2') {
      img.src = 'img/menu-img2.png';
    } else if (imageId === 'img3') {
      img.src = 'img/menu-img3.png';
    }
  }