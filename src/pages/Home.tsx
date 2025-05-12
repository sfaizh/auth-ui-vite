import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className="card">
            <Link to='/login'>
                <h1>Go to Login</h1>
            </Link>
        </div>
    )
}

export default Home