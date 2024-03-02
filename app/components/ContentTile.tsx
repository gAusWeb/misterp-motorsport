import React from "react";

export const ContentTile = (props: any) => {
  return (
    <div className="bg-white rounded-lg shadow-lg bg-slate-50 w-full">
      <a href="#">
        <img
          className="rounded-t-lg h-80 object-cover w-full"
          src={props.imgSrc}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="pt-2 mb-2 text-4xl font-bold tracking-tight text-gray-900">
            {props.title}
          </h5>
        </a>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a> */}
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            veniam exercitationem voluptate rerum numquam, nisi blanditiis
            excepturi incidunt esse minus maxime minima commodi praesentium?
            Libero suscipit explicabo quas?
          </p>
        </div>
      </div>
    </div>
  );
};
