import {
  FilePenLineIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloud,
  UploadCloudIcon,
  XIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];

  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setAllResumes(dummyResumeData);
  }, []);

  // CREATE RESUME
  const createResume = (event) => {
    event.preventDefault();
    setShowCreateResume(false);
    navigate("/app/builder/res123");
  };

  // UPLOAD RESUME
  const uploadResume = (event) => {
    event.preventDefault();
    setShowUploadResume(false);
    navigate("/app/builder/res123");
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
          Welcome, Joe Doe
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4">
          {/* CREATE */}
          <button
            onClick={() => setShowCreateResume(true)}
            className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full" />

            <p className="text-sm group-hover:text-purple-600 transition-all duration-300">
              Create Resume
            </p>
          </button>

          {/* UPLOAD */}
          <button
            onClick={() => setShowUploadResume(true)}
            className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full" />

            <p className="text-sm group-hover:text-purple-600 transition-all duration-300 text-center">
              Upload Existing Resume
            </p>
          </button>
        </div>

        <hr className="border-slate-300 my-6 sm:w-[305px]" />

        {/* RESUME LIST */}
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResumes.map((resumeItem, index) => {
            const baseColor = colors[index % colors.length];

            return (
              <button
                key={index}
                className="group relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: baseColor + "40",
                }}
              >
                <FilePenLineIcon
                  className="size-7 group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                />

                <p
                  className="text-sm group-hover:scale-105 transition-all px-2 text-center"
                  style={{ color: baseColor }}
                >
                  {resumeItem.title}
                </p>

                <p
                  className="absolute bottom-1 text-[11px] px-2 text-center"
                  style={{ color: baseColor + "90" }}
                >
                  Updated on{" "}
                  {new Date(resumeItem.updatedAt).toLocaleDateString()}
                </p>

                <div className="absolute top-1 right-1 hidden group-hover:flex items-center">
                  <TrashIcon className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors" />
                  <PencilIcon className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors" />
                </div>
              </button>
            );
          })}
        </div>

        {/* CREATE MODAL */}
        {showCreateResume && (
          <form
            onSubmit={createResume}
            onClick={() => setShowCreateResume(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white shadow-xl rounded-xl w-full max-w-md p-8"
            >
              <XIcon
                className="absolute top-4 right-4 size-6 text-slate-400 hover:text-slate-700 cursor-pointer"
                onClick={() => {
                  setShowCreateResume(false);
                  setTitle("");
                }}
              />

              <h2 className="text-2xl font-bold mb-6">Create a Resume</h2>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter resume title"
                className="w-full px-4 py-3 mb-4 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Create Resume
              </button>
            </div>
          </form>
        )}

        {/* UPLOAD MODAL */}
        {showUploadResume && (
          <form
            onSubmit={uploadResume}
            onClick={() => setShowUploadResume(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white shadow-xl rounded-xl w-full max-w-md p-8"
            >
              <XIcon
                className="absolute top-4 right-4 size-6 text-slate-400 hover:text-slate-700 cursor-pointer"
                onClick={() => {
                  setShowUploadResume(false);
                  setResume(null);
                }}
              />

              <h2 className="text-2xl font-bold mb-6">Upload Resume</h2>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter resume title"
                className="w-full px-4 py-3 mb-4 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              <label
                htmlFor="resume-input"
                className="block text-sm text-slate-700"
              >
                Select Resume File
              </label>

              <label
                htmlFor="resume-input"
                className="flex flex-col items-center justify-center gap-2 border border-dashed border-slate-400 rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-colors"
              >
                {resume ? (
                  <p className="text-green-700">{resume.name}</p>
                ) : (
                  <>
                    <UploadCloud className="size-14 stroke-1" />
                    <p>Upload Resume</p>
                  </>
                )}
              </label>

                 <input type="file"  id="resume-input"  accept=".pdf"  hidden
                 
                   onChange={(e)=> setResume(setResume(e.target.files[0]))}/>

              <input
                id="resume-input"
                type="file"
                accept=".pdf,.doc,.docx"
                hidden
                onChange={(e) => setResume(e.target.files[0])}
                required
              />

              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Upload Resume
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Dashboard;