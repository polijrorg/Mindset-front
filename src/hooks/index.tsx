import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/default.theme';
import { AuthProvider } from './useAuth';
import { FetchProvider } from './useFetchCourses';

const AppProvider: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <AuthProvider>
            <FetchProvider>{children}</FetchProvider>
        </AuthProvider>
    </ThemeProvider>
);

export default AppProvider;
