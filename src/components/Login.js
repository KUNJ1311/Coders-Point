import React, { Component } from 'react'
import * as Components from './components'

export default function Login() {
  const [signin,toggle]= React.useState(true);
  return (
    
    <>  
    <Components.container>
     <Components.signupcontainer signinIn={signin}>
        <Components.Form>
           <Components.Title>Create Account</Components.Title>
            <Components.Input type='text' placeholder='Name'/>
            <Components.Input type='email' placeholder='Email'/>
            <Components.Input type='password' placeholder='Password'/>
            <Components.Button>Sign Up</Components.Button>
         </Components.Form>
       </Components.signupcontainer>

       <Components.signincontainer signinIn={signin}>
        <Components.overlay signIn={signin}>
          <Components.Title>Welcome back</Components.Title>
          <Components.paragraph>
            To keep  connected with us please login with your personal information 
          </Components.paragraph>
          <Components.ghostButton onclick={()=> toggle(true)}>
            SignIn
        </Components.ghostButton>
        </Components.overlay>
       </Components.signincontainer>
       </Components.container>
     </>

  )
}
