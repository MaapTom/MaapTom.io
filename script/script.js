const $menu = document.querySelector('.toggle');
const $menuItem = document.querySelector('.hamburguer');
const $navBar = document.querySelector('.navbar');
const $body = document.querySelector('body');

var popUP = document.querySelector('.pop-up');
var end = document.querySelector('.card-1');
var open = document.querySelector('.open');
var close = document.querySelector('.open span');
var end2 = document.querySelector('.card-2');
var open2 = document.querySelector('.open2');
var close2 = document.querySelector('.open2 span');
var end3 = document.querySelector('.card-3');
var open3 = document.querySelector('.open3');
var close3 = document.querySelector('.open3 span');
var end4 = document.querySelector('.card-4');
var open4 = document.querySelector('.open4');
var close4 = document.querySelector('.open4 span');
var vermais = document.querySelector('.btn-ver-mais');
var seta = document.querySelector('.btn-ver-mais img');


$menu.addEventListener('click',toggleMenu,false); 

var isOpen = false;
function toggleMenu(){
	if(!isOpen){
		$navBar.classList.add('menu-opened');
		$menuItem.classList.add('toggle-close');
		isOpen = true;
	}else {
		$navBar.classList.remove('menu-opened');
		$menuItem.classList.remove('toggle-close');
		isOpen = false;
	}
}

$body.addEventListener('click',navClick,false)

function navClick(evt){
	if(evt.target.tagName == 'A'){
		toggleMenu();
	}
}


end.onclick = function(){
	popUP.classList.add('isOpen');
	open.classList.add('openTrue');
  toggleMenuClose();
}
close.onclick = function(){
	popUP.classList.remove('isOpen');
	open.classList.remove('openTrue');
}


end2.onclick = function(){
	popUP.classList.add('isOpen');
	open2.classList.add('isOpen2');
  toggleMenuClose();
}
close2.onclick = function(){
	popUP.classList.remove('isOpen');
	open2.classList.remove('isOpen2');
}

end3.onclick = function(){
	open3.classList.add('isOpen3');
	popUP.classList.add('isOpen');
  toggleMenuClose();
}
close3.onclick = function(){
	open3.classList.remove('isOpen3');
	popUP.classList.remove('isOpen');
}

end4.onclick = function(){
  open4.classList.add('isOpen4');
  popUP.classList.add('isOpen');
  toggleMenuClose();
}
close4.onclick = function(){
  open4.classList.remove('isOpen4');
  popUP.classList.remove('isOpen');
}


// VER MAIS

var ativo = false;

vermais.onclick = function(){
  if(!ativo){
    end4.style.display = "block";
    seta.style.transform = "rotate(-180deg)";
    ativo = true;

  }else{
    end4.style.display = "none";
    seta.style.transform = "rotate(0deg)";
    ativo = false;
  }

}

// Scroll Suave 

const menuItems = document.querySelectorAll('a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth",
  // });
  smoothScrollTo(0, to);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};