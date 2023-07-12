// eslint-disable-next-line
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { FC, useState, useRef, useEffect } from 'react'
import { addDays, format } from 'date-fns'
import { DateRangePicker } from 'react-date-range'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

const DatePicker: FC = () => {
  const [open, setOpen] = useState(false)
  const refOne = useRef<HTMLInputElement>(null)
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ])
  const hideOnEscape = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }
  const handleClickOutside = (event: MouseEvent): void => {
    if (refOne.current && !refOne.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', hideOnEscape, true)
    document.addEventListener('click', handleClickOutside, true)
  }, [])

  return (
    <div className="relative">
      <div className="w-[215px] h-[32px] rounded bg-white flex items-center">
        <input
          value={`${format(state[0].startDate, 'MM/dd/yyyy')}-${format(state[0].endDate, 'MM/dd/yyyy')}`}
          readOnly
          className="inputBox w-[190px]"
        />
        <button type="button" onClick={() => setOpen(!open)}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </button>
      </div>

      <div ref={refOne} className="z-10 absolute top-[35px] right-[0px]">
        {open && (
          <DateRangePicker
            // eslint-disable-next-line
            onChange={(item: any) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={state}
            direction="horizontal"
            rangeColors={['#007AD3']}
          />
        )}
      </div>
    </div>
  )
}

export default DatePicker
