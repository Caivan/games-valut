import { styled, Button } from '@games-vault/gamesvault-ui';

export const FiltersSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const FilterTag = styled(Button)`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.sizes.label};
  background-color: ${({ theme }) => theme.colors.surface};

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceMuted};
  }
`;

export const CloseElement = styled.div`
  border: none;
  width: 18px;
  height: 18px;
  padding: 0;
  font-size: ${({ theme }) => theme.typography.sizes.label};
  border-radius: ${({ theme }) => theme.radii.xl};
  background-color: ${({ theme }) => theme.colors.info};

  &:hover {
    background-color: ${({ theme }) => theme.colors.danger};
  }
`;
