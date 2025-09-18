import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../App.css";
import { useEffect, useState } from "react";

const ProjectSlider = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch("recentProjects.json")
			.then((recentProjectsRes) => recentProjectsRes.json())
			.then((projectsData) => setProjects(projectsData));
	}, []);
	return (
		<>
			<Swiper
				effect="coverflow"
				grabCursor={true}
				centeredSlides={false}
				loop={true}
				slidesPerView={3}
				speed={1500} // smooth transition speed (ms)
				autoplay={{
					delay: 2500, // time between slides (ms)
					disableOnInteraction: false, // keeps autoplay after user interaction
				}}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					640: {
						slidesPerView: 3,
					},
				}}
				modules={[EffectCoverflow, Autoplay]}
				className="mySwiper"
			>
				{projects.map((project) => (
					<SwiperSlide>
						<div className="relative ">
							<img src={project.image} />
							<div className="absolute bottom-4 md:bottom-5 w-full text-center">
								<p className=" text-black capitalize text-[20px] md:text-[25px] font-bold">
									{project.title}
								</p>
								<a
									href={project.liveLink}
									target="_blank"
									className="text-black capitalize"
								>
									Live Link
								</a>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default ProjectSlider;
