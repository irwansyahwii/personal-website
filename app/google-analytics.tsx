'use client';

import Script from "next/script"

export const GoogleAnalytics = ()=>{
  return (
    <>
      <Script async={true} src="https://www.googletagmanager.com/gtag/js?id=G-LYKN6Q6RD4"></Script>
      <Script id="inline-GA">
        {
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LYKN6Q6RD4');                  

          `
        }
      </Script>
    </>
  )
}