import { FC } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import PDFReport from './PDFReport/PDFReport'

const ViewPDFReport: FC = () => (
  <div className="h-screen">
    <PDFViewer
      height="100%"
      style={{
        border: 'none',
      }}
      width="100%"
    >
      <PDFReport />
    </PDFViewer>
  </div>
)

export default ViewPDFReport
