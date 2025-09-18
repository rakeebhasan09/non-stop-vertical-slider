import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
	{ id: 1, src: "https://picsum.photos/300/200?1", category: "nature" },
	{ id: 2, src: "https://picsum.photos/300/200?2", category: "city" },
	{ id: 3, src: "https://picsum.photos/300/200?3", category: "nature" },
	{ id: 4, src: "https://picsum.photos/300/200?4", category: "people" },
	{ id: 5, src: "https://picsum.photos/300/200?5", category: "city" },
	{ id: 6, src: "https://picsum.photos/300/200?6", category: "people" },
];

export default function Gallery() {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredImages =
		activeCategory === "all"
			? images
			: images.filter((img) => img.category === activeCategory);

	return (
		<div className="p-6">
			{/* Filter Buttons */}
			<div className="flex gap-3 mb-6">
				{["all", "nature", "city", "people"].map((cat) => (
					<button
						key={cat}
						onClick={() => setActiveCategory(cat)}
						className={`px-4 py-2 rounded-lg transition ${
							activeCategory === cat
								? "bg-blue-600 text-white"
								: "bg-gray-200 hover:bg-gray-300"
						}`}
					>
						{cat}
					</button>
				))}
			</div>

			{/* Gallery Grid */}
			<div className="grid grid-cols-3 gap-4">
				<AnimatePresence>
					{filteredImages.map((img) => (
						<motion.div
							key={img.id}
							layout
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.4 }}
							className="overflow-hidden rounded-lg shadow"
						>
							<img
								src={img.src}
								alt=""
								className="w-full h-48 object-cover"
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
}
