import React, { useEffect } from 'react'
import Layout from './Layouts'
import { useDispatch, useSelector } from 'react-redux'
import AuthUserServices from './Redux/services/userAuth'
import { getItem } from './Redux/helpers/persistance-storage'
import { selectAuthAdmin, siginAdminSuccess } from './Redux/Slice/adminSlice'

const App: React.FC = () => {
  const { logedIn } = useSelector(selectAuthAdmin)

  const getUser = async () => {
    try {
      await AuthUserServices.getme()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (getItem('tokenAdmin')) {
      getUser()
    }
  }, [logedIn])

  return <Layout />
}

export default App