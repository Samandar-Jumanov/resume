import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from "next/image";
import chatImage from '@/public/chat.png'
import fileImage from '@/public/file.png'
import netImage from '@/public/net.png'


const ImageSlider = () => {
    return (
      <div className="container mx-auto">
        <Carousel>
          <div>
            <Image src={chatImage} alt="Chat Image" width={300} height={300} unoptimized  />
            
          </div>
          <div>
            <Image src={fileImage} alt="Network Image" width={300} height={300}  />
          </div>
          <div>
            <Image src={netImage} alt="File Image" width={300} height={300}  />
          </div>
        </Carousel>
      </div>
    );
};

export default ImageSlider;
