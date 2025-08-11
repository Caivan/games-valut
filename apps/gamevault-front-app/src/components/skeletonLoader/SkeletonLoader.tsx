import { Card } from '@games-vault/gamesvault-ui';
import { SkeletonElement, SkeletonContainer } from './skeletonLoader.styles';

function SkeletonLoader() {
  return (
    <Card>
      <SkeletonContainer>
        {/* Game Image placeholder */}
        <SkeletonElement
          height="200px"
          borderRadius="8px"
          marginBottom="16px"
        />
        {/* Title and Badge area */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px',
          }}
        >
          <SkeletonElement height="16px" width="60%" />
          <SkeletonElement height="20px" width="50px" borderRadius="12px" />
        </div>
        {/* Provider name */}
        <SkeletonElement height="12px" width="40%" marginBottom="12px" />
        {/* Tags */}
        <SkeletonElement height="12px" width="70%" marginBottom="16px" />
        {/* Button */}
        <SkeletonElement height="16px" width="100%" />
      </SkeletonContainer>
    </Card>
  );
}

export default SkeletonLoader;
