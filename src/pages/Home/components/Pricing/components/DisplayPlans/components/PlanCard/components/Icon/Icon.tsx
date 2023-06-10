import {FC} from 'react'
interface Props{
    icon:string
}
const Icon:FC<Props> = ({icon})=>(
    <img src={`${icon}.svg`} alt="icon" />
)

export default Icon