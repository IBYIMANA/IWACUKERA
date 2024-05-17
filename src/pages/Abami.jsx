import React from 'react';
import SubNav from '../Components/SubNav';
import { motion } from "framer-motion"
const Abami = () => {
    return (
        <div className='bg-slate-200'>
            <SubNav />
            <div className='h-screen '>
                <div className='py-40 px-6 sm:px-12 md:px-24 lg:px-36  xl:px-48 bg-slate-50 shadow-lg rounded-md h-17'>
                    < motion.h1
                      initial={{opacity:0,y:-100}}
                      animate={{opacity:1,y:0}}
                      transition={{duration:1 , delay:0.5}}
                    className='text-4xl font-extrabold text-center text-black mb-7 pb-3'>AMATEKA Y'ABAMI B'URWANDA </motion.h1>
                    <motion.p  initial={{opacity:0,x:-100}}
                      animate={{opacity:1,x:0}}
                      transition={{duration:1 , delay:0.5}}className='text-center text-1xl'>U Rwanda rwagiye rutegekwa n’abami batandukanye kuva rwabaho kugeza ubwo abanyamateka babagabanyamo ibyiciro bitatu bakurikije ibihe aribyo: Abami b’ibimanuka, abami b’umushumi n’abami b’ibitekerezo.
                        Abami b’Ibimanuka ni abakomoka kuri Shyerezo, Abami b’umushumi ni abatazwi igihe bategekeye n’ibyabaye ku Ngoma zabo, naho Abami b’Ibitekerezo ni Abami bazwi neza igihe bategekeye n’ibyabaye ku ngoma zabo.
                        Abami b’Ibimanuka bahera kuri Shyerezo bakagera kuri Kazi.
                        Naho Abami b’umushumi bahera kuri Gihanga cyahanze Inka n’Ingoma bakagera kuri Cyilima I Rugwe. Abami b’Ibitekerezo ari nabo ba nyuma bahera kuri Kigeli I Mukobanya bakageza ku Mwami wa nyuma w’u Rwanda ariwe Kigeli V Ndahindurwa.</motion.p>
                </div>
                <motion.h1 initial={{opacity:0,x:-100}}
                      animate={{opacity:2-onabort,x:0}}
                      transition={{duration:1 , delay:0.5}}className="text-3xl font-bold text-center text-blue-700 mb-4">Dore uko abami bategetse u Rwanda bagiye bakurikirana:</motion.h1>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24  sm:pr-12 sm:pl-12 md:pr-24 md:pl-24  '>
                    <div className="container mx-auto">
                        <div className="overflow-x-auto">
                            <table className="table-auto border-collapse border border-gray-500 w-full">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-500 text-blue-400 p-2">Nimero</th>
                                        <th className="border border-gray-500 p-2 text-blue-400 ">Umwami</th>
                                        <th className="border border-gray-500 p-2 text-blue-400">Itariki y'ubwami</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-500 p-2">1</td>
                                        <td className="border border-gray-500 p-2">Gihanga I Ngomijana</td>
                                        <td className="border border-gray-500 p-2">1091-1124</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-500 p-2">2</td>
                                        <td className="border border-gray-500 p-2">Kanyarwanda I Gahima</td>
                                        <td className="border border-gray-500 p-2">1124-1157</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-500 p-2">3</td>
                                        <td className="border border-gray-500 p-2">Yuhi I Musindi</td>
                                        <td className="border border-gray-500 p-2">1157-1180</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-gray-500 p-2">4</td>
                                        <td className="border border-gray-500 p-2">Ndahiro I Ruyange</td>
                                        <td className="border border-gray-500 p-2">1180-1213</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-500 p-2">5</td>
                                        <td className="border border-gray-500 p-2">Ndoba</td>
                                        <td className="border border-gray-500 p-2">1213-1246</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">6</td>
                                        <td className="border border-black p-2">Samembe</td>
                                        <td className="border border-black p-2">1246-1279</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">7</td>
                                        <td className="border border-black p-2">Nsoro I Samukondo</td>
                                        <td className="border border-black p-2">1279-1312</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">8</td>
                                        <td className="border border-black p-2">Ruganzu I Bwimba</td>
                                        <td className="border border-black p-2">1312-1345</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">9</td>
                                        <td className="border border-black p-2">Cyilima I Rugwe</td>
                                        <td className="border border-black p-2">1345-1378</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">10</td>
                                        <td className="border border-black p-2">Kigeli I Mukobanya</td>
                                        <td className="border border-black p-2">1378-1411</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">11</td>
                                        <td className="border border-black p-2">Mibambwe I Sekarongoro I Mutabazi I</td>
                                        <td className="border border-black p-2">1411-1444</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">12</td>
                                        <td className="border border-black p-2">Yuhi II Gahima II</td>
                                        <td className="border border-black p-2">1444-1477</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">13</td>
                                        <td className="border border-black p-2">Ndahiro II Cyamatare</td>
                                        <td className="border border-black p-2">1477-1510</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">14</td>
                                        <td className="border border-black p-2">Ruganzu II Ndoli</td>
                                        <td className="border border-black p-2">1510-1543</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">15</td>
                                        <td className="border border-black p-2">Mutara I Nsoro II Semugeshi</td>
                                        <td className="border border-black p-2">1543-1576</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">16</td>
                                        <td className="border border-black p-2">Kigeli II Nyamuheshera</td>
                                        <td className="border border-black p-2">1576-1609</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">17</td>
                                        <td className="border border-black p-2">Mibambwe II Sekarongoro II Gisanura</td>
                                        <td className="border border-black p-2">1609-1642</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">18</td>
                                        <td className="border border-black p-2">Yuhi III Mazimpaka</td>
                                        <td className="border border-black p-2">1642-1675</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">19</td>
                                        <td className="border border-black p-2">Cyilima II Rujugira</td>
                                        <td className="border border-black p-2">1675-1708</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">20</td>
                                        <td className="border border-black p-2">Kigeli III Ndabarasa</td>
                                        <td className="border border-black p-2">1708-1741</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">21</td>
                                        <td className="border border-black p-2">Mibambwe III Mutabazi II Sentabyo</td>
                                        <td className="border border-black p-2">1741-1746</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">22</td>
                                        <td className="border border-black p-2">Yuhi IV Gahindiro</td>
                                        <td className="border border-black p-2">1746-1802</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">23</td>
                                        <td className="border border-black p-2">Mutara II Rwogera</td>
                                        <td className="border border-black p-2">1802-1853</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">24</td>
                                        <td className="border border-black p-2">Kigeli IV Rwabugili</td>
                                        <td className="border border-black p-2">1853-1895</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">25</td>
                                        <td className="border border-black p-2">Mibambwe IV Rutarindwa</td>
                                        <td className="border border-black p-2">1895-1895</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">26</td>
                                        <td className="border border-black p-2">Yuhi V Musinga</td>
                                        <td className="border border-black p-2">1895-1931</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">27</td>
                                        <td className="border border-black p-2">Mutara III Rudahigwa</td>
                                        <td className="border border-black p-2">1931-1959</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">28</td>
                                        <td className="border border-black p-2">Kigeli V Ndahindurwa</td>
                                        <td className="border border-black p-2">1959-1960</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>

                <div className='flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-12 xl:gap-12 px-20'>
                        <div className='mt-8 bg-gray-100 shadow-lg  hover:bg-red-100 hover:scale-105 rounded-lg flex gap-5'>
                            <img src="/umwami1.jpg" alt="" className='w-1/2' />
                            <div>
                                <h2 className='font-medium mb-2 mt-4'>AMATEKA YA Gihanga I Ngomijana (1091-1124) </h2>
                                <p>Uyu Mwami witwa Gihanga niwe ntangiriro y’ubutegetsi bw’ingoma Nyiginya(fondateur de la dynastie) ni nawe washyizeho gahunda y’Igihugu gitegekwa n’Abami.

                                    Mu ntangiriro z’ubutegetsi bwe, Gihanga nta ngoma yimanye, ahubwo yategekeshaga ibindi birango bibiri aribyo inyundo n’ikindi gikoresho cy’umuziki bita urusengo.</p>
                                <h2 className='mt-2 mb-2 font-medium text-sky-400'>Gihanga yarongoye Abagore benshi </h2>
                                <p>Ikindi amateka garagaza, avuga ko Gihanga yagiye abyara abana batandukanye badahuje ba nyina kuko nawe yari afite abagore benshi nk'uko byari bisanzwe bimenyerewe mu Rwanda rwo ha mbere</p>
                                <a href="https://www.igihe.com/umuco/amateka/amateka-y-umwami-gihanga-i-ngomijana">
                                    <button className='w-32 h-10 text-white bg-green-600 rounded-lg shadow-xl hover:bg-white hover:text-black mt-4 mb-4 ml-20'>Komeza</button>
                                </a>
                            </div>
                        </div>
                        <div className='mt-8 bg-gray-100 shadow-lg hover:bg-red-100 hover:scale-105 rounded-lg flex gap-5 h-96'>
                            <img src="/gahima.jpg" alt="" className='w-1/2 h-90' />
                            <div>
                                <h2 className='font-medium mb-2 mt-28 '>AMATEKA YA Kanyarwanda I Gahima (1124-1157)</h2>
                                <p> Kanyarwanda Gahima waje asimbuye se ku ngoma akaba ngo ari yo mpamvu yahawe ririya zina rya Kanyarwanda kubera inshingano yari asigiwe na se Gihanga zo gukomeza kwagura ubutaka yari arazwe</p>
                                <a href="http://wikirwanda.org/index.php/Umwami_w%E2%80%99u_Rwanda_Kanyarwanda_Gahima(1124-1157)">
                                    <button className='w-32 h-10 text-white bg-green-600 rounded-lg shadow-xl hover:bg-white hover:text-black mt-4 mb-4 ml-20'>Komeza</button>
                                </a>
                            </div>

                        </div>
                        <div className='mt-8 bg-gray-100 shadow-lg rounded-lg  hover:bg-red-100 hover:scale-105 flex gap-5'>
                            <img src="/yuhi.jpg" alt="" className='w-1/2' />
                            <div>
                                <h2 className='font-medium mb-4 mt-10'>AMATEKA YA Yuhi Musindi (1157-1180) </h2>
                                <p> Umwami wakurikiye Kanyarwanda ku itonde ry’abami b’umushumi yitwa Yuhi Musindi akaba yaranitwaga Yuhi ry’i Gara.Aka gace ka Gara rero ngo bishoboka ko baba barashakaga kuvuga Ngara ya Rubungo yari iherereye mu karere ka Bwanacyambwe nkuko ubushakashatsi bubigaragaza. Uyu Mwami niwe mukurambere w’ubwoko bw’ Abasindi ari naho ubu bwoko bukomora iryo zina nkuko benshi mu buzukuru ba Gihanga bagiye batanga amazina y’ubwoko bubakomokaho.

                                </p>
                                <p> Umwami Yuhi V Musinga ni umwe mu bayoboye u Rwanda wagize inyeshyamba nyinshi zarwanyije ubutegetsi bwe, ariko aza kuzamururwaho n’abakoloni b’Abadage.</p>
                                <a href="https://igihe.com/umuco/amateka/article/amateka-y-inyeshyamba-za-mbere-zazengereje-umwami-musinga">
                                    <button className='w-32 h-10 text-white bg-green-600 rounded-lg shadow-xl hover:bg-white hover:text-black mt-7 mb-4 ml-20'>Komeza</button>
                                </a>
                            </div>
                        </div>
                        <div className='mt-8 bg-gray-100 shadow-lg  hover:bg-red-100 hover:scale-105 rounded-lg flex gap-5'>
                            <img src="/abami.jpeg" alt="" className='w-1/2' />
                            <div>
                                <h2 className='font-medium mb-5 mt-5'>AMATEKA YA Yuhi II Gahima (1444-1477)</h2>
                                <p>Umwami Yuhi II Gahima ni mwene Sekarongoro na Matama ya Bigega. Na we azwiho kuba yarashatse abagore benshi ariko amateka atugaragariza babiri gusa barimo Nyirangabo za Nyantabana na Nyankaka wa Samukende, aho babyaranye abana bagera ku munani.</p>
                                <a href="https://igihe.com/umuco/article/abami-10-bashatse-abagore-benshi-mu-mateka-y-u-rwanda">
                                    <button className='w-32 h-10 text-white bg-green-600 rounded-lg shadow-xl hover:bg-white hover:text-black mt-7 mb-4 ml-20'>Komeza</button>
                                </a>
                            </div>
                        </div>
                    </div>


            </div>
        </div>
    );
}

export default Abami;
