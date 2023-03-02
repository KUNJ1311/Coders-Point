import React, { Component } from "react";
import * as Components from "./Components";

export default function Login() {
  const [signin, toggle] = React.useState(true);
  return (
    <>
      <Components.Container>
        <Components.signupcontainer signinIn={signin}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type="text" placeholder="Name" />
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.signupcontainer>

        <Components.signincontainer signinIn={signin}>
        <Components.Form>
            <Components.Title>Sign In</Components.Title>
            
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Anchor href='#'>Forget password?</Components.Anchor>
            <Components.Button>Sign In</Components.Button>
          </Components.Form>
        </Components.signincontainer>
          <Components.overlaycontainer signinIn={signin}>
          <Components.overlay signIn={signin}>
            <Components.leftoverlaypanel signinIn={signin}>
              <Components.Title>Welcome back</Components.Title>
              <Components.paragraph>
                To keep connected with us please login with your personal
                information
              </Components.paragraph>
              <Components.ghostButton onclick={() => toggle(true)}>
                SignIn
              </Components.ghostButton>
            </Components.leftoverlaypanel>
            <Components.rightoverlaypanel signinIn={signin}>
              <Components.Title>Hello Friends</Components.Title>
              <Components.paragraph>
                Enter your personal details and start journey with us </Components.paragraph>
                <Components.ghostButton onclick={() => toggle(false)}>
                  Sign Up
                </Components.ghostButton>
             
            </Components.rightoverlaypanel>
          </Components.overlay>
          </Components.overlaycontainer>
        
      </Components.Container>
    </>
  );
}
