import React, { useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import Navbar from "../../components/Member/Navbar";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import { sidebarShow } from "../../store";
import data from "../../store/mock-data.json";

let PageSize = 6;

export default function classify() {
  const show = useRecoilValue(sidebarShow);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <div
        className={`${
          show === false ? "hidden" : ""
        } lg:hidden fixed bg-gray-600 opacity-60 left-0 right-0 bottom-0 top-0`}
      />
      <div className="w-full max-h-screen mx-auto font-inter">
        {/* <div className={`${show === false ? "" : "hidden"} block`}> */}
        <Sidebar activeMenu="classify" />
        {/* </div> */}
        <div className="lg:pl-72 mx-8">
          <Navbar title="Classify Data" />
          <section className="py-8 px-4 bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-lg antialiased tracking-tight">
            <div className="px-5 mx-auto text-center">
              <h2 className="pb-4 text-white text-3xl font-bold">
                Upload Jurnal Keuangan
              </h2>
              {/* <button onClick={()=>{}} className="px-12 py-4 bg-white font-medium text-lg rounded-lg hover:bg-indigo-500 hover:text-white hover:shadow-md ">
                    Select Data
                </button> */}
              <div className="flex justify-center">
                <div className="px-4 py-4 rounded-md shadow-md lg:w-4/12">
                  <label className="text-white text-lg">Pilih file .xlsx</label>
                  <input
                    type="file"
                    className="
                  w-full
                  px-4
                  py-4
                  mt-2
                  text-md
                  font-normal
                  shadow-md
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  focus:text-gray-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full flex flex-wrap justify-between xl:w-full mb-12 xl:mb-0 mx-auto mt-8 py-1">
            <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 px-8 py-9 shadow-lg rounded xl:w-9/12">
              <div className="flex flex-wrap justify-between">
                <h2 className="font-semibold text-blueGray-700 text-base">
                  Data Show
                </h2>
                <div className="flex justify-between">
                  <button className="bg-gray-500 text-white text-xs font-semibold mx-2 px-2 py-1 lg:py-2 lg:px-4 rounded-md hover:bg-gray-400 antialiased">
                    Remove
                  </button>
                  <button className="bg-indigo-700 text-white text-xs uppercase font-semibold mx-2 px-2 py-1 lg:py-2 lg:px-4 rounded-md hover:bg-indigo-600 antialiased">
                    Process!
                  </button>
                </div>
              </div>
              <div className="block w-full overflow-x-auto pt-4">
                <table className="items-center bg-transparent w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        ID
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        FIRST NAME
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        LAST NAME
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        EMAIL
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        PHONE
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        PHONE
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        PHONE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTableData.map((item) => {
                      return (
                        <tr>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                            {item.id}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item.first_name}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item.last_name}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item.email}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item.phone}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item.phone}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item.phone}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <Pagination
                className="md:flex md:justify-end block py-4 overflow-x-auto"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={(page: any) => setCurrentPage(page)}
                siblingCount={1}
              />
            </div>
            <div className="block bg-gradient-to-r from-indigo-700 to-indigo-900 h-2/5 px-2 py-8 w-full rounded-lg shadow-lg md:w-auto">
              <h2 className="font-semibold text-blueGray-700 text-white text-center text-base lg:text-lg">
                Tax Result with AI
              </h2>
              <div className="p-4 rounded-lg mt-8">
                <div className="flex flex-wrap justify-between">
                  <p className="text-white font-semibold pr-4"> Objek PPh 21</p>
                  <p className="text-white">{`Rp. 55.000.000`}</p>
                </div>
                <div className="flex flex-wrap justify-between mt-4">
                  <p className="text-white font-semibold pr-4"> Objek PPh 23</p>
                  <p className="text-white">{`Rp. 202.567.000`}</p>
                </div>
                <div className="flex flex-wrap justify-between mt-4">
                  <p className="text-white font-semibold pr-4"> Koreksi Biaya</p>
                  <p className="text-white">{`Rp. 298.670.000`}</p>
                </div>
                <hr className="mt-2"/>
                <div className="flex flex-wrap justify-between mt-2">
                  <p className="text-white font-semibold pr-4"> Total Pajak</p>
                  <p className="text-white">{`Rp. 298.670.000`}</p>
                </div>
              </div>
            </div>
          </section>
          <footer>
          </footer>
        </div>
      </div>
    </>
  );
}
