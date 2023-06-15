import { FC } from 'react'

interface Props {
  PlanList: string[]
  ListIcon: string
}
const List: FC<Props> = ({ PlanList, ListIcon }) => (
  <ul>
    {PlanList.map((item) => (
      <li key={item} className="text-left text-base my-6">
        <img className="inline mr-4" src={ListIcon} alt="ListIcon" />
        {item}
      </li>
    ))}
  </ul>
)
export default List
