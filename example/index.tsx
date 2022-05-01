import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { useResponsive } from "../dist";

interface TextProps {
    words: string;
}

const Text = ({words}: TextProps) => {
    return <h1>{words}</h1>
}

const App = () => {
    const responsiveComponent = useResponsive();
    const ResponsiveText = responsiveComponent<typeof Text>(Text, {
        md: {
            words: 'Desktop'
        }
    });

  return (
    <div>
        <ResponsiveText words="Mobile" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
