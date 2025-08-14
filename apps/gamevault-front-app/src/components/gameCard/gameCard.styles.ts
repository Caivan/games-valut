import { styled } from '@games-vault/gamesvault-ui';

export const GameImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: ${({ theme }) => theme.radii.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

export const GameMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Badge = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.surfaceMuted};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-size: ${({ theme }) => theme.typography.sizes.label};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: linear-gradient(
    -100deg,
    ${({ theme }) => theme.colors.surfaceMuted} -100%,
    ${({ theme }) => theme.colors.accent} 100%
  );
`;
