import React from 'react'
import { createRoot } from 'react-dom/client'
import Login from '@/presentation/pages/login/login'

const root = createRoot(document.getElementById('main'))
root.render(<Login />)
