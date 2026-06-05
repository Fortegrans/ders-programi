import React from 'react'

const GUNLER = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma']
const SAATLER = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']

function DersProgrami({ dersler, onDersSil }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>Saat</th>
            {GUNLER.map(gun => (
              <th key={gun}>{gun}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SAATLER.map(saat => (
            <tr key={saat}>
              <td><strong>{saat}</strong></td>
              {GUNLER.map(gun => {
                const ders = dersler.find(d => d.gun === gun && d.saat === saat)
                return (
                  <td key={gun} className={ders ? 'table-success' : ''}>
                    {ders ? (
                      <div>
                        <div>{ders.dersAdi}</div>
                        <button
                          className="btn btn-danger btn-sm mt-1"
                          onClick={() => onDersSil(ders.id)}
                        >
                          Sil
                        </button>
                      </div>
                    ) : ''}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DersProgrami