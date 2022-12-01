import React from 'react'
import { parseISO, formatDistanceToNow} from 'date-fns'

const TimeAgo = ({timeStamps}) => {

    let timeAgo = '';
    if(timeStamps){
        const date = parseISO(timeStamps)
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} Ago`
    }
  return (
    <div className='ml-3 font-thin'>
        {timeAgo}
    </div>
  )
}

export default TimeAgo