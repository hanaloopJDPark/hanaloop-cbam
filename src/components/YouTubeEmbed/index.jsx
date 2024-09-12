import React from "react";

export const YouTubeEmbed = ({ data, index }) => {  
  return (
    <section key={index} className="w-screen p-10 flex mb-[150px]">
      <div className="flex lg:flex-row w-full gap-10 justify-center flex-col items-center">
        {
          data.items.map((prop, index) => {
            return (
              <div className="p-5 border shadow-sm rounded-lg bg-gray-100">
                <div className="text-center">
                  <h2 className="text-lg">{prop.title}</h2>
                </div>
                <div className="w-full min-w-[450px] max-w-[500px]">
                  <div className="relative w-full overflow-hidden pt-[70%]">
                    <iframe
                      className="absolute top-0 left-0 right-0 w-full h-full"
                      width="400"
                      height="480"
                      src={prop.url}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};
