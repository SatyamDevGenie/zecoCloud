import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomID, setRoomID] = useState();

  const navigate = useNavigate();

  const handleJoin = () => {
    navigate(`/room/${roomID}`);
  };
  return (
    <div className="flex mt-20 justify-center">
      <input
        placeholder="Enter Room ID"
        type="text" // room id wii be text
        value={roomID}
        onChange={(e) => setRoomID(e.target.value)} // accessing updater function
        className="w-96 p-3 border-spacing-8 border border-gray-200 px-4 py-2 rounded-md focus:outline-none focus:border-gray-400"
      ></input>
      <button
        onClick={handleJoin}
        className="ml-4 bg-lime-700 p-2 w-40 cursor-pointer text-slate-200 font-extrabold border border-gray-200 px-4 py-2 rounded-md focus:outline-none focus:border-gray-400"
      >
        Join
      </button>
    </div>
  );
};

export default Home;
