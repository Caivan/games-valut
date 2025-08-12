import { styled, keyframes } from '@games-vault/gamesvault-ui';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const SkeletonContainer = styled.div`
  width: 100%;
`;

interface SkeletonElementProps {
  height?: string;
  width?: string;
  borderRadius?: string;
  marginBottom?: string;
}

export const SkeletonElement = styled.div<SkeletonElementProps>`
  height: ${({ height = '12px' }) => height};
  width: ${({ width = '100%' }) => width};
  border-radius: ${({ borderRadius = '4px' }) => borderRadius};
  margin-bottom: ${({ marginBottom = '0' }) => marginBottom};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
`;
