import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center">
    {children}
  </div>
)