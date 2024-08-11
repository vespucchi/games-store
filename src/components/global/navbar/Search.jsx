import React from 'react';
import styled from 'styled-components';

const SearchForm = styled.form`
    height: 100%;
    width: max-content;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

const SearchInput = styled.input`
    width: 250px;
    height: 80%;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 0px 20px;
    background-color: #202024;
    color: #FFFFFF;

    &::placeholder {
        color: #B1B1B3;
        font-weight: 600;
    }
`;

export default function Search() {
  return (
        <SearchForm>
            <SearchInput name="query" placeholder='Search store'/>
        </SearchForm>
  )
}
