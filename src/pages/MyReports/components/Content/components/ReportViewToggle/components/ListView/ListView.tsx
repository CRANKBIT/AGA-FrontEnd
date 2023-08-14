import { FC, useEffect } from 'react'
import ListItem from './components/ListItem'
import mockData from './assets/mockData'
import { getReports } from '@/services/report';

const ListView: FC = () => {
  useEffect(()=>{
    const reportData = getReports();
    console.log('hello')
  },[])
  return (
  <>
    {mockData.map((item) => (
      <ListItem key={item.id} {...item} />
    ))}
  </>
)} 

export default ListView
