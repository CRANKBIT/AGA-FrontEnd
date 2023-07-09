import { Tenant } from '@/types/auth'

export const addTenantToLocalStorage = (tenant: Tenant): void => {
  localStorage.setItem('tenant', JSON.stringify(tenant))
}

export const removeTenantFromLocalStorage = (): void => {
  localStorage.removeItem('tenant')
}

export const getTenantFromLocalStorage = (): Tenant | null => {
  const result = localStorage.getItem('tenant')
  const tenant = result ? JSON.parse(result) : null
  return tenant
}
