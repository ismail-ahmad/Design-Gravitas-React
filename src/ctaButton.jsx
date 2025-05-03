function CTAButton({onclick, text, classNames}) {
    return(
        <div className="button-container">
            <button className={classNames} onClick={onclick}>{text}</button>
        </div>
    );
}

export default CTAButton;