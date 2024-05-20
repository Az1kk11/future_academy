import React, { useEffect } from 'react'
import Layout from './Layouts'
import { useDispatch, useSelector } from 'react-redux'
import AuthUserServices, { selectAuth } from './Redux/services/userAuth'
import { siginSuccess } from './Redux/Slice/UserAuth'
import { getItem } from './Redux/helpers/persistance-storage'
import { useLocation, useNavigate } from 'react-router-dom'

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

  // if(getItem('token') === '')

  useEffect(() => {
    getUser()
  }, [logedIn])

  return <Layout />
}

export default App