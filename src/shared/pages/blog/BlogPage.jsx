import React from 'react';

const BlogPage = () => {
    return (
        <div>
            <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Questions & Answers</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">Explore the common questions and answers about Celebration</p>
                    </div>

                    <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                <span className="text-lg font-semibold text-white">?</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-white">What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                                <p className="mt-4 text-base text-gray-400">Access tokens are typically used to access resources that are only needed for a short period of time, such as a user's email address or a list of contacts. Refresh tokens are typically used to access resources that are needed for a longer period of time, such as a user's calendar or a list of files.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                <span className="text-lg font-semibold text-white">?</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-white">Compare SQL and NoSQL databases?</p>
                                <p className="mt-4 text-base text-gray-400">SQL and NoSQL databases are two different types of databases. SQL databases are relational databases, while NoSQL databases are non-relational databases.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                <span className="text-lg font-semibold text-white">?</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-white">What is express js? What is Nest JS (google it)?</p>
                                <p className="mt-4 text-base text-gray-400">Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web applications. It is designed to be easy to use and extend, and it is used by a large number of developers worldwide.

                                    Nest.js is a framework built on top of Express.js that provides a more opinionated and structured approach to building web applications. It uses TypeScript, which is a superset of JavaScript that provides a number of benefits, such as type safety and improved tooling. Nest.js also provides a number of features that make it easier to build scalable and maintainable web applications, such as dependency injection, routing, and modules.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                <span className="text-lg font-semibold text-white">?</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-white">How do you provide support?</p>
                                <p className="mt-4 text-base text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-12 md:mt-20">
                        <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
                            <p className="text-gray-50">Didn’t find the answer you are looking for? <a href="#" title="" className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline">Contact our support</a></p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BlogPage;