import {useRef, useState} from "react";
import { useSwipeable } from "react-swipeable";
import BackgroundedImage from "./BackgroundedImage";

const imagesList = ["https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg", "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg", "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg"];


function SwipeScreen() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const scrollContainerRef = useRef(null);

	const nextImage = () => {
		const currentScrollX = scrollContainerRef.current.scrollLeft;
		const imageWidth = scrollContainerRef.current.offsetWidth;
		scrollContainerRef.current.scroll(currentScrollX + imageWidth, 0);
	}

	const prevImage = () => {
		const currentScrollX = scrollContainerRef.current.scrollLeft;
		const imageWidth = scrollContainerRef.current.offsetWidth;
		scrollContainerRef.current.scroll(currentScrollX - imageWidth, 0);
	}

	const handlers = useSwipeable({
		onSwipedRight: nextImage,
		onSwipedLeft: prevImage,
		swipeDuration: 500,
		preventScrollOnSwipe: true,
		trackMouse: true,
	});

	return(
		<div draggable="false" {...handlers} className="bg-slate-600 border-2 border-solid border-pink-500 w-64 h-1/2 rounded-md flex flex-row overflow-x-scroll justify-start items-center" ref={scrollContainerRef}>
		<img draggable="false" className="h-full w-full pointer-events-none select-none" src={imagesList[currentImageIndex]}></img>
		<img draggable="false" className="h-full w-full pointer-events-none select-none" src={imagesList[currentImageIndex + 1]}></img>
		<img draggable="false" className="h-full w-full pointer-events-none select-none" src={imagesList[currentImageIndex + 2]}></img>
		</div>
	)
}

export default SwipeScreen;
