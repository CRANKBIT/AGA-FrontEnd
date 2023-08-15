/* eslint-disable no-underscore-dangle */
import { FC, useEffect, useState } from 'react'
import ListItem from './components/ListItem'
import { getReports } from '@/services/report'

interface ServiecReport {
  Year: string
  Make: string
  Model: string
  Rego: string
  Odometer: string
  CustomerName: string
  service: string[]
  _id: string
}

const ListView: FC = () => {
  const [reportData, setReportData] = useState<ServiecReport[]>([])
  useEffect(() => {
    getReports().then((response) => {
      setReportData(response.data)
    })
  }, [])
  return (
    <>
      {reportData.map((item) => (
        <ListItem key={item._id} {...item} />
      ))}
    </>
  )
}

export default ListView
