import React, { useEffect } from 'react'
import Layout from './Layouts'
import { useDispatch, useSelector } from 'react-redux'
import AuthUserServices, { selectAuth } from './Redux/services/userAuth'
import { siginSuccess, signFailure } from './Redux/Slice/UserAuth'

const App: React.FC = () => {
    const dispatch = useDispatch()
    const { logedIn } = useSelector(selectAuth)
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