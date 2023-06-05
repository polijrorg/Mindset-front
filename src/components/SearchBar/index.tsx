import { useState } from 'react';
import CourseService from 'services/CourseService';
import { Courses } from 'interfaces/Courses';
import * as S from './styles';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Courses[]>([]);

    const handleInputChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        setSearchTerm(value);
    };

    const handleKeyPress = async (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === 'Enter') {
            try {
                const response = await CourseService.searchCourse(searchTerm);
                const resultsArray = Array.isArray(response)
                    ? response
                    : [response];
                setSearchResults(resultsArray);
            } catch (error) {
                setSearchTerm('');
            }
        }
    };
    const handleOnClick = async () => {
        try {
            const response = await CourseService.searchCourse(searchTerm);
            const resultsArray = Array.isArray(response)
                ? response
                : [response];
            setSearchResults(resultsArray);
        } catch (error) {
            setSearchTerm('');
        }
    };

    return (
        <div>
            <S.SearchContainer>
                <S.SearchButton>
                    <S.SearchLogged
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                    />
                    <S.DivImg onClick={handleOnClick}>
                        <img
                            src="/assets/blackSearch.svg"
                            alt=" "
                            width={30}
                            height={24}
                        />
                    </S.DivImg>
                </S.SearchButton>
            </S.SearchContainer>

            <ul>
                {searchResults.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;
