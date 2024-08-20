import React from 'react';
import styled from 'styled-components';


const SearchForm = styled.form`
    height: 100%;
    width: max-content;
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    width: 250px;
    height: 80%;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 0px 35px;
    color: #FFFFFF;
    background: #202024 5% no-repeat; /*Your Image Link*/
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23B1B1B3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-search'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.3-4.3'/%3E%3C/svg%3E");
    
    &::placeholder {
        color: #B1B1B3;
        font-weight: 600;
    }
`;

export default function Search() {
  return (
        <SearchForm>
            <SearchInput name="query" placeholder='Search store' autoComplete='off' />
        </SearchForm>
  )
}
