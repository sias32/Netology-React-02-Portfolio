import React from "react";
import {
  filtersType,
  selectedType,
  onSelectFilterType,
} from "../types/Toolbar.types";

interface ToolbarProps {
  filters: filtersType;
  selected: selectedType;
  onSelectFilter: onSelectFilterType;
}

type Props = Readonly<ToolbarProps>;

const Toolbar: React.FC<Props> = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="filters">
      {filters.map((filter) => (
        <button
          key={filter}
          className={selected === filter ? "select" : undefined}
          name={filter}
          value={filter}
          onClick={onSelectFilter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
export type { ToolbarProps };
