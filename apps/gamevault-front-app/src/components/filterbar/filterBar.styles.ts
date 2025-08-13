import { Card, styled } from '@games-vault/gamesvault-ui';

export const StyledHeader = styled(Card)`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
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

export const FiltersSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.xl};
  position: fixed;
  bottom: 1rem;
  left: 50%vw;
  z-index: 1;
`;
