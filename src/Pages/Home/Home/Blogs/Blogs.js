import React from 'react';

const Blogs = () => {

    const blogs = [
        {
            id: "01",
            Question: 'What are the different ways to manage a state in a React application?',
            Answer: `There are some ways to mange state in react application. 1. URL, 2. Web storage, 3. Local state, 4. Lifted state, 5. Derived state, 6. Using third party library.`
        },
        {
            id: "02",
            Question: 'How does prototypical inheritance work?',
            Answer: 'Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.'
        },
        {
            id: "03",
            Question: 'What is a unit test? Why should we write unit tests?',
            Answer: 'A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. This helps to detect and protect against bugs in the future.'
        },
        {
            id: "04",
            Question: 'React vs. Angular vs. Vue?',
            Answer: 'React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they are not 100 percent the same, so it makes sense to compare them and understand their differences.'
        },
    ]
    return (
        <div>
            {
                blogs.map((blog,indx) => <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
                    key={blog.id}
                    indx={indx}
                >
                    <div className="collapse-title text-xl font-medium">
                        {indx+1}# {blog.Question}
                    </div>
                    <div className="collapse-content">
                        <p tabIndex={'key'}> <span className='text-red-600 font-bold'>Answer: </span>{blog.Answer}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Blogs;