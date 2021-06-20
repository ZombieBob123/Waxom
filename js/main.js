	/* Slider */
	const slider = document.querySelector(".slider_block");
	let offSet = 0;

		document.querySelector(".slider_next").addEventListener("click", function () {
			offSet = offSet + 1150;
			if (offSet > 2550) {
				offSet = 0;
			}
			slider.style.left = -offSet + "px";
		})	

		document.querySelector(".slider_prev").addEventListener("click", function () {
			offSet = offSet - 1150;
			if (offSet < 0) {
				offSet = 2300;
			}
			slider.style.left = -offSet + "px";
		})

	/* Filter */	

	

	
	function app() {
		const buttons = document.querySelectorAll(".button_filter");
		const cards = document.querySelectorAll(".filter_content");

		function filter (category, items) {
			items.forEach((item) => {
				const isItem = !item.classList.contains(category);
				const isCardAll = category == "All";

				if (isItem && !isCardAll) {
					item.classList.add("active");
				}

				else {
					item.classList.remove("active");
				}
 

			})
		}

		buttons.forEach((button) => {
			button.addEventListener("click", () => {
				const currentCategory = button.dataset.filter;
				filter(currentCategory, cards);
			});
		});

	}

	app();

	

	let video = document.querySelector(".presentation_video");
	let video_remove = document.querySelector(".video");
	let video_delet = document.querySelector(".video_remove");

	video_remove.addEventListener("click", function () {
		video.classList.remove("hide");
	});	

	video_delet.addEventListener("click", function () {
		video.classList.add("hide");
	});	


	/* Slider blog */	

	let container_blog = document.querySelector(".blogs_inner");
	let offset2 = 0;

	document.querySelector(".blogs_next").addEventListener("click", function (){
		offset2 = offset2 + 370;
		
		if (offset2 >  1300) {
			offset2 = 0;
		}

		container_blog.style.left = -offset2 + "px";

	});	

	document.querySelector(".blogs_prev").addEventListener("click", function (){
		offset2 = offset2 - 365;
		
		if (offset2 < 0) {
			offset2 = 1100;
		}

		container_blog.style.left = -offset2 + "px";

	});


	let block_more = document.querySelector(".block_more");
	let button_more = document.querySelector(".button_more");
	let filter_container = document.querySelector(".filter_container");

	button_more.addEventListener("click", function(){
		if (block_more.classList.contains("hide")) {
			block_more.classList.remove("hide");
			filter_container.classList.add("height");
		}	else {
			block_more.classList.add("hide");
			filter_container.classList.remove("height");
		}	
	})	







