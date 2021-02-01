import { Link } from 'react-router-dom'
import HomeInteractive from '../components/basic/HomeInteractive';
import './Home.scss'

const Home = () => {
  return (
    <>
      <HomeInteractive />
      <div className="layout">
        <Link className="linkStyle" to="/visitors">방문자</Link>
        <Link className="linkStyle" to="/own" >주인</Link>
      </div>
    </>
  )
}

export default Home