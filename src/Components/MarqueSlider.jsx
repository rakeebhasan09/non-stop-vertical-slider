import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
	{
		id: 1,
		label: "Figma Icon",
		logo: "https://i.ibb.co.com/67PRcsjW/figma-icon.png",
	},
	{
		id: 2,
		label: "Photoshop Icon",
		logo: "https://i.ibb.co.com/JFpmyqF6/photoshope.png",
	},
	{
		id: 3,
		label: "XD Icon",
		logo: "https://i.ibb.co.com/j9CMJpT8/xd-icon.png",
	},
	{
		id: 4,
		label: "HTML5 Icon",
		logo: "https://i.ibb.co.com/pvmQHCQD/d1f91caa-e49d-4219-8adf-862119eb5c5e.png",
	},
	{
		id: 5,
		label: "CSS3 Icon",
		logo: "https://i.ibb.co.com/S4PTQndY/css3-icon.png",
	},
	{
		id: 6,
		label: "Bootstrap Icon",
		logo: "https://i.ibb.co.com/jPDKfQPr/bootstrap-logo-shadow.png",
	},
	{
		id: 7,
		label: "Tailwind CSS Icon",
		logo: "https://i.ibb.co.com/vCYFHvLp/Tailwind-CSS-Logo-svg.png",
	},
	{
		id: 8,
		label: "JavaScript Icon",
		logo: "https://i.ibb.co.com/n806rHy4/js-icon.png",
	},
	{
		id: 9,
		label: "jQuery Icon",
		logo: "https://i.ibb.co.com/gLSnQhQS/jquery-icon.png",
	},
	{
		id: 10,
		label: "React Icon",
		logo: "https://i.ibb.co.com/GQ4F4yGP/react-icon.png",
	},
	{
		id: 11,
		label: "Firebase Icon",
		logo: "https://i.ibb.co.com/PZYYYL0N/firebase.png",
	},
	{
		id: 12,
		label: "Node js Icon",
		logo: "https://i.ibb.co.com/ccgNfnhP/Node-JS-logo-vector-01.png",
	},
	{
		id: 13,
		label: "MongoDB Icon",
		logo: "https://i.ibb.co.com/NMs6QPy/mongodb-icon.png",
	},
];

export default function MarqueeSlider() {
	const slides = [...items];

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
						<div className="flex items-center gap-3 px-5 py-2 whitespace-nowrap select-none font-semibold text-gray-800">
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
