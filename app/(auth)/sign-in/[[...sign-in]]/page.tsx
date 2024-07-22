// import { SignIn } from '@clerk/nextjs'
// import Image from 'next/image'
// import React from 'react'

// const SignInPage = () => {
//   return (
//     <main className='auth-page'>
//   {/* <Image
//     src="/assets/images/logo2.png"
//     alt='Doc Image'
//     width={685}
//     height={685}
//     className='image-class'
//   /> */}
//   <div className='sign-in-class'>
//   <SignIn />
//   </div>

// </main>

//   )
// }

// export default SignInPage

import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className="auth-page">
      <SignIn />
    </main>
  )
}

export default SignInPage
