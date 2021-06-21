import Head from "next/head"
import React from "react"

const Meta: React.FC<{}> = ({}) => {
  return (
    <Head>
      <title>Twitter</title>
      <meta name="description" content="Twitter clone" />
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta
