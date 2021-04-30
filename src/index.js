import ReactDOM from "react-dom";
import Navbar from "./Navbar/Navbar";
import Corpo from "./Corpo/Corpo";
import Fundo from "./Fundo/Fundo";

function App(){
    return(
        <>
            <Navbar />
            <Corpo />
            <Fundo />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"))