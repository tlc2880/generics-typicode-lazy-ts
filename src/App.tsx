import { Routes, Route, useNavigate } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import { Suspense } from "react"
import Layout from "./lazy/Layout"
import ErrorFallback from "./lazy/ErrorFallback"
import SkeletonAdmin from './lazy/skeletons/SkeletonAdmin'
import Admin from "./lazy/Admin"
import Home from "./lazy/Home"
import './App.css'

function App() {
  const navigate = useNavigate()
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="admin" element={
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
          >
            <Suspense fallback={<SkeletonAdmin />}>
              <Admin />
            </Suspense>
          </ErrorBoundary>}
        />
      </Route>
    </Routes>
  )
}

export default App
