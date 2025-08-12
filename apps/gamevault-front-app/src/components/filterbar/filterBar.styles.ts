import { Button, styled } from '@games-vault/gamesvault-ui';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;

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
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const FilterTag = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.sizes.label};
`;

export const CloseButton = styled(Button)`
  border: none;
  width: 18px;
  height: 18px;
  padding: 0;
  font-size: ${({ theme }) => theme.typography.sizes.label};
  border-radius: ${({ theme }) => theme.radii.xl};
  background-color: ${({ theme }) => theme.colors.danger};
`;
