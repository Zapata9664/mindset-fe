import React, { useEffect, useState } from "react";
import { useGetPackages } from "../hooks";
import { PackagesComponent } from "../components";

export const Packages = () => {
  const [res] = useGetPackages();

  return (
    <div className="flex justify-center text-justify flex-wrap">
      <div>
        <h1>packs</h1>
      </div>
      {res ? (
        res.map(
          (
            {
              title,
              sessions,
              description,
              path,
            }: {
              title: string;
              sessions: number;
              description: string;
              path: string;
            },
            index
          ) => (
            <PackagesComponent
              key={index}
              title={title}
              sessions={sessions}
              description={description}
              path={path}
            ></PackagesComponent>
          )
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};
