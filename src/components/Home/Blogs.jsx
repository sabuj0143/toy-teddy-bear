import React from 'react';

const Blogs = () => {
    return (
        <div className='w-[100%] mx-auto bg-gray-200 my-2'>
            <div className='w-[50%] mx-auto py-6'>
                <hr className='bg-orange-400' />
                <h4 className='text-xl font-semibold'>1 . What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                <p><span className='text-orange-500 text-xl font-medium'>Ans : </span> The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. Client-side storage works on similar principles, but has different uses. It consists of JavaScript APIs that allow you to store data on the client<small></small></p>
                <br />
                <h4 className='text-xl font-semibold'>2 . Compare SQL and NoSQL databases?</h4>
                <p><span className='text-orange-500 text-xl font-medium'>Ans : </span> SQL databases are table-based, while NoSQL databases are document. A NoSQL database has a dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based, or organized as a key-value store. This flexibility means that documents can be created without having a defined structure first. Also, each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. <small></small></p>
                <br />
                <h4 className='text-xl font-semibold'>3 . What is express js? What is Nest JS ?</h4>
                <p><span className='text-orange-500 text-xl font-medium'>Ans : </span>NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript. NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications. <small></small></p>
                <br />
                <h4 className='text-xl font-semibold'>4 . What is MongoDB aggregate and how does it work ?</h4>
                <p><span className='text-orange-500 text-xl font-medium'>Ans : </span>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.  The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. <small></small></p>
            </div>
        </div>
    );
};

export default Blogs;