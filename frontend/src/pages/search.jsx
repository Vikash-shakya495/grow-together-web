import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MdOutlineStar } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const Search = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('');
  const [cat, setCat] = useState('All');
  const user = useSelector((state) => state.user.user);

  function handleTile(item) {
    navigate(`/course/${item}`);
  }

  const getSearchResult = async (filter) => {
    axios.post('http://localhost:5000/api/getSearchResult', { filter: filter, category: cat }, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then(res => {
        if (res.status === 200) {
          setResults(res.data.result);
        } else {
          toast.error('Server error');
        }
      })
      .catch(err => {
        toast.error('Something went wrong!');
      });
  };

  useEffect(() => {
    getSearchResult();
  }, []);

  return (
    <div className="h-full w-full flex justify-start items-center mt-8">
      <div><Toaster /></div>
      <div className="h-full w-full flex flex-col justify-start items-center">
        <div className="w-full h-20 flex justify-center items-center">
          <div className="flex w-1/2 bg-white rounded-xl shadow-md">
            <select className="rounded-xl bg-teal-100 border-none px-8 py-3" value={cat} onChange={(e) => setCat(e.target.value)}>
              <option value="All">All Category</option>
              <option value="Engineering">Engineering</option>
              <option value="Programming">Programming</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="Sports">Sports</option>
              <option value="Music">Music</option>
              <option value="Art">Art</option>
              <option value="Business">Business</option>
              <option value="Cooking">Cooking</option>
              <option value="Crafts">Crafts</option>
              <option value="Fashion">Fashion</option>
              <option value="Fitness">Fitness</option>
              <option value="Gaming">Gaming</option>
              <option value="Language">Language</option>
              <option value="Literature">Literature</option>
              <option value="Technology">Technology</option>
              <option value="Soft skills">Soft skills</option>
              <option value="Photography">Photography</option>
              <option value="Hobbies">Hobbies</option>
            </select>
            <input
              type="text"
              placeholder="Search for a course"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="h-10 w-full bg-transparent border-none text-black pl-2 outline-none"
            />
            <button
              onClick={(e) => { e.preventDefault(); getSearchResult(filter); }}
              className="h-10 w-10 bg-transparent text-black rounded-full border-0">
              <CiSearch className="text-2xl mr-2" />
            </button>
          </div>
        </div>
        <ul className="w-5/6 overflow-y-auto list-none p-0 grid grid-cols-3 gap-1 mt-4">
          {results.map((item, index) => (
            <div
              className="shadow-md border p-2 m-2 mb-2 rounded-lg flex flex-row gap-4 items-start relative hover:scale-95 transition-transform duration-300 hover:shadow-xl hover:shadow-teal-100/50 hover:brightness-95"
              key={index}
              onClick={() => handleTile(item.courseId)}
            >
              <img
                src={`/images/${item.category}.jpg`}
                className="w-1/2 h-full object-cover rounded-md"
                loading="lazy"
              />
              <p className="absolute bottom-2 left-2 border border-[rgba(200,109,223,0.633)] px-4 py-2 bg-red-200 rounded-full flex justify-center items-center text-lg">
                {item.rating}<MdOutlineStar className="text-xs" />
              </p>
              <div className="w-full p-2 flex items-end">
                <div className="flex flex-col gap-2">
                  <p className="text-2xl font-semibold font-sans text-teal-700">{item.courseName}</p>
                  <p className="text-xl text-red-300">By {item.courseTutor}</p>
                  <p className="line-clamp-5 text-lg">{item.courseDesc}</p>
                </div>
              </div>
            </div>
          ))}

        </ul>
      </div>
    </div>
  );
}

export default Search;
