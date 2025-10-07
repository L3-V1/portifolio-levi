import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StyleSheetManager } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import App from './App.tsx'
import Layout from './layouts/Layout.tsx'
import NotFound from './components/NotFound.tsx'
import isPropValid from "@emotion/is-prop-valid"
import './index.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route element={<Layout />}>
              <Route path="/" element={<App />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </StyleSheetManager>
  </StrictMode>
)