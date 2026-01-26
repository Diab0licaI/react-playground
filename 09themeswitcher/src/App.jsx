import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() { 
  const [themeMode, setThemeMode] = useState("ligth")

  const ligthTheme = () => {
    setThemeMode("ligth")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme mode//

  useEffect(() => {
      document.querySelector('html').classList.remove("ligth","dark")
      document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (

<ThemeProvider value={{themeMode, ligthTheme, darkTheme}}>   
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
            </div>

   </ThemeProvider>           

  )
}

export default App
