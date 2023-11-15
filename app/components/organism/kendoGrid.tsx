'use client';

import '@progress/kendo-theme-default/dist/all.css';
import {
  Grid,
  GridColumn,
  GridPageChangeEvent,
} from '@progress/kendo-react-grid';
import React, { FC, useState } from 'react';
import { PagerTargetEvent } from '@progress/kendo-react-data-tools';

interface Props {
  datas: any;
  options?: {};
}

interface PageState {
  skip: number;
  take: number;
}

const initialDataState: PageState = { skip: 0, take: 10 };

const KendoGrid: FC<Props> = ({ datas, options }) => {
  const [page, setPage] = useState<PageState>(initialDataState);
  const [pageSizeValue, setPageSizeValue] = useState<
    number | string | undefined
  >();

  const pageChange = (event: GridPageChangeEvent) => {
    const targetEvent = event.targetEvent as PagerTargetEvent;
    const take = targetEvent.value === 'All' ? datas.length : event.page.take;

    if (targetEvent.value) {
      setPageSizeValue(targetEvent.value);
    }
    setPage({
      ...event.page,
      take,
    });
  };

  return (
    <div>
      <Grid
        style={{ height: '100%' }}
        data={datas.slice(page.skip, page.take + page.skip)}
        skip={page.skip}
        take={page.take}
        total={datas.length}
        pageable={{
          buttonCount: 4,
          pageSizes: [5, 10, 15, 'All'],
          pageSizeValue: pageSizeValue,
        }}
        onPageChange={pageChange}
      >
        <GridColumn field="ProductID" title="ID" width="40px" />
        <GridColumn field="ProductName" title="Name" width="250px" />
        <GridColumn field="Category.CategoryName" title="CategoryName" />
        <GridColumn field="UnitPrice" title="Price" />
        <GridColumn field="UnitsInStock" title="In stock" />
      </Grid>
    </div>
  );
};

export default KendoGrid;
