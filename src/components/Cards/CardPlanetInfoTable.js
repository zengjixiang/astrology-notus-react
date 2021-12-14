import React, { useState } from "react";
// import PropTypes from "prop-types";

// components

// import TableDropdown from "components/Dropdowns/TableDropdown.js";

// JSON Data
// import astrology from "../../assets/data/astrology-sign";

// function setState(value, callback) {
//   console.log("處理 setState()");
//   alert("setState",this.props.value);
// }

// function handleQueryPlanetInfo(event) {
//   console.log("處理 handleQueryPlanetInfo()");
//   // setState({value: event.target.value});
//   // var asc = event.planetInfoGroupSelect;

//   // alert("handleQueryPlanetInfo",asc);
// }

/** 占星資訊 */
export default function CardPlanetInfoTable({ color }) {
  // const [planetInfoGroupSelect, setPlanetInfoGroupSelect] = useState("");
  // 彈出視窗狀態 (顯示或隱藏)
  const [show, setShow] = useState(false);

  // useState.CardPlanetInfoTable = { showModal: true };

  // var planetInfo = 100

  //console.log("CardPlanetInfoTable", setshow);

  //React.useEffect(() => {showModal.apply(this, this.planetInfoGroupSelect.value)});

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                占星資訊
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* <link href="../global-styles/planetInfo.scss" rel="stylesheet" /> */}
          <div className="input-group mb-3">
            <label className="input-group-text" form="planetInfoGroupSelect">
              行星
            </label>
            <select className="form-select" id="planetInfoGroupSelect">
              <option defaultValue="Asc">上昇</option>
              <option value="Sun">太陽</option>
              <option value="Moon">月亮</option>
              <option value="Venus">金星</option>
              <option value="Jupiter">木星</option>
              <option value="">水星</option>
              <option value="">火星</option>
              <option value="Saturn">土星</option>
              <option value="Uranus">天王星</option>
              <option value="Neptune">海王星</option>
              <option value="Pluto">冥王星</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <label
              className="input-group-text"
              form="planetInfoStarGroupSelect"
            >
              星座
            </label>
            <select className="form-select" id="planetInfoStarGroupSelect">
              <option defaultValue="Aries">白羊座</option>
              <option value="Taurus">金牛座</option>
              <option value="Gemini">雙子座</option>
              <option value="Cancer">巨蟹座</option>
              <option value="Leo">獅子座</option>
              <option value="Virgo">處女座</option>
              <option value="Libra">天秤座</option>
              <option value="Scorpio">天蠍座</option>
              <option value="Sagittarius">射手座</option>
              <option value="Capricorn">摩羯座</option>
              <option value="Aquarius">水瓶座</option>
              <option value="Pisces">雙魚座</option>
            </select>
          </div>

          <div class="m-auto">
            <button
              className="bg-blue-500 text-black text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg focus:outline-none mr-1 mb-1 transition-all duration-150"
              onClick={() => setShow(true)}
            >
              開始查詢
            </button>
          </div>

          {/* 顯示 JSON 資料  */}
          {/* {astrology.sign.map((item, i) => {
        // console.log("item.name", item.name);
        // if (!item) return <div />; // 不顯示
        // if (item.name === "") return <div />; // 不顯示無效的空資料
        return (
          <div key={(item, i)}>
            <card>
              <p>
                星座名稱:{item.name} ({item.chineseName})
              </p>
              <p>星座符號:{item.astrologicalSign}</p>
              <p>星座描述:{item.description}</p>
            </card>
          </div>
        );
      })} */}
        </div>

        {/* Modal content (查詢結果的彈出視窗) */}
        <div>
          {show && (
            <div
              className="py-12 bg-gray-700 dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
              id="modal"
            >
              <div
                role="alert"
                className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
              >
                <div className="relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
                  <div className="w-full flex justify-center text-green-400 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-circle-check"
                      width={56}
                      height={56}
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <path d="M9 12l2 2l4 -4" />
                    </svg>
                  </div>
                  <h1 className="text-center text-blue-700 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">
                    占星資訊查詢結果
                  </h1>
                  <p
                    id="planetInformationResult"
                    className="mb-4 text-sm text-blue-700 dark:text-gray-400 text-center font-normal"
                  >
                    查詢結果如下:...(功能未完成)
                  </p>
                  <div className="flex items-center justify-center w-full">
                    <button
                      className="focus:outline-none ml-3 bg-blue-700 dark:bg-blue-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-black-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                      onClick={() => setShow(!show)}
                    >
                      確定
                    </button>
                  </div>
                  <div
                    className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out"
                    onClick={() => setShow(!show)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Close"
                      className="icon icon-tabler icon-tabler-x"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Projects table */}
        {/* <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                }
              >
                Project
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                }
              >
                Budget
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                }
              >
                Status
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                }
              >
                Users
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                }
              >
                Completion
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                }
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <img
                  src={require("assets/img/bootstrap.jpg").default}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-blueGray-600" : "text-white")
                  }
                >
                  Argon Design System
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                $2,500 USD
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-circle text-orange-500 mr-2"></i> pending
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex">
                  <img
                    src={require("assets/img/team-1-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                  ></img>
                  <img
                    src={require("assets/img/team-2-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-3-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-4-470x470.png").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                </div>
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2">60%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                      <div
                        style={{ width: "60%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <TableDropdown />
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <img
                  src={require("assets/img/angular.jpg").default}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-blueGray-600" : "text-white")
                  }
                >
                  Angular Now UI Kit PRO
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                $1,800 USD
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                completed
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex">
                  <img
                    src={require("assets/img/team-1-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                  ></img>
                  <img
                    src={require("assets/img/team-2-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-3-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-4-470x470.png").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                </div>
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2">100%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                      <div
                        style={{ width: "100%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <TableDropdown />
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <img
                  src={require("assets/img/sketch.jpg").default}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-blueGray-600" : "text-white")
                  }
                >
                  Black Dashboard Sketch
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                $3,150 USD
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-circle text-red-500 mr-2"></i> delayed
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex">
                  <img
                    src={require("assets/img/team-1-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                  ></img>
                  <img
                    src={require("assets/img/team-2-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-3-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-4-470x470.png").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                </div>
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2">73%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                      <div
                        style={{ width: "73%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <TableDropdown />
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <img
                  src={require("assets/img/react.jpg").default}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-blueGray-600" : "text-white")
                  }
                >
                  React Material Dashboard
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                $4,400 USD
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-circle text-teal-500 mr-2"></i> on schedule
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex">
                  <img
                    src={require("assets/img/team-1-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                  ></img>
                  <img
                    src={require("assets/img/team-2-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-3-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-4-470x470.png").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                </div>
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2">90%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                      <div
                        style={{ width: "90%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <TableDropdown />
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <img
                  src={require("assets/img/vue.jpg").default}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "}
                <span
                  className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-blueGray-600" : "text-white")
                  }
                >
                  React Material Dashboard
                </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                $2,200 USD
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                completed
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex">
                  <img
                    src={require("assets/img/team-1-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                  ></img>
                  <img
                    src={require("assets/img/team-2-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-3-800x800.jpg").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                  <img
                    src={require("assets/img/team-4-470x470.png").default}
                    alt="..."
                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                  ></img>
                </div>
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2">100%</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                      <div
                        style={{ width: "100%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <TableDropdown />
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </>
  );
}

CardPlanetInfoTable.defaultProps = {
  color: "light",
};

// CardPlanetInfoTable.propTypes = {
//   color: PropTypes.oneOf(["light", "dark"]),
// };
