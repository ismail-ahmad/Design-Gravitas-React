import React from "react";

const CTAButton = React.forwardRef((props, ref) => {
    const {onclick, text, classNames} = props;

    return(
        <div className="button-container">
        <button ref={ref} className={classNames} onClick={onclick}>{text}</button>
     </div>
    );
});


export default CTAButton;