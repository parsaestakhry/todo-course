import React from 'react'
import {ReactComponent as AddIcon} from '../assets/add.svg'

export const TaskListPage = () => {





  return (
    <>
      <h1 className="text-5xl  mt-28 font-medium text-center  mb-20">My task list</h1>
      <div className="flex justify-center items-center h-full">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="enter a task"
              className="input input-bordered w-96 bg-primary  outline-gray-950 "
            />
            <button className="btn btn-square bg-primary  hover:bg-zinc-400">
               <AddIcon/>
            </button>
          </div>
        </div>
      </div>
      <div className="artboard artboard-horizontal phone-5 bg-purple-600  mt-24 rounded-lg text-center mx-auto ">
        this is where tasks are gonna be
      </div>
    </>
  );
}
