import bathroomBefore from '../images/bathroomBefore.jpg'
import bathroomAfter from '../images/bathroomAfter.jpeg'
import kitchenBefore from '../images/kitchenBefore.jpg'
import kitchenDuring from '../images/kitchenDuring.jpg'
import kitchenAfter from '../images/kitchenAfter.jpg'
import shedBefore from '../images/shedBefore.jpg'
import shedAfter1 from '../images/shedAfter1.jpg'
import shedAfter2 from '../images/shedAfter2.jpg'
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Carousel(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet1: {
          breakpoint: { max: 1024, min: 960 },
          items: 2
        },
        tablet2: {
          breakpoint: { max: 960, min: 660 },
          items: 2
        },
        tablet3: {
          breakpoint: { max: 660, min: 460 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 460, min: 0 },
          items: 1
        }
      };
    return(
        <div className="carousel-container">
            <MultiCarousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000} 
                className='carousel'
                >
                <div><img src={bathroomBefore}/></div>
                <div><img src={bathroomAfter}/></div>
                <div><img src={kitchenBefore}/></div>
                <div><img src={kitchenDuring}/></div>
                <div><img src={kitchenAfter}/></div>
                <div><img src={shedBefore}/></div>
                <div><img src={shedAfter1}/></div>
                <div><img src={shedAfter2}/></div>
                
            </MultiCarousel>
        </div>
    )
}

export default Carousel