import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import { Footer } from './components/Footer'
import { BlogList } from './pages/BlogList'
import { BlogPost } from './pages/BlogPost'

function Portfolio() {
  return (
    <main>
      <Hero />
      <Projects />
      <Stack />
      <Footer />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}
