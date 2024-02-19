import ChatImage from "@/public/chat.png";
import NetImage from "@/public/network.png";
import File from "@/public/file.png";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from "next/image";

const ImageSlider = () => {
    return (
      <div className="container mx-auto">
        <Carousel>
          <div>
            <Image src={ChatImage} alt="Chat Image" width={300} height={300} unoptimized />
            <p className="legend">Chat Image</p>
          </div>
          <div>
            <Image src={NetImage} alt="Network Image" width={300} height={300} unoptimized />
            <p className="legend">Network Image</p>
          </div>
          <div>
            <Image src={File} alt="File Image" width={300} height={300} unoptimized />
            <p className="legend">File Image</p>
          </div>
        </Carousel>
      </div>
    );
};

export default ImageSlider;
