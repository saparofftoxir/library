import { useSelector } from "react-redux"
import Layout from "./components/Layout"
import { useEffect } from "react"
function App() {
  const allUsers = useSelector(state => state.users.allUsers)
  const currentUser = useSelector(state => state.users.currentUser)
  const basket = useSelector(state => state.basket.basket)
  const choosenss = useSelector(state => state.choosenss.choosenss)

  useEffect(() => {
    localStorage.setItem('allUsers', JSON.stringify(allUsers))
  }, [allUsers])
  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
  }, [currentUser])
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])
  useEffect(() => {
    localStorage.setItem('choosenss', JSON.stringify(choosenss))
  }, [choosenss])
  return (
    <div>
      <Layout />
    </div>
  )
}

export default App