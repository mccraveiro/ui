import React from 'react';
import PropTypes from 'prop-types';
import {
  SelectItemStyled, SelectItemLabel, SelectItemIcon, SelectItemTitle,
} from './style';

const SelectItem = ({
  item, onClick, selected,
}) => (
  <SelectItemStyled onClick={item.onItemClick || onClick} selected={selected}>
    <SelectItemLabel>
      <SelectItemIcon>
        {item.component}
      </SelectItemIcon>
      <SelectItemTitle>
        {item.title}
      </SelectItemTitle>
    </SelectItemLabel>
  </SelectItemStyled>
);

SelectItem.propTypes = {
  /** Item to render */
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onItemClick: PropTypes.func,
  }).isRequired,

  /** On click function */
  onClick: PropTypes.func.isRequired,

  /** Is the item selected */
  selected: PropTypes.bool,
};

SelectItem.defaultProps = {
  selected: undefined,
};

export default SelectItem;
