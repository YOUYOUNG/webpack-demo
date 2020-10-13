import "./index.scss";
import timg from "../assets/timg.jpg";

const images = new Image();
images.src = timg;

document.body.appendChild(images);

document.write("hello, webpack, we meet again!!!");
