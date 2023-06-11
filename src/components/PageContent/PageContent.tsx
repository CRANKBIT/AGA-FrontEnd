interface PageContentProps {
  children?: React.ReactNode
}

export default function PageContent({ children }: PageContentProps) {
  return (
    <div className="bg-[#E9EFF4] w-full max-w-[975px] flex justify-center pt-[55px]">
      <div>
        <div>{children}</div>
      </div>
    </div>
  )
}
