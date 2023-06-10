export default function SideNavList() {
  const ListItems = [
    { id: 1, item: 'My Reports' },
    { id: 2, item: 'Analytics' },
    { id: 3, item: 'Knowledge Base' },
    { id: 4, item: 'Help & Support' },
  ]

  return (
    <ul>
      {ListItems.map(({ id, item }) => {
        return <li key={id}>{item}</li>
      })}
    </ul>
  )
}
