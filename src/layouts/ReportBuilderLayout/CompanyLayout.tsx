import { FC, ReactNode } from 'react'
import FlexLayout, { PageVariant } from '@/layouts/FlexLayout'

interface Props {
  children: ReactNode
}

const ReportBuilderLayout: FC<Props> = ({ children }) => (
  <FlexLayout variant={PageVariant.ReportBuilderPage}>{children}</FlexLayout>
)

export default ReportBuilderLayout
