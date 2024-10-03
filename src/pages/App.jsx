import '../assets/App.css'
import Header from '../components/header'
import Layout from '../components/layout'
import Main from '../components/main'

function App() {

  return (
    <>
      <Layout>
        <div>
          <Header/>
          <Main/>
        </div>
      </Layout>
    </>
  )
}

export default App
