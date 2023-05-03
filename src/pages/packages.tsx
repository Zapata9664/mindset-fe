import React from "react";
import { useGetPackages } from "../hooks";
import { PackagesCard } from "../components";

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
            <PackagesCard
              key={index}
              title={title}
              sessions={sessions}
              description={description}
              path={path}
            ></PackagesCard>
          )
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};
