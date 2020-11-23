import Head from 'next/head'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { LoadingContext } from 'context/Loading'
import * as LoadingTypes from 'context/Loading/types'
import Navbar from 'component/layout/Navbar'
import WelcomeScreen from 'layout/WelcomeScreen'
import Fade from 'component/transition/Fade'

interface Props {
  children: JSX.Element;
}

export default function MainLayout(props: Props){

  const { loading, loadingDispatch } = useContext(LoadingContext)
  useEffect(() => {
    if (loading) {
      setTimeout(() => loadingDispatch({ type: LoadingTypes.SET_FALSE }), 2000);
    }
  }, [])

  return (
    <div>
      <Head>
        <title>OPG Kvakić</title>
        <link rel="icon" href="#" />
      </Head>

      <Fade show={loading} duration={500}>
        <WelcomeScreen />
      </Fade>

      <div>
        <Navbar />
        <div> { props.children } </div>
        <div> Footer </div>
      </div>
    </div>
  )
}
