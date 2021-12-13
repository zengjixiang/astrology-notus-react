import React from "react";

// components

// import CardTable from "components/Cards/CardTable.js";

import CardPlanetInfoTable from "components/Cards/CardPlanetInfoTable.js";



export default function PlanetInfoTables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardPlanetInfoTable />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CardPlanetInfoTable color="dark" />
        </div> */}
      </div>
    </>
  );
}
