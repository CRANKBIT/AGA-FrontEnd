import { FC } from 'react'
import ListItem from './components/ListItem'
import dummyList from './assets/dummyList'

const ListView: FC = () => (
  <div>
    {dummyList.map((item) => (
      <ListItem key={item.id} {...item} />
    ))}
  </div>
)

export default ListView
