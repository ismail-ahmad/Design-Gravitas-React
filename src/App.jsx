import React from "react";
import Header from "./header";
import { SharedIntersectionObserverProvider } from './sharedIntersectionObserver';

const App = () => {
  return(
    <SharedIntersectionObserverProvider threshold={1}>
    <Header />
    </SharedIntersectionObserverProvider>
  );
}


export default App;