import React, { useEffect, useContext } from 'react'
import Contextpage from '../Contextpage';
import Animecard from '../components/Animecard';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import { Pagebtn } from '../components/Pagebtn';
import { Helmet } from 'react-helmet';

function Ongoing() {

  const { loader, page, fetchOngoing, ongoing } = useContext(Contextpage);
    
    useEffect(() => {
      fetchOngoing();
    }, [page])


  return (
      <>
        <Helmet>
          <title>AnimeHub | Ongoing animes</title>
          </Helmet>

        <div className='w-full bg-[#10141e] md:p-10 mb-20 md:mb-0'>
            <Header />
            <motion.div
                layout
                className="w-full md:p-2 flex flex-wrap relative justify-evenly md:justify-around">
                <AnimatePresence>
                    {
                        loader ?  <span className="loader m-10"></span>:
                            <>
                                {ongoing?.map((on_going) => (
                                    <Animecard key={on_going.id} anime={on_going} />
                                ))}
                            </>
                    }
                </AnimatePresence>
            </motion.div>
            <Pagebtn/>
            
        </div>
      </>
  )
}

export default Ongoing