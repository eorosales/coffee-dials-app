import React from "react";

const DialsTable = ({ dials, coffeeId, deleteDial }) => {
  return (
    <div className='relative overflow-x-auto sm:rounded-lg m-20'>
      <table className='w-3/4 text-sm text-left text-gray-500 dark:text-gray-400 shadow-md mx-auto'>
        <thead className='text-xs text-gray-700 uppercase dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>
              Temperature ({`\u00b0`}F)
            </th>
            <th scope='col' className='px-6 py-3'>
              Weight (g)
            </th>
            <th scope='col' className='px-6 py-3 bg-gray-50 dark:bg-gray-800'>
              Time (seconds)
            </th>
            <th scope='col' className='px-6 py-3'>
              Yield (g)
            </th>
          </tr>
        </thead>
        <tbody>
          {dials
            .filter((dial) => dial.coffee === coffeeId)
            .map((dial) => (
              <tr
                className='border-b border-gray-200 dark:border-gray-700'
                key={dial.id}>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800'>
                  {dial.temp}
                </th>
                <td className='px-6 py-4'>{dial.weight}</td>
                <td className='px-6 py-4 bg-gray-50 dark:bg-gray-800'>
                  {dial.time}
                </td>
                <td className='px-6 py-4'>{dial.volume}</td>
                <td>
                  <span
                    className='text-slate-300 hover:cursor-pointer hover:text-black'
                    onClick={() => deleteDial(dial.id)}>
                    <svg
                      className='w-4'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'></path>
                    </svg>
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DialsTable;
