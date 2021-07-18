/**
 * Search.tsx
 * Provides search input for available dog breeds.
 */

// Node Modules
import {useCallback, useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';


// Hooks
import {useBreedsAPI} from  '../hooks';

// Styled Components
const StyledSearch = styled.div`
  position: relative;
  height: 1em;
`;

const StyledPre = styled.pre`
  color: grey;
  font-size: 1em;
  margin: 0;
  position: absolute;
`;

const StyledInput = styled.input`
  border: none;
  font-family: monospace;
  font-size: 1em;
  outline: none;
  padding: 0;
  position: absolute;
  width: 100%;
`;

export default function Search() {
  // Hooks
  const {get} = useBreedsAPI();

  const ref = useRef();

  const {isLoading, statusCode} = useSelector(({api}) => api.breeds);
  const breedsAll = useSelector(({breeds}) => breeds.all);

  const [isDisabled, setIsDisabled] = useState(true);
  const [placeholder, setPlaceholder] = useState('hello world');
  const [value, setValue] = useState('');
  const [suggestion, setSuggestion] = useState(null);
  const [autocompleteValue, setAutocompleteValue] = useState('');

  useEffect(() => {
    // Sets placeholder and input to disabled while retrieving dog breeds.
    if (isLoading && statusCode === null) {
      // Displays a loading placeholder when retrieving dog breeds.
      setPlaceholder('Loading...')
      setIsDisabled(true);
    } else {
      setPlaceholder('Search Dog Breed');
      setIsDisabled(false);
    }
  }, [isLoading, statusCode]);

  useEffect(() => {
    // Retrieve available dog breeds.
    get();
  }, [get]);

  const handleKeydown = useCallback((e) => {
    // Tab
    if (e.keyCode === 9) {
      // Sets value to auto complete
      e.preventDefault();
      setValue(suggestion);
    }
  }, [suggestion]);

  useEffect(() => {
    const current = ref.current;
    if (current) {
      current.addEventListener('keydown', handleKeydown);
    }
    return () => {
      current.removeEventListener('keydown', handleKeydown);
    }
  }, [handleKeydown]);

  useEffect(() => {
    // Updates suggestions and autocomplete value when value is changed.
    if (value === '') {
      // Clears suggestion if no input value is provided.
      setSuggestion(null);
      setAutocompleteValue('');
    } else {
      // Finds first breed that matches value for autocomplete suggestion.
      const key = Object.keys(breedsAll).find((key) => key.startsWith(value));
      setSuggestion(key);

      if (key) {
        // Creates autocomplete value if valid key is found.
        const substring = key.substring(value.length, key.length);
        setAutocompleteValue(`${' '.repeat(value.length)}${substring}`);
      } else {
        setAutocompleteValue('');
      }
    }
  }, [breedsAll, value]);

  // Callbacks
  const handleChange = (e) => {
    const {value} = e.target;
    setValue(value);
  };

  return (
    <StyledSearch>
      <StyledInput
        disabled={isDisabled}
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
        ref={ref}
        value={value}
      />
      <StyledPre>{autocompleteValue}</StyledPre>
    </StyledSearch>
  );
}
