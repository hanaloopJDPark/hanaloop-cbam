import React from "react";
import styles from "./styles.module.css";

const Feature = ({ image, title, description }) => {
  return (
    <div className="flex flex-col md:w-[350px] w-[250px] bg-gray-50 rounded-lg">
      {image && (
        <div className="text--center">
          <img className={styles.featureSvg} src={image} role="img" />
        </div>
      )}
      <div className="text--center padding-horiz--md">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export const Features = ({ data, index }) => {
  return (
    <section key={index} className="w-full flex justify-center">
      <div className="w-[80%] flex justify-center">
        <div className="flex flex-wrap justify-center gap-5">
          {data.items.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};
