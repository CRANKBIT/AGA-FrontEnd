/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const PublicLoginRoute: React.FC = () => {
  const { url, userLS } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const decoded_url = decodeURIComponent(url as string)
    const decoded_user = decodeURIComponent(userLS as string)
    localStorage.setItem('user', decoded_user)
    navigate(decoded_url)
  }, [])
  return null
}

export default PublicLoginRoute
