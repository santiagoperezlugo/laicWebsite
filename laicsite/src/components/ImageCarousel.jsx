import React, { useEffect, useRef, useState, useCallback } from 'react';
import './ImageCarousel.css';

export default function ImageCarousel({ images = [], altText = [] }) {
	const [index, setIndex] = useState(0);
	const trackRef = useRef(null);
	const startX = useRef(0);
	const currentX = useRef(0);
	const isDragging = useRef(false);

	const clampIndex = useCallback(
		(i) => (images.length ? (i + images.length) % images.length : 0),
		[images.length]
	);

	const go = useCallback(
		(delta) => setIndex((i) => clampIndex(i + delta)),
		[clampIndex]
	);

	useEffect(() => {
		const onKey = (e) => {
			if (e.key === 'ArrowLeft') go(-1);
			if (e.key === 'ArrowRight') go(1);
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [go]);

	const onStart = (clientX) => {
		isDragging.current = true;
		startX.current = clientX;
		currentX.current = clientX;
	};
	const onMove = (clientX) => {
		if (!isDragging.current || !trackRef.current) return;
		currentX.current = clientX;
		const dx = currentX.current - startX.current;
		trackRef.current.style.transition = 'none';
		trackRef.current.style.transform = `translateX(calc(${-index * 100}% + ${dx}px))`;
	};
	const onEnd = () => {
		if (!isDragging.current || !trackRef.current) return;
		const dx = currentX.current - startX.current;
		isDragging.current = false;
		const threshold = 50;
		trackRef.current.style.transition = '';
		if (dx > threshold) {
			go(-1);
		} else if (dx < -threshold) {
			go(1);
		} else {
			trackRef.current.style.transform = `translateX(${-index * 100}%)`;
		}
	};

	return (
		<div className="carousel" aria-roledescription="carousel">
			<button className="carousel-btn prev" aria-label="Previous image" onClick={() => go(-1)}>
				‹
			</button>
			<div
				className="carousel-viewport"
				onMouseDown={(e) => onStart(e.clientX)}
				onMouseMove={(e) => onMove(e.clientX)}
				onMouseUp={onEnd}
				onMouseLeave={onEnd}
				onTouchStart={(e) => onStart(e.touches[0].clientX)}
				onTouchMove={(e) => onMove(e.touches[0].clientX)}
				onTouchEnd={onEnd}
			>
				<div
					className="carousel-track"
					ref={trackRef}
					style={{ transform: `translateX(${-index * 100}%)` }}
				>
					{images.map((src, i) => (
						<div className="carousel-slide" key={src + i} aria-hidden={i !== index}>
							<img
								src={src}
								alt={altText[i] || 'Gallery image'}
								loading="lazy"
								className="carousel-image"
							/>
						</div>
					))}
				</div>
			</div>
			<button className="carousel-btn next" aria-label="Next image" onClick={() => go(1)}>
				›
			</button>
			{images.length > 1 && (
				<div className="carousel-dots" role="tablist" aria-label="Image selection">
					{images.map((_, i) => (
						<button
							key={i}
							className={`dot ${i === index ? 'active' : ''}`}
							onClick={() => setIndex(i)}
							role="tab"
							aria-selected={i === index}
							aria-label={`Go to slide ${i + 1}`}
						/>)
					)}
				</div>
			)}
		</div>
	);
}
