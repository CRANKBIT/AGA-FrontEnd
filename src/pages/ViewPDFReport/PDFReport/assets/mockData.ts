interface Props {
  Company: Company
  Tenant: Tenant
  Vehicle: Vehicle
  Report: Report
}

interface Company {
  Domain: string
}

interface Tenant {
  name: string
  email: string
}

interface Vehicle {
  make: string
  year: string
  model: string
  rego: string
  odo: string
}

interface Report {
  title: string
  createdAt: string
  status: string
  service: string[]
  comments: string[]
}

const mockData: Props = {
  Company: {
    Domain: 'CompanyA',
  },
  Tenant: {
    name: 'John Doe',
    email: 'JohnDoe@abc.com',
  },
  Vehicle: {
    make: 'BMW',
    model: 'X3',
    year: '2021',
    rego: 'XNS423',
    odo: '68833',
  },
  Report: {
    title: 'Service Report',
    createdAt: '11 Aug 23',
    status: 'Resolved',
    service: [
      'Replace new wipers',
      'Replace Cabin Air filter',
      'Replace Engine Oil filters',
      'Replace Engine Oil',
      'Replace new wipers',
      'Replace Cabin Air filter',
      'Replace Engine Oil filters',
      'Replace Engine Oil',
      'Replace new wipers',
      'Replace Cabin Air filter',
      'Replace Engine Oil filters',
      'Replace Engine Oil',
      'Replace new wipers',
      'Replace Cabin Air filter',
      'Replace Engine Oil filters',
      'Replace Engine Oil',
    ],
    comments: [
      'New wiper functionality check ok.',
      'New Cabin Air filter installed',
      'New Engine Oil filter installed.',
      'Flush old Engine Oil and refill new Engine oil.',
      'New wiper functionality check ok.',
      'New Cabin Air filter installed',
      'New Engine Oil filter installed.',
      'Flush old Engine Oil and refill new Engine oil.',
      'New wiper functionality check ok.',
      'New Cabin Air filter installed',
      'New Engine Oil filter installed.',
      'Flush old Engine Oil and refill new Engine oil.',
      'New wiper functionality check ok.',
      'New Cabin Air filter installed',
      'New Engine Oil filter installed.',
      'Flush old Engine Oil and refill new Engine oil.',
    ],
  },
}

export default mockData
