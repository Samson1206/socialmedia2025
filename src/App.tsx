import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PlatformList from './pages/PlatformList'
import EcommercePlatformList from './pages/EcommercePlatformList'
import SearchEngineList from './pages/SearchEngineList'
import Blog from './pages/Blog'
import About from './pages/About'
import Community from './pages/Community'
import Register from './pages/Register'
import Login from './pages/Login'
import Member from './pages/Member'
import Tools from './pages/Tools'
import Learning from './pages/Learning'
import AccountPlan from './pages/AccountPlan'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<PlatformList />} />
            <Route path="/ecommerce-platforms" element={<EcommercePlatformList />} />
            <Route path="/search-engines" element={<SearchEngineList />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/member" element={<Member />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/account-plan" element={<AccountPlan />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App 