'use client';

import { FC, useEffect, useState } from 'react';

interface Props {
  datas: any;
}

const CommonTableBody: FC<Props> = ({ datas }) => {
  const [render, setRender] = useState<any>();

  useEffect(() => {
    setRender(datas);
  }, []);

  return (
    <>
      {render && (
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          {render.map((data: any, index: number) => {
            return (
              <tr
                key={data._id}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="p-4 w-4">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {++index}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                  {data.first_name}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {data.email}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      )}
    </>
  );
};

export default CommonTableBody;
