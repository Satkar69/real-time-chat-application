"use client";

import Link from "next/link";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignUp from "@/hooks/useSignUp";

const SignUpForm = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignUp();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            SignUp
            <span className="text-blue-500"> ChatApp</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full input input-bordered h-10"
                value={inputs.fullname}
                onChange={(e) =>
                  setInputs({ ...inputs, fullname: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="johndoe"
                className="w-full input input-bordered h-10"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="enter password"
                className="w-full input input-bordered h-10"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="comfirm password"
                className="w-full input input-bordered h-10"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </div>
            <GenderCheckBox
              onCheckBoxChange={handleCheckBoxChange}
              selectedGender={inputs.gender}
            />
            <Link
              href="/"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Already have an account?
            </Link>
            <div>
              <button type="submit" className="btn btn-block btn-sm mt-2">
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;

// const SignUpForm = () => {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             SignUp
//             <span className="text-blue-500"> ChatApp</span>
//           </h1>
//           <form>
//             <div>
//               <label htmlFor="" className="label p-2">
//                 <span className="text-base label-text">Full Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Satkar Niraula"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <div>
//               <label htmlFor="" className="label p-2">
//                 <span className="text-base label-text">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="satkarniraula"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <div>
//               <label htmlFor="" className="label p-2">
//                 <span className="text-base label-text">Password</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="enter password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <div>
//               <label htmlFor="" className="label p-2">
//                 <span className="text-base label-text">Confirm Password</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="comfirm password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <GenderCheckBox />
//             <a
//               href=""
//               className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//             >
//               Already have an account?
//             </a>
//             <div>
//               <button className="btn btn-block btn-sm mt-2">Sign Up</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUpForm;
