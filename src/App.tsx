import './App.css'
import { Button } from '@/components/ui/button'

function App() {
  return(
  <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold">NextRMM</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">Documentation</Button>
              <Button variant="ghost" size="sm">GitHub</Button>
            </nav>
          </div>
        </div>
      </header>
      
      <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Remote Monitoring & Management
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Monitor and manage your IT infrastructure from anywhere. Open source, secure, and scalable.
          </p>
        </div>
        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      </div>
  )
}

export default App
