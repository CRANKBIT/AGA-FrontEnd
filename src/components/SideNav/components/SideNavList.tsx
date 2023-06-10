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
        return (
          <li
            className="pl-[56px] px-auto border-l-4 border-background hover:bg-white  hover:bg-opacity-10 hover:border-l-4 hover:border-white"
            key={id}
          >
            {item}
          </li>
        )
      })}
    </ul>
  )
}
