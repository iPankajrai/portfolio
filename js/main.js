/* -------------------- About Section tabs -------------------- */
(() =>{
		// console.log('Hello World!');
		const aboutSection = document.querySelector(".about-section"),
			tabsContainer = document.querySelector(".about-tabs");
			tabsContainer.addEventListener("click", (event) => {
				/* if event.target contains 'tab-item' class and not contains 'active' class */ 
				if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
					/* console.log("event.target contains 'tab-item' class and not contains 'active' class ");
					console.log(event.target); */
					const target = event.target.getAttribute("data-target");
					// console.log(target);
					// deactivate existing active 'tab-item'
					tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
					// activate new 'tab-item'
					event.target.classList.add("active", "outer-shadow");
					// deactivate existing active 'tab-content'
					aboutSection.querySelector(".tab-content.active").classList.remove("active");
					// activate the 'tab-content'
					// console.log(aboutSection.querySelector(target));
					aboutSection.querySelector(target).classList.add("active"); 
				}
			})
})();

/* ------------------------ Portfolio filter and popup -------------------------*/
(() => {

	const filterContainer = document.querySelector(".portfolio-filter"),
		portfolioItemsContainer = document.querySelector(".portfolio-items"),
		portfolioItems = document.querySelectorAll(".portfolio-item"),
		popup = document.querySelector(".portfolio-popup"),
		prevBtn = popup.querySelector(".pp-prev"),
		nextBtn = popup.querySelector(".pp-next"),
		closebtn = popup.querySelector(".pp-close"),
		projectDetailsContainer = popup.querySelector(".pp-details"),
		projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
		let itemIndex, slideIndex, screenshots;

		/* filter portfolio items */
		filterContainer.addEventListener("click", (event) => {
			// console.log(event.target);
			if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active")){
				// console.log("true");
				// deactivate existing active 'filter-item'
				filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
				// activate new 'filter-item'
				event.target.classList.add("active", "outer-shadow");
				const target = event.target.getAttribute("data-target");
				// console.log(target);
				portfolioItems.forEach((item) => {
					// console.log(item);
					// console.log(item.getAttribute("data-category"));
					if(target === item.getAttribute("data-category") || target === "all"){
						item.classList.remove("hide");
						item.classList.add("show");
					}
					else{
						item.classList.remove("show");
						item.classList.add("hide");
					}
				})

			}
			else{
				// console.log("false");
			}
			// console.log(event.target);
		}) 


})();