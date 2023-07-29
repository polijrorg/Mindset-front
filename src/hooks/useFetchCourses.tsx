import React, { useState, createContext, useContext, useEffect } from 'react';
import CourseService from 'services/CourseService';
import { Courses } from 'interfaces/Courses';
import useAuth from 'hooks/useAuth';

interface FetchCoursesData {
    recommendedCoursesArray: Courses[];
    allCoursesArray: Courses[];
    privateCoursesArray: Courses[];
    inProgressCoursesArray: Courses[];
    recordedCoursesArray: Courses[];
    searchResults: Courses[];
    handleKeyPress: (word: string) => void;
    handleOnClick: (wordClick: string) => void;
    handleInputChange: (wordChange: string) => void;
    isSearching: boolean;
    asyncFunction: () => void;
    backToPage: () => void;
}
export const FetchCourses = createContext<FetchCoursesData>(
    {} as FetchCoursesData
);

export const FetchProvider: React.FC = ({ children }) => {
    const { infosuser } = useAuth();
    const [recommendedCoursesArray, setRecommendedCoursesArray] = useState<
        Courses[]
    >([]);
    const [allCoursesArray, setAllCoursesArray] = useState<Courses[]>([]);
    const [privateCoursesArray, setPrivateCoursesArray] = useState<Courses[]>(
        []
    );
    const [recordedCoursesArray, setRecordedCoursesArray] = useState<Courses[]>(
        []
    );
    const [inProgressCoursesArray, setInProgressCoursesArray] = useState<
        Courses[]
    >([]);

    const [searchResults, setSearchResults] = useState<Courses[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const asyncFunction = async () => {
        const response = await CourseService.getRecommendedCourses();
        setRecommendedCoursesArray(response);
        const userResponse = await CourseService.getUsersCourses(
            String(infosuser.id)
        );
        setPrivateCoursesArray(userResponse);
        const producerResponse = await CourseService.getProducerCourse(
            String(infosuser.id)
        );
        setRecordedCoursesArray(producerResponse);
        const inProgressResponse = await CourseService.getStartedCourses(
            String(infosuser.id)
        );
        setInProgressCoursesArray(inProgressResponse);
    };
    useEffect(() => {
        asyncFunction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleKeyPress = async (word: string) => {
        try {
            setIsSearching(true);
            // Colocar um loading
            const response = await CourseService.searchCourse(word);
            const resultsArray = Array.isArray(response)
                ? response
                : [response];
            setAllCoursesArray(resultsArray);
        } catch (error) {
            setAllCoursesArray([]);
        }
    };

    const handleOnClick = async (wordClick: string) => {
        try {
            setIsSearching(true);
            const response = await CourseService.searchCourse(wordClick);
            const resultsArray = Array.isArray(response)
                ? response
                : [response];
            setAllCoursesArray(resultsArray);
        } catch (error) {
            setAllCoursesArray([]);
        }
    };
    const handleInputChange = async (wordChange: string) => {
        try {
            const response = await CourseService.searchCourse(wordChange);
            const resultsArray = Array.isArray(response)
                ? response
                : [response];
            setSearchResults(resultsArray);
        } catch (error) {
            setSearchResults([]);
        }
    };
    const backToPage = () => {
        asyncFunction();
        setIsSearching(false);
    };

    return (
        <FetchCourses.Provider
            value={{
                allCoursesArray,
                inProgressCoursesArray,
                privateCoursesArray,
                recommendedCoursesArray,
                recordedCoursesArray,
                searchResults,
                handleKeyPress,
                handleOnClick,
                handleInputChange,
                isSearching,
                asyncFunction,
                backToPage
            }}
        >
            {children}
        </FetchCourses.Provider>
    );
};

const useFetch = () => useContext(FetchCourses);
export default useFetch;
