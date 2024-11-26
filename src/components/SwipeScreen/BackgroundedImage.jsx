// Wrapper for image but without using <img> tag
// Renders image in background of <div>
// Useful to remove drag-copying of image

function BackgroundedImage({src, ...props}) {
	const styles = {
		div: {
			backgroundImage: `url(${src})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
		}
	};

	console.log(props);
	return (
		<div className={props.className} style={styles.div}>
		</div>
	)
}

export default BackgroundedImage;
