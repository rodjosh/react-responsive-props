import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { useResponsive } from "../dist";

interface TextProps {
    word: string;
    children: string;
}

const Text = ({word, children}: TextProps) => {
    return <h1>{children}{' '}{word}</h1>
}

const App = () => {
    const responsiveComponent = useResponsive();
    const ResponsiveText = responsiveComponent<typeof Text>(Text, {
        md: {
            word: 'Desktop'
        }
    });

  return (
    <div>
        <ResponsiveText word="Mobile">Hello</ResponsiveText>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
