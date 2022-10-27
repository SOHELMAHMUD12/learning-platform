import React from 'react';

const Blog = () => {
    return (
        <div className='mx-auto p-4'>
            


<div tabIndex={0} className="collapse group">
  <div className="collapse-title group-focus:bg-secondary group-focus:text-secondary-content">
  <h1 className='text-2xl'>what is `cors`?</h1>
  </div>
  <div className="collapse-content group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
  </div>
</div>




<div tabIndex={0} className="collapse group">
  <div className="collapse-title group-focus:bg-secondary group-focus:text-secondary-content">
  <h1 className='text-2xl'>Why are you using Firebase `? What other options do you have to implement authentication?</h1>
  </div>
  <div className="collapse-content group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
  </div>
</div>


<div tabIndex={0} className="collapse group">
  <div className="collapse-title group-focus:bg-secondary group-focus:text-secondary-content">
  <h1 className='text-2xl'>How does the private route work?</h1>
  </div>
  <div className="collapse-content group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
  </div>
</div>

<div tabIndex={0} className="collapse group">
  <div className="collapse-title group-focus:bg-secondary group-focus:text-secondary-content">
  <h1 className='text-2xl'>What is Node? How does Node work?</h1>
  </div>
  <div className="collapse-content   group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>Learn about Node.js, a JavaScript runtime for building server-side or desktop applications.
    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
  </div>
</div>



        </div>
    );
};

export default Blog;