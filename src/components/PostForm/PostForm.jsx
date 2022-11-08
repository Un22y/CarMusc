import React, {useState} from "react";
import Dots from "../Decoration/Dots/Dots";
import Button from "../UI/Button/Button";
import FlexSection from "../UI/GridSection/FlexSection";
import MyInput from "../UI/MyInput/MyInput";
import classes from "./PostForm.module.css"
import PostFormInfo from "./PostFormInfo/PostFormInfo";


const PostForm = () => {

    const [contacts, setContacts] = useState([
        {id:1, text: 'Eu faucibus et rutrum fringilla orci nunc', ref:'', image:'/geo.svg'},
        {id:2, text: '8 (812) 123-45-67', ref:'/', image:'/tel.svg'},
        {id:3, text: 'test@test.ru', ref:'/',image:'/mail.svg'},
    ])

    return (
        <FlexSection gap={60} rowDirection={false}>
            <h2 className={classes.postform__title}>ответим на любой вопрос</h2>
            <Dots/>
            <div className={classes.postform__contacts}>
                <MyInput labelText={'Имя'}/>
                <MyInput labelText={'Телефон'}/>
            </div>
            <div className={classes.postform__questionandsocial}>
                <MyInput labelText={'Вопрос по дизайну, тюнингу и др.'}/>
                <FlexSection gap={15} rowDirection={false}>
                    <a className={classes.social__link} href=""><img src="/social_tg.svg" alt=""/></a>
                    <a className={classes.social__link} href=""><img src="/social_yt.svg" alt=""/></a>
                    <a className={classes.social__link} href=""><img src="/social_vk.svg" alt=""/></a>
                </FlexSection>
            </div>
            <section className={classes.postform__send_box}>
                <Button padding={[15,25]} text={'отправить'}/>
                <div className={classes.postform__info_box}>
                    {contacts.map(item => 
                        <PostFormInfo key={item.id} text={item.text} refa={item.ref} image={item.image}/>
                    )}
                </div>
            </section>
        </FlexSection>
    )
}

export default PostForm;