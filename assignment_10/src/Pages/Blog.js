import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="w-full h-fit grid lg:grid-cols-2 gap-5 p-5">
        <div className="bg-[#fce8e6] p-5 rounded-lg shadow-lg ">
          <h2 className="text-3xl font-bold text-left underline decoration-rose-900">
            <span className="text-5xl">W</span>hat is cors?
          </h2>
          <p className="text-xl text-justify">
            CORS stands for Cross-Origin Resource Sharing. It allows us to relax
            the security applied to an API. This is done by bypassing the
            Access-Control-Allow-Origin headers, which specify which origins can
            access the API. In other words, CORS is a browser security feature
            that restricts cross-origin HTTP requests with other servers and
            specifies which domains access your resources
          </p>
        </div>
        <div className="bg-[#fce8e6] p-5 rounded-lg shadow-lg ">
          <h2 className="text-3xl font-bold text-left underline decoration-rose-900">
            <span className="text-5xl">W</span>hy are you using firebase? What
            other options do you have to implement authentication?
          </h2>
          <p className="text-xl text-justify">
            Google Firebase is an application development platform that allows
            developers to create iOS, Android, and Web apps.Google Firebase
            offers many features that pitch it as the go-to backend development
            tool for web and mobile apps. It reduces development workload and
            time. And it's a perfect prototyping tool. Firebase is simple,
            lightweight, friendly, and industrially recognized. We use firebase
            because of stora
          </p>
        </div>
        <div className="bg-[#fce8e6] p-5 rounded-lg shadow-lg ">
          <h2 className="text-3xl font-bold text-left underline decoration-rose-900">
            <span className="text-5xl">H</span>ow does the private route work?
          </h2>
          <p className="text-xl text-justify">
          Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route. So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated).
          </p>
        </div>
        <div className="bg-[#fce8e6] p-5 rounded-lg shadow-lg ">
          <h2 className="text-3xl font-bold text-left underline decoration-rose-900">
            <span className="text-5xl">W</span>hat is Node? How does Node work?
          </h2>
          <p className="text-xl text-justify">
          Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine. Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
