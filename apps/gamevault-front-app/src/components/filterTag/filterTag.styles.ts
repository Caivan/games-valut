import { styled, Button } from '@games-vault/gamesvault-ui';

export const FilterTagContainer = styled(Button)`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.25rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.sizes.label};
  background-color: ${({ theme }) => theme.colors.surface};

  &:hover {1
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
