/* eslint-disable no-underscore-dangle */
import { FC, useEffect, useState } from 'react'
import ListItem from './components/ListItem'
import mockData from './assets/mockData'
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
  return (<>
  {reportData.map((item) => console.log(item._id))}</>)
}

export default ListView
