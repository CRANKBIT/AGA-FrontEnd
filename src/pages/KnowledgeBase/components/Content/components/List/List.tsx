import ContentList from '../ContentList/ContentList'

export default function ReusableList() {
  const formCreation = {
    title: 'From Creation',
    items: [
      { id: 1, text: 'Steps to create a new report' },
      { id: 2, text: 'Steps to edit an existing report' },
      { id: 3, text: 'Steps to edit a contact report' },
      { id: 4, text: 'Steps to edit a template' },
      { id: 5, text: 'Creating a complex report' },
    ],
  }

  const payments = {
    title: 'Payments',
    items: [
      { id: 1, text: 'Payment shows failed' },
      { id: 2, text: 'About refund policy' },
      { id: 3, text: 'Privacy of card payments' },
      { id: 4, text: 'Upgrading to a premium account' },
    ],
  }

  const account = {
    title: 'Account',
    items: [
      { id: 1, text: 'What to do when forgetting password' },
      { id: 2, text: 'How to activate dark mode' },
      { id: 3, text: 'Enable / Disable 2-step verification' },
    ],
  }

  return (
    <div className="flex flex-wrap w-full text-sm">
      <ContentList title={formCreation.title} items={formCreation.items} />
      <ContentList title={payments.title} items={payments.items} />
      <ContentList title={account.title} items={account.items} />
    </div>
  )
}
