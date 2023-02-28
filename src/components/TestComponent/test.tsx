import { render, screen } from 'utils/testUtils';
import Test from '.';

describe('TestComponent', () => {
    it('Should render correctly', () => {
        render(<Test title="any_title" />);

        const text = screen.getByText(/any_title/i);

        expect(text).toBeInTheDocument();
        expect(text).toHaveStyle({ color: 'black', 'font-size': '1.4rem' });
    });
});
