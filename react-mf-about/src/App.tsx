import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'


const Header = React.lazy(() => import("react_mf/Header"));
const Footer = React.lazy(() => import("react_mf/Footer"));

import './index.scss'


const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Suspense fallback={'Loading App 2'}>
      <Header />
    </Suspense>
    <div className="text-center">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
        className="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 className="text-xl font-medium leading-tight mb-2">John Doe</h5>
      <p className="text-gray-500">Web designer</p>
    </div>
    <Suspense fallback={'Loading App 2'}>
      <Footer />
    </Suspense>

  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
