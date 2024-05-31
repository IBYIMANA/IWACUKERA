import React from 'react'
import SubNav from '../Components/SubNav'
import { motion } from 'framer-motion';
const Museum = () => {
  return (
    <div>
      <SubNav />
      <div className='px-4 py-40 '>
        <div className='absolute px-8 py-5 mt-40 ml-8 font-semibold text-white md:px-16 md:ml-24 lg:px-24 lg:ml-52'>
          <motion.h1  initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }} className='mt-2 text-center md:text-3xl lg:text-6xl'>INZU NDANGA MURANGE</motion.h1>
          <motion.h1 initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }} className='mx-auto mt-4 text-xl text-center bg-orange-500 md:text-3xl lg:text-4xl lg:w-52'>NYANZA</motion.h1>
          <div>
          < motion.p initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }} className='max-w-md mx-auto mt-4 font-medium md:max-w-lg lg:max-w-xl'>Inzu Ndangamurage ya Rukari, izwi kandi ku ngoro ndangamurage y’amateka ya kera y'u Rwanda,ni inzu ndangamurage yo mu Rwanda iherereye mu mujyi wa Nyanza ikaba yarashinzwe mu ngoro</motion.p>
          < motion.p initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }} className='max-w-md mx-auto mt-2 font-medium md:max-w-lg lg:max-w-xl'>y'Umwami Mutara III. Ingoro gakondo y'Umwami Mutara III Rudahigwa itanga incamake irambuye kuri gahunda ya cyami y'u Rwanda</motion.p>
          </div>
          
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1'>
          <img src="../public/nyanza.PNG" />
          <img src="../public/King.jpg" />

        </div>
      </div>
      <h1 className='mb-5 text-4xl font-bold text-center -mt-14'>Ibikoresho by'umuco</h1>
      <div className='grid justify-around grid-cols-1 gap-10 px-4 lg:grid-cols-4 md:grid-cols-2'>
        <div className='justify-center py-6 bg-white rounded-lg shadow-lg hover:scale-105'>
          <img src="../public/uruswo.jpg" className="transition duration-300 transform bg-white rounded-md hover:scale-100" />
          <p className='py-3 text-2xl font-bold text-center'>URUSYO</p>
          <p className='mb-10 ml-8'>Urusyo rusobanura ibuye, rimeze nk'uruziga useraho (rwo gusya ingano), uruziga rukomey . Mu kwagura ikintu cyizengurutse cyane ibyatsi cyangwa uruziga rwa foromaje.</p>
        </div>
        <div className='justify-center py-6 bg-white rounded-lg shadow-lg hover:scale-100'>
          <img src="../public/ingobyi.jpg" className="transition duration-300 transform bg-white rounded-md hover:scale-105" />
          <p className='py-6 text-2xl font-bold text-center'>INGOBYI</p>
          <p className='ml-10'>Ingobyi ya Kinyarwanda ni igikoresho gifite ibigwi n’amateka ahambaye mu muco wu Rwanda, kikaba ari kimwe mu bigaragaza intekerezo z’ihangabuhanga abantu b'Abanyarwanda bari bakungahayeho aho yabafashaga guhanga ibikoresho .</p>
        </div>
        <div className='justify-center py-6 bg-white rounded-lg shadow-lg hover:scale-100'>
          <img src="../public/inkongoro.jpg" className="transition duration-300 transform bg-white rounded-md hover:scale-105" />
          <p className='py-6 text-2xl font-bold text-center'>IGISABO</p>
          <p className='ml-10 '> Igisabo ni igikoresho cyubashywe mu muco nyarwanda kuva kera, cyifashishwa mu gikorwa cyo ‘gucunda amata’, amata nayo akaba ari ikinyobwa gifite intungamubiri nyinshi ku mubiri w’umuntu.</p>
          
        </div>
        <div className='justify-center py-6 bg-white rounded-lg shadow-lg hover:scale-100'>
          <img src="../public/igicuma.webp" className="transition duration-300 transform bg-white rounded-md h-60 hover:scale-105" />
          <p className='py-6 text-2xl font-bold text-center'>UDUCUMA</p>
          <p className='ml-10'> mumuco nyarwanda iyo umuntu yagusuraga wamyakirizaga icyokunywa nkinzoga ,amata ibi nibikoresho bakoreshaga banyweramo inzoga ,banazibikamo ibyo bita kuzitara kugirango zishye. </p>
        </div>
        <a href="https://www.google.com/search?q=ibikoresho%20bya%20kinyarwanda%20murukari&udm=2&uds=ADvngMg6Q0mwSNoULKN8tZh6vlSyTpTK5inzZAUgd6JsQ1OV4Scs27FSbZp7GRanKKwWi6Qw56kc&tbs=rimg:CZeOwNvG6PlbYToTiyR8K7nYsgIAwAIA2AIA4AIA&cs=1&hl=en&sa=X&ved=0CBoQuIIBahcKEwjIqrD12oKGAxUAAAAAHQAAAAAQDw&biw=1536&bih=738&dpr=1.25#vhid=o-lN4ifn3q8WQM&vssid=mosaic">
          <button className='w-32 h-10 text-white bg-green-600 rounded-lg shadow-xl ml-96 hover:bg-yellow-400 hover:text-black'>Read More</button>
        </a>
      </div>
    </div>
  )
}

export default Museum
