/* import { useState } from 'react';
import * as S from './styles';

type RatingProps = {
    onSubmitRating: (rating: number) => void;
};

const Rating: React.FC<RatingProps> = ({ onSubmitRating }) => {
    const [selectedRating, setSelectedRating] = useState<number | null>(null);

    const handleRatingClick = (rating: number) => {
        setSelectedRating(rating);
        onSubmitRating(rating);
    };

    return (
        <div>
            {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((rating) => (
                <S.Star/>
                <span
                    key={rating}
                    onClick={() => handleRatingClick(rating)}
                    style={{
                        cursor: 'pointer',
                        color: rating <= selectedRating ? 'yellow' : 'gray'
                    }}
                >
                    &#9733;
                </span>
            ))}
        </div>
    );
};

export default Rating;
*/
