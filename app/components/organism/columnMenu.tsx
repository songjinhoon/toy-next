'use client';

import * as React from 'react';
import {
  GridColumnMenuCheckboxFilter,
  GridColumnMenuFilter,
  GridColumnMenuProps,
} from '@progress/kendo-react-grid';
import { Product } from '@/app/types/db';

interface Props extends GridColumnMenuProps {
  data: Product[];
}

export const ColumnMenu = (props: GridColumnMenuProps) => {
  return (
    <div>
      <GridColumnMenuFilter {...props} expanded={true} />
    </div>
  );
};

export const ColumnMenuCheckboxFilter = (props: Props) => {
  return (
    <div>
      <GridColumnMenuCheckboxFilter {...props} expanded={true} />
    </div>
  );
};
