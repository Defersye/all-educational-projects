const play = document.querySelector(".about_play")
const video = document.querySelector(".about_video video")

play.addEventListener("click", () => {
	video.play()
	video.setAttribute("controls", "controls")
	play.classList.add("about_play--hidden")
})
