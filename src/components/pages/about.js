import React from 'react';
import Headshot from '../../components/img/Headshot.png';
import '../style.css';


function aboutPage() {
    return (
        <section>

            {/* <h1>About</h1> */}
            <section className="about-Img">
                <img src={Headshot} alt="a picture of me" />
            </section>
            <p>
                Aliqua proident ad aliquip irure ipsum et cupidatat et culpa consequat consequat. Cillum sint quis tempor sunt sit consequat qui. Lorem sunt ullamco consectetur deserunt ullamco commodo labore exercitation ad dolor cillum pariatur. Id sint voluptate commodo duis.


            </p>
            <p>
                Commodo nostrud anim sit in consectetur adipisicing irure ullamco enim eu non. Reprehenderit commodo ullamco non aliquip sunt. Elit commodo cillum laboris non sint fugiat. Dolor aliqua amet velit qui excepteur non ipsum incididunt. Amet eu sit commodo duis deserunt amet nisi ut esse. Tempor cupidatat aliqua commodo ullamco dolore veniam exercitation. Amet dolor excepteur adipisicing sit.

            </p>
        </section>
    )
}

export default aboutPage;