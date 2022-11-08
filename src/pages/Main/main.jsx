import React from "react";
import About from "../../components/About/About";
import Achievements from "../../components/Achievements/Achievements";
import GalleryItem from "../../components/Gallery/GalleryItem/GalleryItem";
import { useState } from "react";
import  "../../styles/style.css"
import FlexSection from "../../components/UI/GridSection/FlexSection";
import Slider from "../../components/Slider/Slider";
import Servises from "../../components/Servises/Servises";
import Price from "../../components/Price/Price";





const Main = () => {

  const [gallery, setGallery] = useState([
    {id:1, source: '/works-1.png', description: 'work-1'},
    {id:2, source: '/works-3.png', description: 'work-2'},
    {id:3, source: '/works-4.png', description: 'work-3'},
    {id:4, source: '/works-5.png', description: 'work-4'},
    {id:5, source: '/works-6.png', description: 'work-5'},
    {id:6, source: '/works-2.png', description: 'work-6'},
    {id:7, source: '/works-1.png', description: 'work-1'},
    {id:8, source: '/works-3.png', description: 'work-2'},
    {id:9, source: '/works-4.png', description: 'work-3'},
    {id:10, source: '/works-5.png', description: 'work-4'},
    {id:11, source: '/works-6.png', description: 'work-5'},
    {id:12, source: '/works-2.png', description: 'work-6'},
    {id:13, source: '/works-1.png', description: 'work-1'},
    {id:14, source: '/works-3.png', description: 'work-2'},
    {id:15, source: '/works-4.png', description: 'work-3'},
    {id:16, source: '/works-5.png', description: 'work-4'},
    {id:17, source: '/works-6.png', description: 'work-5'},
    {id:18, source: '/works-2.png', description: 'work-6'},
  ]);

  const [bigList, setbigList] = useState([
    {id:1, source:'/slider-1.png', text:'1) Lorem dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.',},
    {id:2, source:'/slider-2.png', text:'2) Lorem ipsum sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.',},
    {id:3, source:'/slider-3.png', text:'3) ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.',},
    {id:4, source:'/slider-1.png', text:'4) Lorem ipsum dolor, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.',},
    {id:5, source:'/slider-2.png', text:'5) Lorem ipsum dolor sit amet, elit. Cras vulputate laoreet sapien a sit ante.',},
    {id:6, source:'/slider-3.png', text:'6) Lorem ipsum dolor sit amet, consectetur vulputate laoreet sapien a sit ante.',},
  ])

const [smallList, setSmallList] = useState([
  {id:1, source: '/slider-big-1.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat est. Consectetur lectus.'},
  {id:2, source: '/slider-big-2.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat est. Consectetur lectus.'},
  {id:3, source:'/slider-2.png', text:'2) Lorem ipsum sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.',},
  
])

  const [achievements, setAchievements] = useState([
    {id:1, text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '},
    {id:2, text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '},
    {id:3, text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '},
    {id:4, text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '},
    {id:5, text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '},
    {id:6, text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '},
    {id:7, text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '},
    {id:8, text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui '},
  ])

  const [aboutData,setAboutData] = useState([
    {id:1, image:'/reason1.svg' , title:'материалы от лучших компаний' , text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium',},        
    {id:2, image:'/reason1.svg' , title:'материалы от лучших компаний' , text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium',},        
    {id:3, image:'/reason1.svg' , title:'материалы от лучших компаний' , text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium',},        
  ])

  return (
    <div className="App">
      <Achievements data={achievements}/>
      <FlexSection gap={100}>
        <Slider count={1} itemWidth={636} list={smallList}/>
        <About data={aboutData}/>        
      </FlexSection>
      <Slider count={3} itemWidth={416} list={bigList}/>
      <div className="wrapper">
        <Servises/>
      </div>
      <FlexSection gap={100}>
        <About data={aboutData}/>        
        <Slider count={1} itemWidth={636} list={smallList}/>
      </FlexSection>
      <FlexSection>
        {
          gallery.map(item => 
              <GalleryItem source={item.source} text={item.description} key={item.id}/>
            )
        }
      </FlexSection>
      <Price/>
    </div>
  )
}

export default Main;