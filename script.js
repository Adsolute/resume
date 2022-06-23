const animateItems = document.querySelectorAll('.-animate')
const resultingMass = []

if (animateItems.length > 0) {

	window.addEventListener('scroll', animOnScroll)

	function animOnScroll() {
		for (let index = 0; index < animateItems.length; index++) {
			// console.log(animateItems[index])
			const animateItem = animateItems[index];
			const animHeight = animateItem.offsetHeight;
			const animOffset = offset(animateItem).top;
			const animStart = 4;




			let animateItemPoint = window.innerHeight - animHeight / animStart

			resultingMass.push(animateItem, animHeight + ' ' + 'animHeight', animOffset + ' ' + 'animOffset', window.innerHeight + ' ' + 'window.innerHeight', animateItemPoint + ' ' + 'animateItemPoint')

			if (animHeight > window.innerHeight) {
				animateItemPoint = window.innerHeight - window.innerHeight / animStart

			}

			// console.log(resultingMass)



			if ((scrollY > animOffset - animateItemPoint) && scrollY < (animOffset + animHeight)) {
				animateItem.classList.add('-active')
			} else {
				// animateItem.classList.remove('-active')
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop
		console.log(rect + ' ' + rect.top + scrollTop)
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll()
	}, 1000);
}