(function meme () {
	const c = document.getElementById("c");
	const ctx = c.getContext("2d");
	let img = new Image();
	img.src="img/captain-spidergirl_320x426.jpg";
	img.onload = function () {
		ctx.drawImage(img, 10,10);
		ctx.font = 'bold 34px IMPACT'
		ctx.fillStyle = '#FFF';
		ctx.strokeStyle = '#000';
		ctx.lineWidth= 3;
		ctx.textAlign = "center";
		ctx.fillText("WHEN  UR  GURL", (c.width / 2) + 5, 50);
		ctx.strokeText("WHEN  UR  GURL", (c.width / 2) + 5, 50);
		ctx.fillText("LIKES  COSPLAYING", (c.width / 2) + 5, 85);
		ctx.strokeText("LIKES  COSPLAYING", (c.width / 2) + 5, 85);
		ctx.font = 'bold 34px IMPACT';
		ctx.fillText("MORE THAN YOU DO", (c.width / 2) + 5, 410);
		ctx.strokeText("MORE THAN YOU DO", (c.width / 2) + 5, 410);
	}
}());


