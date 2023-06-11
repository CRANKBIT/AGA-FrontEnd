import { FC } from 'react'
import Icon from './components/Icon/Icon'
import List from './components/List/List'
import Button from './components/Button/Button'

interface Props {
  icon: string
  plan: string
  price: string
  className: string
  PlanList: string[]
  ListIcon: string
  PriceText: string
}
const PlanCard: FC<Props> = ({ icon, plan, price, PlanList, className, ListIcon, PriceText }) => (
  <div className={className}>
    <Icon icon={icon} />
    <div className="text-left">
      <p>{plan}</p>
      <p className={PriceText}>{price}</p>
    </div>
    <List PlanList={PlanList} ListIcon={ListIcon} />
    <Button />
  </div>
)
export default PlanCard
