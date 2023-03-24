import React from 'react';
const mapURL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29551.03016476407!2d92.19773757503265!3d22.20671296380978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad6a188414e62b%3A0xa4c3198f81ba90d0!2sBandarban!5e0!3m2!1sen!2sbd!4v1679640374166!5m2!1sen!2sbd';

const ContactUs = () => {
    return (
        <div>
            <section className="text-gray-600 body-font relative px-12 py-12">
                <div className="absolute inset-0">
                    <iframe
                        title='Bandarban Sadar'
                        src={mapURL} width="100%"
                        height="500"
                        allowFullScreen=""
                        loading="lazy"
                    >
                    </iframe>
                </div>

                <div className="container mx-auto flex items-center justify-center">

                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Find and Stay Connect us</h2>

                        <p className="leading-relaxed mb-5 text-gray-600"></p>

                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>

                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">

                            </textarea>

                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                        <p className="text-xs text-gray-500 mt-3">Rocpyusay</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;