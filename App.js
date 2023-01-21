import React from "react";
import ReactDOM from "react-dom/client";

const Heading = React.createElement("h1", {}, "Heading 1");
const Para = React.createElement("h3", {}, "Hello React");
const Container = React.createElement("div", {className:"wrapper"}, [Heading, Para])


const AppLayout = () => {
    return (
        <>
            {Container}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);