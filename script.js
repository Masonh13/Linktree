let colors = ["#000000", "#98b7ff", "#ff4040", "#0005eb", "#6500bd"];
let defuaidk = ["#ffffff", "#ffffff", "#000000", "#ffffff", "#ffffff"];
let uohasfuiohsdiohjsdf = ["ig", "threads", "sc", "twt", "dickcord"];

for (let i = 0; i < 5; ++i)
{
	let asfuiohjadf = uohasfuiohsdiohjsdf[i];
	let el = document.getElementById(asfuiohjadf);
	el.addEventListener("mouseover", (e) =>
	{
		document.getElementById(asfuiohjadf + "_cock").style.transition = "0.3s";
		document.getElementById(asfuiohjadf + "_cock").style.color = colors[i];
	});
	el.addEventListener("mouseout", (e) =>
	{
		setTimeout(() =>
		{
			if (document.elementFromPoint(e.clientX, e.clientY).id === asfuiohjadf + "_cock")
				return;
			document.getElementById(asfuiohjadf + "_cock").style.transition = "0.3s";
			document.getElementById(asfuiohjadf + "_cock").style.color = defuaidk[i];
		}, 1);
	});
	document.getElementById(asfuiohjadf + "_cock").style.color = defuaidk[i];
}