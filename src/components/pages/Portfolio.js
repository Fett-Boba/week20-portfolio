import React from "react";
import siteData from "../../data/siteData.js";
import MyCard from "./MyCard";

export default function Portfolio() {
     return (
          <div>
               {siteData.map((site) => (
                    <MyCard key={site.id} site={site} />
               ))}
          </div>
     );
}