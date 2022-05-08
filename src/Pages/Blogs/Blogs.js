import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h2>Difference between javascript and nodejs</h2>
                <p>
                    1. Javascript is a programming language that is used for writing scripts on the website and NodeJS is a Javascript runtime environment. <br />
                    2. Javascript can only be run in the browsers and Node can run Javascript outside the browser with the help of NodeJS. <br />
                    3.Javascript is basically used on the client-side and Node is mostly used on the server-side. <br />
                    4.Javascript is used in frontend development and Nodejs is used in server-side development.

                </p>
            </div>
            <div>
                <h2> Differences between sql and nosql databases.</h2>
                <p>
                    1.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                    2.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                    3.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. <br />
                    4.SQL databases are best suited for complex queries, while NoSQL databases are not so good for complex queries
                </p>
            </div>
            <div>
                <h2> When should you use nodejs </h2>
                <p>

                    1. Developers prefer to use Node.js because it is easily scaling the application in both horizontal and vertical directions. <br /> We can also add extra resources during the scalability of the application. <br />
                    2. If you are building a web app you can also use PHP, and it will take the same amount of time when you use Node.js, <br /> But if I am talking about building chat apps or gaming apps Node.js is much more preferable because of faster synchronization. <br />
                    3.NodeJs is easy to learn and code because it uses JavaScript. <br /> If you are a front-end developer and have a good grasp of JavaScript you can easily learn and build the application on NodeJS
                </p>
                <p>
                    <h2>when should you use mongodb</h2>
                    MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. <br />

                    As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents. <br /> This format directly maps to native objects in most modern programming languages, making it a natural choice for developers, as they don’t need to think about normalizing data. <br /> MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads. <br />

                    MongoDB was built for people building internet and business applications who need to evolve quickly and scale elegantly. <br /> Companies and development teams of all sizes use MongoDB for a wide variety of reasons
                </p>
            </div>

        </div>
    );
};

export default Blogs;