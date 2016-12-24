var colors = ["#EF5350", "#EC407A", "#AB47BC", "#7E57C2", "#3F51B5", "#2196F3", "#009688", "#43A047", "#689F38", "#EF6C00", "#0097A7"]
var currentColor = colors[Math.floor(Math.random() * colors.length)];
document.getElementsByTagName("body")[0].style.backgroundColor = currentColor;
