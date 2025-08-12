import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--background-secondary, #f5f5f5);
  border-bottom: 1px solid var(--border-color, #e0e0e0);
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  form {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const StyledSearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid var(--border-color, #ccc);
  border-radius: 4px;
  font-size: 0.875rem;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: var(--primary-color, #007bff);
  }
`;
