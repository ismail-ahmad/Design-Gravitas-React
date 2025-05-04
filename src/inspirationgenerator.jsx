import React, { useState } from "react";
import quotes from './quotes.jsx';
import Text from './text.jsx';


export default function InspirationGenerator({children}) {
    const [index, setIndex] = useState(0);
    const quote = quotes[index];
    const next = () => {setIndex((index + 1) % quotes.length)}
    return(
        <>
          <p>Your Quote of the Day is Here: </p>
          <Text text={quote} />
          <button onClick={next}>Get more</button>
          {children}
        </>
    );
}