function showImage(src) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');
    modal.style.display = 'block';
    modalImage.src = src;
  }
  
  function hideImage() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  