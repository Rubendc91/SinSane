import React from 'react';
import HeadshotOmni from '../../components/img/HeadshotOmni.png';
import HeadshotFatlip from '../../components/img/HeadshotFatlip.png';
// import Banner from '../../components/img/Banner.png';
import '../style.css';

function OmniSwitch() {
    let Fatlip = document.getElementById("about-Fatlip");
    Fatlip.style.display = 'none'
    let omni = document.getElementById("about-Omni");
    omni.style.display = 'block'
    // document.getElementById
    // document.getElementById('about-Omni')
};

function FatlipSwitch() {
    let omni = document.getElementById("about-Omni");
    omni.style.display = 'none'
    let Fatlip = document.getElementById("about-Fatlip");
    Fatlip.style.display = 'block'
    // document.getElementById
    // document.getElementById('about-Omni')

};

function aboutPage() {
    return (
        <section>

            {/* <h1>About</h1> */}
            {/* <section className="aboutSin-Img"style={{justifyContent: "Center"}}>
                <img src={Banner} ></img>
            </section> */}
            <section>
                <p>
                    Aliqua proident ad aliquip irure ipsum et cupidatat et culpa consequat consequat. Cillum sint quis tempor sunt sit consequat qui. Lorem sunt ullamco consectetur deserunt ullamco commodo labore exercitation ad dolor cillum pariatur. Id sint voluptate commodo duis.


                </p>
                <p>
                    Commodo nostrud anim sit in consectetur adipisicing irure ullamco enim eu non. Reprehenderit commodo ullamco non aliquip sunt. Elit commodo cillum laboris non sint fugiat. Dolor aliqua amet velit qui excepteur non ipsum incididunt. Amet eu sit commodo duis deserunt amet nisi ut esse. Tempor cupidatat aliqua commodo ullamco dolore veniam exercitation. Amet dolor excepteur adipisicing sit.

                </p>
            </section>
            <section >
                <section className="about-Img">
                    <img id="omni-Img" onClick={OmniSwitch} src={HeadshotOmni} alt="Omni" />

                    <img id="Fatlip-Img" onClick={FatlipSwitch} src={HeadshotFatlip} alt='Fat Lip'></img>
                </section>
            </section>
            <section id="about-Omni" style={{ display: "none" }}>
                <p>
                    Aliqua proident ad aliquip irure ipsum et cupidatat et culpa consequat consequat. Cillum sint quis tempor sunt sit consequat qui. Lorem sunt ullamco consectetur deserunt ullamco commodo labore exercitation ad dolor cillum pariatur. Id sint voluptate commodo duis.


                </p>
                <p>
                    Commodo nostrud anim sit in consectetur adipisicing irure ullamco enim eu non. Reprehenderit commodo ullamco non aliquip sunt. Elit commodo cillum laboris non sint fugiat. Dolor aliqua amet velit qui excepteur non ipsum incididunt. Amet eu sit commodo duis deserunt amet nisi ut esse. Tempor cupidatat aliqua commodo ullamco dolore veniam exercitation. Amet dolor excepteur adipisicing sit.

                </p>
            </section>

            <section id="about-Fatlip" style={{ display: "none" }}>
                <p>
                    Commodo nostrud anim sit in consectetur adipisicing irure ullamco enim eu non. Reprehenderit commodo ullamco non aliquip sunt. Elit commodo cillum laboris non sint fugiat. Dolor aliqua amet velit qui excepteur non ipsum incididunt. Amet eu sit commodo duis deserunt amet nisi ut esse. Tempor cupidatat aliqua commodo ullamco dolore veniam exercitation. Amet dolor excepteur adipisicing sit.

                </p>
                <p>
                    Aliqua proident ad aliquip irure ipsum et cupidatat et culpa consequat consequat. Cillum sint quis tempor sunt sit consequat qui. Lorem sunt ullamco consectetur deserunt ullamco commodo labore exercitation ad dolor cillum pariatur. Id sint voluptate commodo duis.


                </p>
            </section>

        </section>

    )
}

export default aboutPage;