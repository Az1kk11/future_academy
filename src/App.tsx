import React, { useEffect } from 'react'
import Layout from './Layouts'
import { useDispatch } from 'react-redux'
import AuthUserServices from './Redux/services/userAuth'
import { siginSuccess, signFailure } from './Redux/Slice/UserAuth'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const getUser = async () => {
    try {
      const res = await AuthUserServices.getme()
      dispatch(siginSuccess(res))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (<Layout />)
}

export default App