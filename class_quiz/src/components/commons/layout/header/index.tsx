import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  background-color: red;
  height: 10vh;
`;

const Sliderimg = styled.div`
  width: 50vw;
`;

export default function LayoutHeader() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <h1>Header영역</h1>
      <Slider {...settings}>
        <Sliderimg>
          <h1>1</h1>
        </Sliderimg>
        <Sliderimg>
          <h1>2</h1>
        </Sliderimg>
        <Sliderimg>
          <h1>3</h1>
        </Sliderimg>
        <Sliderimg>
          <h1>4</h1>
        </Sliderimg>
        <Sliderimg>
          <h1>5</h1>
        </Sliderimg>
      </Slider>
    </Wrapper>
  );
}
