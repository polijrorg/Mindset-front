import React, { useState } from 'react';
import { Rating, Box } from '@mui/material';
import CoursesService from 'services/CourseService';
import { useRouter } from 'next/router';

import * as S from './styles';

const RatingComponent: React.FC<{ initialValue?: number; onCard?: boolean }> =
    ({ initialValue, onCard }) => {
        const router = useRouter();
        const labels: { [index: number]: string } = {
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
        const [value, setValue] = useState<number>(
            initialValue !== undefined ? initialValue : -1
        );
        const [hover, setHover] = useState<number>(-1);
        const [isDisabled, setDisabled] = useState<boolean>(false);

        const handleRatingCourses = (newValue: number) => {
            setDisabled(true);
            setValue(newValue);
            try {
                CoursesService.ratingCourse({ id, newValue });
            } catch (error) {
                setDisabled(false);
            }
        };

        if (initialValue !== undefined) {
            if (onCard) {
                return (
                    <Box>
                        <S.Container>
                            <Rating
                                readOnly
                                name="hover-feedback"
                                value={initialValue}
                                style={{
                                    color: '#f0f0f0',
                                    fontSize: '14px',
                                    gap: '1px'
                                }}
                                emptyIcon={
                                    <S.StarOnCard src="/assets/singleSatr.svg" />
                                }
                            />
                        </S.Container>
                    </Box>
                );
            }
            return (
                <Box>
                    <S.Container>
                        <Rating
                            readOnly
                            name="hover-feedback"
                            value={initialValue}
                            style={{ color: '#f0f0f0', fontSize: '24px' }}
                            emptyIcon={<S.Star src="/assets/singleSatr.svg" />}
                        />
                        {value !== -1 && <S.Text>{initialValue}</S.Text>}
                    </S.Container>
                </Box>
            );
        }
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
                                handleRatingCourses(newValue as number);
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
