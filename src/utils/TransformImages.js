const resizeImage = (image, type = "fit", w = 25, h = 25) => `${image}?nf_resize=${type}&w=${w}&h=${h}`;

export default {
	resizeImage,
};
