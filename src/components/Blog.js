import React from 'react'
import Navigation from './Navigation'

function Blog() {
  return (
    <div>
        <Navigation></Navigation>
        <div style={{margin:'100px'}}>
            <h1>1. What is the purpose of react router?</h1>
            <p>
                React router is the official and standard routing package that we use in React.js to change views, and move between pages.
            </p>
            <p> 
                Router is a tool that allows developer to handle routes in a web app, using dynamic routing.
                Dynamic routing takes place as the app is rendering on the machine, unlike
                the old routing architecture where the routing is handled in a configuration 
                outside of a running app. React router implements a component-based approach
                to routing. It provides different routing components according to the needs 
                of the application and platform.
            </p>
            <h1>2. How does context api work?</h1>
            <p>
                The Context API came to solve a few different problems that we were having in React
                applications—one of the most important is prop-drilling
            </p>
            <p>
                After breaking components into smaller components for maintainability purposes, 
                these small components might now need some data to work properly. If these small
                components need data to work with, you will have to pass data through props from
                the parent component to the child component. This is where we can slow down our
                application and cause development issues.
            </p>
            <p>
                The Context API can be used to share data with multiple components, without having 
                to pass data through props manually.
            </p>
            <h1>3. What is the purpose of useRef Hook?</h1>
            <p>
                A hook is a special function which enables one use state and other React features without
                writing ES6 class components which are generally considered difficult to understand, use and master.
            </p>
            <p>
            useRef is one of the standard hooks provided by React. It will return an object that we can use during the whole lifecycle of the component. 
            The main use case for the useRef hook is to access a DOM child directly. I'll show exactly how to do that in another section. 
            Although accessing the DOM is the main use case, it doesn't mean it's the only one! useRef can also be very useful to hold a mutable value across different renders of your component. 
            </p>
            <p>
            There are only three possibilities when we can useRef in our component -
            </p>
            <p>--Managing focus, text selection, or media playback. </p>
            <p>--Integrating with third-party DOM libraries. </p>
            <p>--Triggering imperative animations. </p>
        </div>
    </div>
  )
}

export default Blog