import React from 'react';

const PageContent = (props) => {
    return(
        <section style={{paddingRight: "1rem", paddingLeft: "1rem"}}>
            {props.children}
        </section>
    )
}
export default PageContent;