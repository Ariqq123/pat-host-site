import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CheckoutPage } from './pages/Checkout'
import { CompletePage } from './pages/Complete'
import { HomePage } from './pages/Home'
import { ThemeProvider } from './theme'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/complete" element={<CompletePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
