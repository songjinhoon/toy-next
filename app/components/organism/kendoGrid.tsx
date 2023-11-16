'use client';

import '@progress/kendo-theme-default/dist/all.css';
import {
  Grid,
  GridCellProps,
  GridColumn,
  GridPageChangeEvent,
} from '@progress/kendo-react-grid';
import React, { FC, useState } from 'react';
import { PagerTargetEvent } from '@progress/kendo-react-data-tools';
import UpdateButton from '@/app/components/atom/button/updateButton';
import { useRouter } from 'next/navigation';

interface OptionColumn {
  key: string;
  value: string;
  width?: string;
}

interface Props {
  datas: any;
  options?: {
    columns: OptionColumn[];
  };
}

interface PageState {
  skip: number;
  take: number;
}

const initialDataState: PageState = { skip: 0, take: 10 };

const KendoGrid: FC<Props> = ({ datas, options }) => {
  const router = useRouter();
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

  const getUpdateButton = (e: GridCellProps) => (
    <UpdateButton
      _onClick={() => router.push(`/admin/products/${e.dataItem.id}`)}
    />
  );

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
        {options?.columns.map((data) => (
          <GridColumn
            key={data.key}
            field={data.key}
            title={data.value}
            width={data.width}
          ></GridColumn>
        ))}
        <GridColumn
          key={'update'}
          title={'update'}
          cell={(e) => getUpdateButton(e)}
        ></GridColumn>
      </Grid>
    </div>
  );
};

export default KendoGrid;
