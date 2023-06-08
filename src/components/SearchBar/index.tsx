import { useState, useEffect, useRef } from 'react';
import CourseService from 'services/CourseService';
import { useRouter } from 'next/router';
import { Courses } from 'interfaces/Courses';
import * as S from './styles';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Courses[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
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
                setIsDropdownOpen(true);
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
            setIsDropdownOpen(true);
        } catch (error) {
            setSearchTerm('');
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <S.Dropdown>
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
            <S.DropdownMenu ref={dropdownRef} isOpen={isDropdownOpen}>
                {searchResults.map((result) => (
                    <S.SearchItem>
                        <S.ItemFont
                            onClick={() => router.push(`/course/${result.id}`)}
                        >
                            {result.name}
                        </S.ItemFont>
                    </S.SearchItem>
                ))}
            </S.DropdownMenu>
        </S.Dropdown>
    );
};

export default SearchBar;
