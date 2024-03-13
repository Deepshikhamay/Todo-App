import React, { useState } from "react";

export default function Header() {
  const [inputData, setInputData] = useState("");
  const [listData, setListData] = useState([]);

  const handleTask = () => {
    setListData([...listData, inputData]);
    setInputData("");
  };

  const deleteTask = (i) => {
    const updatedListData = listData.filter((item, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  }; 
  
  return (
    <div>
      <div className="text-2xl font-bold flex justify-center py-[20px]">
        Todo
      </div>

      <div className="mx-10 flex justify-start">
        <input
          type="text"
          placeholder="enter data here"
          className="py-3 px-12 flex w-[70%] focus:outline-none border border-slate-400 rounded-lg"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <div className="rounded-lg py-3 px-6 hover:bg-slate-600 text-[#fff] bg-[#491d56] ml-6">
          <button onClick={handleTask}>Add Task </button>
        </div>
      </div>

      <div className="mx-10 py-3">
        <h2 className="text-[#155350] text-xl">here is the Data List!</h2>

        <div className="">
          {listData.map((data, i) => (
            <div key={i} className="flex">
              <div className="bg-[#5a7563] text-white text-[20px] px-6 rounded-lg mt-4 w-[70%]">
                {data}
              </div>
              <div>
                <button
                  onClick={() => deleteTask(i)}
                  className="rounded-lg px-4 py-1 text-white bg-black mt-4 ml-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
