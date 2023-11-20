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
import { ColumnMenuCheckboxFilter } from '@/app/components/organism/columnMenu';

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

const initialOption: PageState = { skip: 0, take: 15 };

const initialSort: Array<SortDescriptor> = [
  { field: 'ProductName', dir: 'asc' },
];

const KendoGrid: FC<Props> = ({ datas, options }) => {
  const router = useRouter();
  const [result, setResult] = useState<DataResult>();
  const [dataState, setDataState] = useState<State>();
  const [sort, setSort] = useState(initialSort);
  const [page, setPage] = useState<any>();
  const [pageSizeValue, setPageSizeValue] = useState<
    number | string | undefined
  >();

  const createDataState = (dataState: State): any => {
    return {
      result: process(datas.slice(0), dataState),
      dataState: dataState,
    };
  };

  const updateDataState = (event: GridDataStateChangeEvent) => {
    console.log('DATA');
    const data = createDataState({
      ...page,
      ...event.dataState,
    });
    setResult(data.result);
    setDataState(data.dataState);
  };

  const pageChange = (event: GridPageChangeEvent) => {
    console.log('PAGE');
    const targetEvent = event.targetEvent as PagerTargetEvent;
    const take = targetEvent.value === 'All' ? datas.length : event.page.take;
    if (targetEvent.value) {
      setPageSizeValue(targetEvent.value);
    }
    const initialState = createDataState({
      ...event.page,
      take,
    });
    setPage(event.page);
    setResult(initialState.result);
    setDataState(initialState.dataState);
  };

  const updateSort = (e: GridSortChangeEvent) => {
    console.log('SORT');
    const data = createDataState({
      skip: e.target.props.skip,
      take: e.target.props.take,
    });
    setResult(
      orderBy(
        datas.slice(
          data.dataState.skip,
          data.dataState.take + data.dataState.skip,
        ),
        sort,
      ) as any,
    );
    setDataState(data.dataState);
    console.log(e);
    setSort(e.sort);
  };

  const getUpdateButton = (e: GridCellProps) => (
    <UpdateButton
      _onClick={() => router.push(`/admin/products/${e.dataItem.id}`)}
    />
  );

  useEffect(() => {
    const initialState = createDataState(initialOption);
    setDataState(initialState.dataState);
    setResult(initialState.result);
  }, []);

  return (
    <div>
      {result && (
        <Grid
          style={{ height: '100%' }}
          {...dataState}
          data={result}
          sort={sort}
          sortable={true}
          pageable={{
            buttonCount: 5,
            pageSizes: [5, 10, 15, 'All'],
            pageSizeValue,
          }}
          total={datas.length}
          onDataStateChange={updateDataState}
          onPageChange={pageChange}
          onSortChange={updateSort}
        >
          {options?.columns.map((data) => (
            <GridColumn
              key={data.key}
              field={data.key}
              title={data.value}
              width={data.width}
              filter={'boolean'}
              columnMenu={(test) =>
                ColumnMenuCheckboxFilter({
                  ...test,
                  data: datas,
                })
              }
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
