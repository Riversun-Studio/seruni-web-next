import React from 'react'
import Head from 'next/head'

const MetaTags = () => {
  return (
    <Head>
      <title>Seruni</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="We are SERUNI, a creative social media agency based in Bandung,
        or wherever we like to work. We’re young, smart, and free!
        Even the sky is not our limit.
        We don’t work for you, but we want to work with you.
        Together, let’s conquer the digital world."
      />
      {/* Open Graph/Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://seruni-stagging-app.web.app/" />
      <meta property="og:title" content="Seruni" />
      <meta property="og:description" content="We are SERUNI, a creative social media agency based in Bandung, or wherever we like to work. We’re young, smart, and free! Even the sky is not our limit. We don’t work for you, but we want to work with you. Together, let’s conquer the digital world." />
      <meta property="og:image" content="./img/seruni-sticker.webp" />
      {/* Twitter */}
      <meta property="twitter:card" content="./img/seruni-sticker.webp" />
      <meta property="twitter:url" content="https://seruni-stagging-app.web.app/" />
      <meta property="twitter:title" content="Seruni" />
      <meta property="twitter:description" content="We are SERUNI, a creative social media agency based in Bandung, or wherever we like to work. We’re young, smart, and free! Even the sky is not our limit. We don’t work for you, but we want to work with you. Together, let’s conquer the digital world." />
      <meta property="twitter:image" content="./img/seruni-sticker.webp" />
    </Head>
  )
}

export default MetaTags
