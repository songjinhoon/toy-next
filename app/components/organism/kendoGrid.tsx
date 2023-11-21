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
import React, { FC, useCallback, useEffect, useState } from 'react';
import UpdateButton from '@/app/components/atom/button/updateButton';
import { useRouter } from 'next/navigation';
import { DataResult, process, State } from '@progress/kendo-data-query';
import { ColumnMenuCheckboxFilter } from '@/app/components/organism/columnMenu';
import { PagerTargetEvent } from '@progress/kendo-react-data-tools';
import { Product } from '@/app/types/db';

interface OptionColumn {
  key: string;
  value: string;
  width?: string;
}

interface Props {
  datas: Product[];
  options?: {
    columns: OptionColumn[];
  };
}

interface DataState extends State {}

const initialOption: DataState = {
  skip: 0,
  take: 15,
  sort: [],
  group: [],
};

const KendoGrid: FC<Props> = ({ datas, options }) => {
  const router = useRouter();
  const [result, setResult] = useState<DataResult>();
  const [dataState, setDataState] = useState<DataState>(initialOption);
  const [pageSizeValue, setPageSizeValue] = useState<
    number | string | undefined
  >();

  const getGridOption = useCallback(
    (setting: DataState) => {
      return {
        result: process(datas.slice(0), setting),
        dataState: setting,
      };
    },
    [datas],
  );

  const updateFilter = useCallback(
    (event: GridDataStateChangeEvent) => {
      const gridOption = getGridOption({
        ...dataState,
        filter: event.dataState.filter,
      });
      setResult(gridOption.result);
      setDataState(gridOption.dataState);
    },
    [getGridOption, dataState],
  );

  const updatePage = useCallback(
    (event: GridPageChangeEvent) => {
      const targetEvent = event.targetEvent as PagerTargetEvent;
      const take = targetEvent.value === 'All' ? datas.length : event.page.take;
      if (targetEvent.value) {
        setPageSizeValue(targetEvent.value);
      }

      const gridOption = getGridOption({
        ...dataState,
        ...event.page,
        take,
      });
      setResult(gridOption.result);
      setDataState(gridOption.dataState);
    },
    [getGridOption, datas, dataState],
  );

  const updateSort = useCallback(
    (e: GridSortChangeEvent) => {
      const gridOption = getGridOption({
        ...dataState,
        sort: e.sort,
      });
      setResult(gridOption.result);
      setDataState(gridOption.dataState);
    },
    [getGridOption, dataState],
  );

  const getUpdateButton = useCallback(
    (e: GridCellProps) => (
      <UpdateButton
        _onClick={() => router.push(`/admin/products/${e.dataItem.id}`)}
      />
    ),
    [router],
  );

  useEffect(() => {
    const gridOption = getGridOption(initialOption);
    setResult(gridOption.result);
    setDataState(gridOption.dataState);
  }, [getGridOption]);

  return (
    <div>
      {result && (
        <Grid
          style={{ height: '100%' }}
          {...dataState}
          data={result}
          sortable={true}
          pageable={{
            buttonCount: 5,
            pageSizes: [5, 10, 15, 'All'],
            pageSizeValue,
          }}
          total={datas.length}
          onDataStateChange={updateFilter}
          onPageChange={updatePage}
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
