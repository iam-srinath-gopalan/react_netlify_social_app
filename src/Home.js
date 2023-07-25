import { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext'

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext)
  return (
    <main className='Home'>
      {isLoading && <p className="statusMsg">Loading Posts..</p>}
      {fetchError && !isLoading && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
      {!fetchError && !isLoading && (searchResults.length ? (<Feed posts={searchResults} />) :
        (<p style={{ marginTop: "2rem" }}>
          No posts to display
        </p>
        ))}
    </main>
  )
}

export default Home
