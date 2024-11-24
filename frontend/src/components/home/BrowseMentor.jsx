import React from 'react';

function BrowseMentors() {
    return (
        <div className="mt-12 mb-24 min-h-[400px] w-4/5 mx-auto rounded-2xl relative">
            <img
                className="absolute w-full h-full rounded-2xl object-cover opacity-50"
                src="https://wallpapers.com/images/hd/light-teal-background-jghnusake73k9gxm.jpg"
                alt="Background"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <img className='absolute top-6 left-4 w-28 h-28 rounded-full object-cover' src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=" alt="" />
                <img className='absolute top-52 left-72 w-20 h-20 rounded-full object-cover' src="https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg" alt="" />
                <img className='absolute top-24 right-24 w-16 h-16 rounded-full object-cover' src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=MsKXmwf7TDRdKRn_lHohhmD5rvVvnGs9ry0xl6CrMT4=" alt="" />
                <div className="absolute top-32 left-52 w-6 h-6 rounded-full bg-slate-200"></div>
                <div className="absolute top-20 right-96 w-10 h-10 rounded-full bg-blue-200 z-2"></div>
                <div className="absolute top-60 right-20 w-8 h-8 rounded-full bg-red-200"></div>
                <div className="absolute top-80 left-32 w-12 h-12 rounded-full bg-green-200"></div>
                <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-yellow-200"></div>
                <h1 className="text-3xl md:text-6xl md:w-3/4 z-10">
                    Seeking 4000+ <span className='font-bold'>mentors</span> from 60+ countries
                </h1>
                <p className="mt-4 text-gray-500  max-w-2xl z-10">
                    to help you achieve and overcome any challenges you face.
                </p>
                <button className="mt-8 py-4 bg-teal-400 px-10 text-white font-semibold rounded-2xl hover:shadow-lg transition-all z-10">
                    Browse All Mentors
                </button>
            </div>
        </div>
    )
}

export default BrowseMentors;