import React from 'react';
import ReactDOM from 'react-dom/client';

// const Heading = React.createElement('h1', { key: 'heading1' }, 'Heading 1');
// const Para = React.createElement('h3', { key: 'heading3' }, 'Hello React');
// const Container = React.createElement('div', { className: 'wrapper' }, [
//     Heading,
//     Para,
// ]);
// console.log(Heading);
//React.createElement() => Object => HTML(DOM)
const Title = () => (
    <h1 id="title" key="h2">
        Namaste Kartikey
    </h1>
);
const HeaderComponent = () => {
    return (
        <div>
            {/* <Title /> */}
            {Title()}
            <h2>Namaste React Functional Component</h2>
            <h2>This is a h2 tag</h2>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent />);
