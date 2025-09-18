import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export default function MarqueeSlider() {
	const [slides, setSlides] = useState([]);
	useEffect(() => {
		fetch("technologies.json")
			.then((technologiesRes) => technologiesRes.json())
			.then((technologiesData) => setSlides(technologiesData));
	}, []);

	const settings = {
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 50, // 0 নয়, ছোট positive মান রাখো
		speed: 4000,
		cssEase: "linear",
		arrows: false,
		dots: false,
		pauseOnHover: true,
		pauseOnFocus: false,
		variableWidth: true,
		swipeToSlide: false,
		draggable: false,
		touchMove: false,
	};
	return (
		<div className="w-full  mx-auto my-6 bg-white rounded-xl overflow-hidden">
			<Slider {...settings}>
				{slides.map((item) => (
					<div key={item.id} className="inline-block">
						<div className="flex items-center px-3 lg:px-4 py-2 whitespace-nowrap select-none font-semibold text-gray-800">
							<div className="w-40 h-32 p-5  flex items-center justify-center rounded-lg shadow">
								<img
									className="w-20 object-cover"
									src={item.logo}
									alt=""
								/>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}
