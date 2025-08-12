import { styled } from '@games-vault/gamesvault-ui';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
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
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 0.875rem;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.border};
  }
`;
