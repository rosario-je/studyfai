import React from 'react'

const BarChartDay = ({ day, value }) => {
    return (
        <div className='calendar-container flex flex-col-reverse gap-y-2 items-center py-2'>
            <p className='text-white text-[10px]'>{day}</p>
            <div className='bg-blue-500 w-6 md:w-10 p-2 flex items-center justify-center rounded-[5px]' style={{ height: `${value * 10}px` }}>
                <span className='text-white text-[10px]'>{value}</span>
            </div>
        </div>
    )
}

export default BarChartDay