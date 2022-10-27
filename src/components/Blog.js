import React from 'react'
import Navigation from './Navigation/Navigation'

function Blog() {
  return (
    <div>
        <Navigation></Navigation>
        <div style={{margin:'100px'}}>
            <h1>1. what is cors?</h1>
            <p>
            Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
            </p>
            <h1>2. Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p>
            Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.
            </p>

            <p>
                Options:
            </p>
                
            <p>
            Email Password
            </p>

            <p>
                Google
            </p>
                GitHub
            <p>
                And Many more
            </p>


              
            <h1>3. How does the private route work?</h1>
            <p>
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
            </p>

            <h1>4. What is Node? How does Node work?</h1>
            <p>
            Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
            </p>
        </div>
    </div>
  )
}

export default Blog


