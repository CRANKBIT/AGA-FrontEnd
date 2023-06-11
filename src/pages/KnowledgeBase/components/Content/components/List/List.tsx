import { FC } from 'react'
import ListContent from '../ListContent'

const ReusableList: FC = () => {
  const ListCreation = [
    {
      title: 'From Creation',
      items: [
        {
          id: 1,
          text: 'Steps to create a new report',
        },
        {
          id: 2,
          text: 'Steps to edit an existing report',
        },
        {
          id: 3,
          text: 'Steps to edit a contact report',
        },
        {
          id: 4,
          text: 'Steps to edit a template',
        },
        {
          id: 5,
          text: 'Creating a complex report',
        },
      ],
    },
    {
      title: 'Payments',
      items: [
        {
          id: 1,
          text: 'Payment shows failed',
        },
        {
          id: 2,
          text: 'About refund policy',
        },
        {
          id: 3,
          text: 'Privacy of card payments',
        },
        {
          id: 4,
          text: 'Upgrading to a premium account',
        },
      ],
    },
    {
      title: 'Account',
      items: [
        {
          id: 1,
          text: 'What to do when forgetting password',
        },
        {
          id: 2,
          text: 'How to activate dark mode',
        },
        {
          id: 3,
          text: 'Enable / Disable 2-step verification',
        },
      ],
    },
  ]

  return (
    <div className="flex flex-wrap text-sm">
      {ListCreation.map(({ title, items }) => (
        <ListContent key={title} title={title} listItems={items} />
      ))}
    </div>
  )
}

export default ReusableList
