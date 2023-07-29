import React, { useState, useEffect, useRef, useContext } from 'react';
import { useRouter } from 'next/router';
import { FetchCourses } from 'hooks/useFetchCourses';
import * as S from './styles';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { searchResults, handleKeyPress, handleOnClick, handleInputChange } =
        useContext(FetchCourses);
    const router = useRouter();

    const OnInputChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsDropdownOpen(true);
        setSearchTerm(event.target.value);
        handleInputChange(searchTerm);
    };

    const OnKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleKeyPress(searchTerm);
            setIsDropdownOpen(false);
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
    });

    return (
        <S.Dropdown>
            <S.SearchContainer>
                <S.SearchButton>
                    <S.SearchLogged
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={OnInputChange}
                        onKeyDown={OnKeyPress}
                    />
                    <S.DivImg onClick={() => handleOnClick(searchTerm)}>
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
                {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                        <S.SearchItem key={result.id}>
                            <S.ItemFont
                                onClick={() =>
                                    router.push(`/course/${result.id}`)
                                }
                            >
                                {result.name}
                            </S.ItemFont>
                        </S.SearchItem>
                    ))
                ) : (
                    <S.SearchItem>
                        <S.ItemFont>Nenhum resultado encontrado.</S.ItemFont>
                    </S.SearchItem>
                )}
            </S.DropdownMenu>
        </S.Dropdown>
    );
};

export default SearchBar;
