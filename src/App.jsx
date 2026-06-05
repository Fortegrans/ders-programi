import { useState, useEffect } from 'react'
import { collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from './firebase'
import DersFormu from './components/DersFormu'
import DersProgrami from './components/DersProgrami'

function App() {
  const [dersler, setDersler] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'dersler'), (snapshot) => {
      const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
      setDersler(data)
    })
    return () => unsub()
  }, [])

  async function dersEkle(yeniDers) {
    await addDoc(collection(db, 'dersler'), yeniDers)
  }

  async function dersSil(id) {
    await deleteDoc(doc(db, 'dersler', id))
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