interface Item {
  id: number
  text: string
}

interface ContentListProps {
  title: string
  items: Item[]
}

const ContentList: React.FC<ContentListProps> = ({ title, items }: ContentListProps) => {
  return (
    <div className="w-1/2">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="leading-10 mt-5 mb-5">
        {items.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </div>
  )
}

export default ContentList
