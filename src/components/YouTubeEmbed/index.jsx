import React from "react";

export const YouTubeEmbed = ({ data, index }) => {  
  return (
    <section key={index} className="w-screen p-10 flex ">
      <div className="flex flex-row w-full gap-5 justify-center">
        {
          data.items.map((prop, index) => {
            return (
              <div>
                <div className="text-center">
                  <h2>{prop.title}</h2>
                </div>
                <iframe
                  width="400"
                  height="480"
                  src={prop.url}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            )
          })
        }
      </div>
    </section>
  );
};
