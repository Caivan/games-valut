import { styled } from '@games-vault/gamesvault-ui';

export const FiltersSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.background};
  overflow-x: auto;
  scrollbar-width: none;
`;

