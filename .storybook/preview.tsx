import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles';
import { theme } from '../src/styles/default.theme';
import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
    configurable: true,
    value: (props) => <img {...props} />
});

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Story />
        </ThemeProvider>
    )
];
