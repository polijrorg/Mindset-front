import { useState } from 'react';
import { Rating, Box } from '@mui/material';
import CoursesService from 'services/CourseService';
import { useRouter } from 'next/dist/client/router';

import * as S from './styles';

const RatingComponent: React.FC = () => {
    const router = useRouter();
    const labels: { [index: string]: string } = {
        0.5: '0.5',
        1: '1',
        1.5: '1.5',
        2: '2',
        2.5: '2.5',
        3: '3',
        3.5: '3.5',
        4: '4',
        4.5: '4.5',
        5: '5'
    };
    const { id } = router.query;
    const [value, setValue] = useState<number>(-1);
    const [hover, setHover] = useState<number>(-1);
    const [isDisabled, setDisabled] = useState<boolean>(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRatingCourses = (newValue: any) => {
        setDisabled(true);
        setValue(newValue);
        try {
            CoursesService.ratingCourse({ id, newValue });
        } catch (error) {
            setDisabled(false);
        }
    };

    return (
        <Box>
            <S.Container>
                <Rating
                    name="hover-feedback"
                    value={value === -1 ? null : value}
                    precision={0.5}
                    style={{ color: '#f0f0f0', fontSize: '24px' }}
                    onChange={(_event, newValue) => {
                        if (!isDisabled) {
                            handleRatingCourses(newValue);
                        }
                    }}
                    onChangeActive={(_event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<S.Star src="/assets/singleSatr.svg" />}
                    disabled={isDisabled}
                />
                {value !== -1 && (
                    <S.Text>{labels[hover !== -1 ? hover : value]}</S.Text>
                )}
            </S.Container>
        </Box>
    );
};

export default RatingComponent;
