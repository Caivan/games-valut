import { Typography } from '@games-vault/gamesvault-ui';
import { FilterTagContainer, CloseElement } from './filterTag.styles';
interface FilterTagProps {
  onClick: () => void;
  value: string;
  showClose?: boolean;
}

const FilterTag = ({ onClick, value, showClose }: FilterTagProps) => {
  return (
    <FilterTagContainer onClick={onClick}>
      <Typography variant="caption">{value}</Typography>
      {showClose && <CloseElement>x</CloseElement>}
    </FilterTagContainer>
  );
};

export default FilterTag;
