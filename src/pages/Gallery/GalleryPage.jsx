import GalleryItem from "../../components/Gallery/GalleryItem/GalleryItem";
import Slider from "../../components/Slider/Slider";
import FlexSection from "../../components/UI/GridSection/FlexSection";
import { bigList, gallery } from "../Main/MainPage";

const GalleryPage = () => {
  return (
    <>
      <Slider count={3} itemWidth={416} list={bigList} />
      <FlexSection gap={0}>
        {gallery.map((item) => (
          <GalleryItem
            source={item.source}
            text={item.description}
            key={item.id}
          />
        ))}
      </FlexSection>
    </>
  );
};

export default GalleryPage;
