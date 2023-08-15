/* eslint-disable no-underscore-dangle */
import { FC, useEffect, useState } from 'react'
import CardItem from './components/CardItem/CardItem'
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

const CardView: FC = () => {
  const [reportData, setReportData] = useState<ServiecReport[]>([])
  useEffect(() => {
    getReports().then((response) => {
      setReportData(response.data)
    })
  }, [])
  return (
    <div className="grid grid-cols-3 gap-6">
      {reportData.map((item) => (
        <CardItem key={item._id} {...item} />
      ))}
    </div>
  )
}

export default CardView
