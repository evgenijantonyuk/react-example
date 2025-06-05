
import s from "./Main.module.css"
import { ButtonOpenModal } from "../ButtonOpenModal/ButtonOpenModal.jsx";

const Main = () => {

    return (
        <div className={s.main}>
            <div className={s.container}>
                <h1 className={s.title}>About our Company</h1>
                <div className={s.leftSide}>
                    <div className={s.imgBlock}>
                        <img className={s.img} src="./img1.jpg" alt="image"/>
                        <p>Рис. 1</p>
                    </div>
                    <p className={s.imgText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolor magni
                        nisi unde. Amet architecto cumque ea expedita explicabo, facere fuga harum ipsam nulla quo!</p>
                </div>
                <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta eum
                    mollitia non soluta! Adipisci animi assumenda distinctio dolores dolorum id, iste maxime
                    necessitatibus nisi nulla odio odit quibusdam quos, tempora unde voluptate voluptatibus! A, commodi
                    dicta doloremque doloribus dolorum eos eum excepturi exercitationem iste mollitia nam nisi officiis
                    perferendis placeat totam ut veritatis vero. Debitis enim facere ipsam, iste laudantium numquam,
                    porro quibusdam quos ratione repellendus, sequi ullam velit voluptatum! Commodi illo nulla ratione
                    reprehenderit totam! Aspernatur at atque consequuntur deserunt est, et eum, eveniet facere labore
                    laborum molestiae molestias nemo obcaecati pariatur perspiciatis quisquam recusandae repellendus
                    velit voluptatem?</p>
            </div>
            <ButtonOpenModal />
        </div>
    )
}

export default Main;
