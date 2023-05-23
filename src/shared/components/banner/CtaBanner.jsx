import React from 'react';

const CtaBanner = ({ title }) => {
    return (
        <div
            className="overflow-hidden rounded-lg bg-[url(https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80)] bg-cover bg-top bg-no-repeat"
        >
            <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-4xl font-bold text-white sm:text-3xl md:text-5xl pt-52">
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default CtaBanner;