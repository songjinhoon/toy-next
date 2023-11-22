const CommonTableHeader = () => {
  return (
    <thead className="bg-gray-100 dark:bg-gray-700">
      <tr>
        <th scope="col" className="p-4">
          <input
            id="checkbox-all"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-all" className="sr-only">
            checkbox
          </label>
        </th>
        <th
          scope="col"
          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
        >
          no
        </th>
        <th
          scope="col"
          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
        >
          firstName
        </th>
        <th
          scope="col"
          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
        >
          email
        </th>
        <th scope="col" className="p-4">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
};

export default CommonTableHeader;
