import Carousel from "react-bootstrap/Carousel";

function IceCreamCarousel() {
  return (
    <Carousel className="ice-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.clubhouse.ca/-/media/project/oneweb/clubhouseca/recipes/classic_vanilla_icecream_800.jpg?rev=8f09c7f099b94a0e87b5e227ff9fed03&vd=20250505T192023Z&extension=webp&hash=18C8634EBE40E8FDD012A2615148ABCE"
          alt="Ice cream 1"
        />
        
        <Carousel.Caption>
          <h3>Vanilla Classic</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://vintagekitchennotes.com/wp-content/uploads/2024/09/Bowl-of-chocolate-ice-cream-500x500.jpg"
          alt="Ice cream 2"
        />
        <Carousel.Caption>
          <h3>Chocolate Overload</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.chewoutloud.com/wp-content/uploads/2024/04/Strawberry-Ice-Cream-in-Bowl.jpg"
          alt="Ice cream 2"
        />
        <Carousel.Caption>
          <h3>Strawberry Bliss</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bakerstable.net/wp-content/uploads/2023/03/no-cook-mint-chocolate-chip-ice-cream-15-e1678315622631.jpg"
          alt="Ice cream 2"
        />
        <Carousel.Caption>
          <h3>Minty Crunch</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQrBuicKMkdUkGPyf65hAmcvyaw5DURRdJ7OHl-Q7VJ3nUynmBhtoHPE&s=10"
          alt="Ice cream 2"
        />
        <Carousel.Caption>
          <h3>Coconut Paradise</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IceCreamCarousel;
