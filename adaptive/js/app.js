const nav = document.querySelector("#nav")
const navBtn = document.querySelector("#nav_btn")
const navBtnImg = document.querySelector("#nav_btn_img")

navBtn.onclick = () => {
	if (nav.classList.toggle("opened")) {
		navBtnImg.src = "../img/icons/nav-closed.svg"
	} else {
		navBtnImg.src = "../img/icons/nav-opened.svg"
	}
}

AOS.init({
	// disable: 'phone';
	once: true,
})
