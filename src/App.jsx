import { useState, useEffect } from 'react'
import DersFormu from './components/DersFormu'
import DersProgrami from './components/DersProgrami'

function App() {
  const [dersler, setDersler] = useState(() => {
    const kayitli = localStorage.getItem('dersler')
    return kayitli ? JSON.parse(kayitli) : []
  })

  useEffect(() => {
    localStorage.setItem('dersler', JSON.stringify(dersler))
  }, [dersler])

  function dersSil(index) {
    const yeni = dersler.filter((_, i) => i !== index)
    setDersler(yeni)
  }

  function dersEkle(yeniDers) {
    setDersler([...dersler, yeniDers])
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">📅 Haftalık Ders Programı</h1>
      <DersFormu onDersEkle={dersEkle} />
      <DersProgrami dersler={dersler} onDersSil={dersSil} />
    </div>
  )
}

export default App