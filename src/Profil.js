import React from 'react'
import fetchAPI from './fetchAPI'

const Profil = (props) => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const getUser = async () => {
      const response = await fetchAPI('GET', 'user', {})
      setLoading(!loading)
      console.log('[log] response ', response)
    }
    getUser()
  }, [])

  if (loading) return 'loading'

  return <h1>profil</h1>
}

export default Profil;