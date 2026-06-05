import React, { useState } from 'react'

const GUNLER = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
const SAATLER = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']

function DersFormu({ onDersEkle }) {
  const [dersAdi, setDersAdi] = useState('')
  const [gun, setGun] = useState(GUNLER[0])
  const [saat, setSaat] = useState(SAATLER[0])

  function handleSubmit(e) {
    e.preventDefault()
    if (!dersAdi.trim()) return
    onDersEkle({ dersAdi, gun, saat })
    setDersAdi('')
  }

  return (
    <div className="card p-4 mb-4">
      <h5 className="mb-3">Ders Ekle</h5>
      <div className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Ders adı"
            value={dersAdi}
            onChange={e => setDersAdi(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select className="form-select" value={gun} onChange={e => setGun(e.target.value)}>
            {GUNLER.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select" value={saat} onChange={e => setSaat(e.target.value)}>
            {SAATLER.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100" onClick={handleSubmit}>
            Ekle
          </button>
        </div>
      </div>
    </div>
  )
}

export default DersFormu