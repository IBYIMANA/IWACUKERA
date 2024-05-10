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
          <h1 className='text-4xl font-bold text-center -mt-14'>Ibikoresho byumuco</h1>
          <div className='grid justify-around grid-cols-1 gap-10 px-4 lg:grid-cols-4 md:grid-cols-2'>
            <div className='justify-center bg-white rounded-lg shadow-lg hover:scale-105'> 
            <img src="../public/uruswo.jpg" className="transition duration-300 transform bg-white rounded-md hover:scale-105"/>
            <p className='text-2xl font-bold text-center'>URUSYO</p>
            <p>Urusyo rusobanura ibuye, rimeze nk'uruziga useraho (rwo gusya ingano), uruziga rukomey . Mu kwagura ikintu cyizengurutse cyane ibyatsi cyangwa uruziga rwa foromaje . Iri jambo rishobora kandi kwerekeza ikirundo cy'ibiti bitwikiriwe nisi ikoreshwa mu gukora amakara .</p>
            </div>
            <div className='justify-center bg-white rounded-lg shadow-lg hover:scale-105'> 
            <img src="../public/ingobyi.jpg" className="transition duration-300 transform bg-white rounded-md hover:scale-105"/>
            <p className='text-2xl font-bold text-center'>INGOBYI</p>
            <p>Ingobyi ya Kinyarwanda ni igikoresho gifite ibigwi n’amateka ahambaye mu muco wu Rwanda, kikaba ari kimwe mu bigaragaza intekerezo z’ihangabuhanga abantu b'Abanyarwanda bari bakungahayeho aho yabafashaga guhanga ibikoresho bibafasha gukemura ibibazo biriho muri icyo gihe hari mo ingobyi yo guheka abarwayi.</p>
            </div>
            <div className='justify-center bg-white rounded-lg shadow-lg hover:scale-105'> 
            <img src="../public/inkongoro.jpg" className="transition duration-300 transform bg-white rounded-md hover:scale-105"/>
            <p className='text-2xl font-bold text-center'>IGISABO</p>
            <p> Igisabo ni igikoresho cyubashywe mu muco nyarwanda kuva kera, cyifashishwa mu gikorwa cyo ‘gucunda amata’, amata nayo akaba ari ikinyobwa gifite intungamubiri nyinshi ku mubiri w’umuntu.</p>
            <p>inkongoro nigikoresho kera  banyweramo amata</p>
            </div>
            <div className='justify-center bg-white rounded-lg shadow-lg hover:scale-105'> 
            <img src="../public/igicuma.webp" className="transition duration-300 transform bg-white rounded-md hover:scale-105"/>
            <p className='text-2xl font-bold text-center'>UDUCUMA</p>
            <p> mumuco nyarwanda iyo umuntu yagusuraga wamyakirizaga icyokunywa nkinzoga ,amata ibi nibikoresho bakoreshaga banyweramo inzoga ,banazibikamo ibyo bita kuzitara kugirango zishye </p>
            </div>
            <a href="https://www.google.com/search?q=ibikoresho%20bya%20kinyarwanda%20murukari&udm=2&uds=ADvngMg6Q0mwSNoULKN8tZh6vlSyTpTK5inzZAUgd6JsQ1OV4Scs27FSbZp7GRanKKwWi6Qw56kc&tbs=rimg:CZeOwNvG6PlbYToTiyR8K7nYsgIAwAIA2AIA4AIA&cs=1&hl=en&sa=X&ved=0CBoQuIIBahcKEwjIqrD12oKGAxUAAAAAHQAAAAAQDw&biw=1536&bih=738&dpr=1.25#vhid=o-lN4ifn3q8WQM&vssid=mosaic">
            <button className='w-32 h-10 text-white bg-green-600 rounded-lg shadow-xl hover:bg-white hover:text-black'>Read More</button>
            </a>
          </div>  
        </div>
  )
}

export default Museum