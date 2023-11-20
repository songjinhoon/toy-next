'use client';

import '@progress/kendo-theme-default/dist/all.css';
import {
  Grid,
  GridCellProps,
  GridColumn,
  GridDataStateChangeEvent,
  GridPageChangeEvent,
  GridSortChangeEvent,
} from '@progress/kendo-react-grid';
import React, { FC, useEffect, useState } from 'react';
import { PagerTargetEvent } from '@progress/kendo-react-data-tools';
import UpdateButton from '@/app/components/atom/button/updateButton';
import { useRouter } from 'next/navigation';
import {
  DataResult,
  orderBy,
  process,
  SortDescriptor,
  State,
} from '@progress/kendo-data-query';

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

const initialOption: PageState = { skip: 0, take: 10 };

const initialSort: Array<SortDescriptor> = [
  { field: 'ProductName', dir: 'asc' },
];

const KendoGrid: FC<Props> = ({ datas, options }) => {
  const router = useRouter();
  const [result, setResult] = useState<DataResult>();
  const [dataState, setDataState] = useState<State>();

  const dataStateChange = (event: GridDataStateChangeEvent) => {
    let updatedState = createDataState(event.dataState);
    setResult(updatedState.result);
    setDataState(updatedState.dataState);
  };

  const createDataState = (dataState: State) => {
    return {
      result: process(datas.slice(0), dataState),
      dataState: dataState,
    };
  };

  const getUpdateButton = (e: GridCellProps) => (
    <UpdateButton
      _onClick={() => router.push(`/admin/products/${e.dataItem.id}`)}
    />
  );

  // const [page, setPage] = useState<PageState>();
  const [pageSizeValue, setPageSizeValue] = useState<
    number | string | undefined
  >();
  const [sort, setSort] = useState(initialSort);

  const pageChange = (event: GridPageChangeEvent) => {
    const targetEvent = event.targetEvent as PagerTargetEvent;
    const take = targetEvent.value === 'All' ? datas.length : event.page.take;
    if (targetEvent.value) {
      setPageSizeValue(targetEvent.value);
    }
    const initialState = createDataState({
      ...event.page,
      take,
    });
    console.log(initialState);
    setResult(initialState.result);
    setDataState(initialState.dataState);
  };

  useEffect(() => {
    const initialState = createDataState(initialOption);
    console.log(initialState);
    setResult(initialState.result);
    setDataState(initialState.dataState);
  }, []);

  return (
    <div>
      {result && (
        <Grid
          data={result}
          {...dataState}
          onDataStateChange={dataStateChange}
          style={{ height: '100%' }}
          sortable={true}
          sort={sort}
          onSortChange={(e: GridSortChangeEvent) => {
            setResult(
              orderBy(
                datas.slice(
                  dataState?.skip,
                  dataState?.take! + dataState?.skip!,
                ),
                sort,
              ) as any,
            );
            setSort(e.sort);
          }}
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
      )}
    </div>
  );
};

export default KendoGrid;
