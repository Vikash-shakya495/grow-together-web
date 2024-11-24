const Testimonial = () => {
    const testimonials = [
        {
            quote: "Have a great time talking with Menghan. Learned a lot!",
            name: "Leslie Alexander",
            title: "Student, University of Toronto",
        },
        // Add more testimonials here...
    ];

    return (
        <div className="py-12 bg-white">
            <div className="border w-[50px] mx-auto mb-8 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl  p-2">
                <img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" alt="" />
            </div>
            <h2 className="text-4xl font-semibold text-center text-gray-800">Don't just take our word for it!</h2>
            <p className="text-center text-gray-600 mt-4">Hear what the community is saying about us</p>
            <div className="flex justify-center gap-6 mt-10">
                <div className="bg-blue-100 p-6 rounded-xl shadow-lg w-80 hover:bg-teal-600 hover:text-white transition duration-300 ease-in-out">
                    <p className="text-lg italic">"I have been very fortunate to mentor amazing people that have worked for me over the years. Many have gone on to become entrepreneurs, leaders, and incredible mentors."</p>
                    <div className="flex items-center mt-4">
                        <img className="w-12 h-12 rounded-full object-cover" src="https://i.pinimg.com/736x/8f/99/2a/8f992ad5475a0e783bbf8708e863f08c.jpg" alt="Asif" />
                        <div className="ml-4">
                            <h4 className="font-semibold">Asif</h4>
                            <p className="text-sm">Consultant & Investor</p>
                        </div>
                    </div>
                </div>

                <div className="bg-pink-100 p-6 rounded-xl shadow-lg w-80 hover:bg-teal-600 hover:text-white transition duration-300 ease-in-out">
                    <p className="text-lg italic">"As an entrepreneur, I am faced with constant challenges. Having great mentors has taught me valuable lessons, saved me time, and created lifelong friendships."</p>
                    <div className="flex items-center mt-4">
                        <img className="w-12 h-12 rounded-full object-cover" src="https://imageio.forbes.com/specials-images/imageserve/5e8b62cfc095010007bffea0/0x0.jpg?format=jpg&crop=4529,4532,x0,y652,safe&height=416&width=416&fit=bounds" alt="Larry" />
                        <div className="ml-4">
                            <h4 className="font-semibold">Larry</h4>
                            <p className="text-sm">Co-Founder, Mercom</p>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-100 p-6 rounded-xl shadow-lg w-80 hover:bg-teal-600 hover:text-white transition duration-300 ease-in-out">
                    <p className="text-lg italic">"Everyone needs a mentor, seriously. What would I have done without one, when growing my business to multi-million dollar level? I've never done that before. Mentors make you feel like you've been there and done that — almost an unspoken requirement when having ultimate faith to achieve."</p>
                    <div className="flex items-center mt-4">
                        <img className="w-12 h-12 rounded-full object-cover" src="https://cdn.britannica.com/37/242337-050-0B1577DC/Actor-Matt-Damon-Cannes-France-2021.jpg" alt="Matt" />
                        <div className="ml-4">
                            <h4 className="font-semibold">Matt</h4>
                            <p className="text-sm">CEO at Product Vessel, Partner at Mentoree</p>
                        </div>
                    </div>
                </div>

                <div className="bg-yellow-100 p-6 rounded-xl shadow-lg w-80 hover:bg-teal-600 hover:text-white transition duration-300 ease-in-out">
                    <p className="text-lg italic">"Having a relationship with a great mentor has opened up my world to new ideas, inspired me to do more, and has allowed me to collaborate with some of my mentor's peers."</p>
                    <div className="flex items-center mt-4">
                        <img className="w-12 h-12 rounded-full object-cover" src="https://variety.com/wp-content/uploads/2024/02/amanda.jpg" alt="Amanda" />
                        <div className="ml-4">
                            <h4 className="font-semibold">Amanda</h4>
                            <p className="text-sm">Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
