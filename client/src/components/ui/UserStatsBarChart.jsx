import React from 'react'
import BarChartDay from './BarChartDay.jsx'
const UserStatsBarChart = ({ title }) => {
    return (
        <div className='stats-container pt-4'>
            <h2 className='font-medium text-xl'>{title}</h2>
            <div className='flex flex-row justify-evenly gap-x-2  bg-zinc-300 w-full h-40 rounded-2xl'>
                <BarChartDay day="Monday" value={1} />
                <BarChartDay day="Tuesday" value={4} />
                <BarChartDay day="Wednesday" value={5} />
                <BarChartDay day="Thursday" value={2} />
                <BarChartDay day="Friday" value={8} />
                <BarChartDay day="Saturday" value={8} />
                <BarChartDay day="Sunday" value={8} />
            </div>
        </div>
    )
}

export default UserStatsBarChart