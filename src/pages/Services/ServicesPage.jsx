import About from "../../components/About/About";
import Servises from "../../components/Servises/Servises";
import Slider from "../../components/Slider/Slider";
import FlexSection from "../../components/UI/GridSection/FlexSection";
import { aboutData, smallList } from "../Main/MainPage";

const ServicesPage = () => {
  return (
    <>
      <FlexSection gap={100}>
        <About data={aboutData} />
        <Slider count={1} itemWidth={636} list={smallList} />
      </FlexSection>
      <div className="wrapper">
        <Servises />
      </div>
    </>
  );
};

export default ServicesPage;
