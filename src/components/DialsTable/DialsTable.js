import React from "react";

const DialsTable = ({ dials, coffeeId }) => {
  return (
    <div class='relative overflow-x-auto sm:rounded-lg m-20'>
      <table class='w-3/4 text-sm text-left text-gray-500 dark:text-gray-400 shadow-md mx-auto'>
        <thead class='text-xs text-gray-700 uppercase dark:text-gray-400'>
          <tr>
            <th scope='col' class='px-6 py-3 bg-gray-50 dark:bg-gray-800'>
              Temperature
            </th>
            <th scope='col' class='px-6 py-3'>
              Weight
            </th>
            <th scope='col' class='px-6 py-3 bg-gray-50 dark:bg-gray-800'>
              Time
            </th>
            <th scope='col' class='px-6 py-3'>
              Yield
            </th>
          </tr>
        </thead>
        <tbody>
          {dials
            .filter((dial) => dial.coffee === coffeeId)
            .map((dial) => (
              <tr class='border-b border-gray-200 dark:border-gray-700'>
                <th
                  scope='row'
                  class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800'>
                  {dial.temp}
                </th>
                <td class='px-6 py-4'>{dial.weight}</td>
                <td class='px-6 py-4 bg-gray-50 dark:bg-gray-800'>
                  {dial.time}
                </td>
                <td class='px-6 py-4'>{dial.volume}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DialsTable;
