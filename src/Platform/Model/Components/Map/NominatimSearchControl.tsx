import React, { useState, useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

interface NominatimSearchControlProps {
  setFacilityCoordinates: (coords: { lat: number; lng: number }) => void;
}

interface Suggestion {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
}

const ControlContainer = styled.div`
  .leaflet-control {
    background: none;
    border: none;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input<{ isVisible: boolean }>`
  width: ${props => props.isVisible ? '200px' : '0'};
  padding: ${props => props.isVisible ? '5px' : '0'};
  border: ${props => props.isVisible ? '1px solid #ccc' : 'none'};
  border-radius: 4px;
  font-size: 12px;
  margin-top: 20px;
  margin-left: 5px;
  transition: all 0.3s ease-in-out;
  outline: none;
  position: absolute;
  left: ${props => props.isVisible ? '30px' : '0'};
  opacity: ${props => props.isVisible ? '1' : '0'};
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const IconContainer = styled.div`
  cursor: pointer;
  padding: 9px;
  background-color: #fff;
  border-radius: 4px;
  margin-top: 20px;
  z-index: 1;
  box-shadow: 0 1px 3px rgba(0,0,0,0.65);
`;

const SuggestionsList = styled.ul<{ isVisible: boolean }>`
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 30px;
  background: white;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  max-height: 200px;
  overflow-y: auto;
  width: 200px;
  display: ${props => props.isVisible ? 'block' : 'none'};
  z-index: 1000;

  li {
    padding: 5px;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const NominatimSearchControl: React.FC<NominatimSearchControlProps> = ({ setFacilityCoordinates }) => {
  const map = useMap();
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    L.DomEvent.disableClickPropagation(container);

    const control = L.Control.extend({
      onAdd: function() {
        return container;
      }
    });

    const searchControl = new control({ position: 'topleft' });
    map.addControl(searchControl);

    return () => {
      map.removeControl(searchControl);
    };
  }, [map]);

  const toggleInput = () => {
    setIsInputVisible(!isInputVisible);
    if (!isInputVisible) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 300); // Wait for the animation to complete
    } else {
      setInputValue('');
      setSuggestions([]);
    }
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputValue(query);

    if (query.length > 2) {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`);
        const data: Suggestion[] = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    const lat = parseFloat(suggestion.lat);
    const lon = parseFloat(suggestion.lon);
    const coordinates = { lat, lng: lon };
    map.setView(coordinates, 13);
    setFacilityCoordinates(coordinates);
    setInputValue(suggestion.display_name);
    setSuggestions([]);
    setIsInputVisible(false);
  };

  return (
    <ControlContainer ref={containerRef}>
      <SearchForm onSubmit={(e) => e.preventDefault()}>
        <IconContainer onClick={toggleInput}>
          <FontAwesomeIcon icon={faSearch} />
        </IconContainer>
        <SearchInput
          ref={inputRef}
          type="text"
          placeholder="Search for a place..."
          isVisible={isInputVisible}
          value={inputValue}
          onChange={handleInputChange}
        />
      </SearchForm>
      <SuggestionsList isVisible={suggestions.length > 0 && isInputVisible}>
        {suggestions.map((suggestion) => (
          <li key={suggestion.place_id} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion.display_name}
          </li>
        ))}
      </SuggestionsList>
    </ControlContainer>
  );
};

export default NominatimSearchControl;