import React from 'react'
import History from './History'
const Museum = () => {
  return (
    <div>
        <History />
        <div className='px-4 py-40 '>
          <div className='absolute px-24 py-5 mt-40 font-extrabold text-white ml-52'>
          <h1 className='text-6xl text-center '> INZU NDANGA MURANGE</h1>
          <h1 className='text-4xl text-center bg-orange-500 ml-[400px] w-52'>NYANZA</h1>
          <p className='font-bold ml-52'>Inzu Ndangamurage ya Rukari , izwi kandi ku ngoro ndangamurage y’amateka ya kera y'u Rwanda,</p>
          <p className='font-bold ml-52'> ni inzu ndangamurage yo mu Rwanda iherereye mu mujyi wa Nyanza ikaba yarashinzwe mu ngoro  </p>
          <p className='font-bold ml-52'> y'Umwami Mutara III. Ingoro gakondo y'Umwami Mutara III Rudahigwa itanga   incamake irambuye kuri gahunda ya cyami y'u Rwanda</p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1'>
          <img src="../public/nyanza.PNG" />
          <img src="../public/King.jpg" />
          </div>
          </div>
          <h1 className='-mt-4 text-2xl font-bold text-center'>Ibikoresho byumuco</h1>
          <div className='grid justify-around grid-cols-1 gap-10 px-4 lg:grid-cols-4 md:grid-cols-2'>
            <div>
            <img src="../public/uruswo.jpg" className=""/>
            <p className='text-2xl font-bold text-center'>URUSWO</p>
            </div>
          
          <img src="../public/igiseke.jpeg" className=""/>
          <img src="../public/igisabo.jpeg" className=""/>
          <img src="../public/igicuma.webp" className=""/>
          </div>  
        </div>
  )
}

export default Museum