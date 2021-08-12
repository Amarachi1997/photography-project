
//navigation bar initialization
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

//testimonials carousel initialization
var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });

  //copyright

  let date = document.querySelector(".copyrightYear");
  let fullDate = new Date().getFullYear();
  console.log(fullDate)
  date.innerHTML = fullDate