import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";


const Post = ({ image, title, description }) => {
  return (
    <Link
      className="text-black hover:no-underline hover:text-black"
      to={'https://www.hanaloop.com/'}
    >
      <div className="flex flex-col md:w-[350px] w-[250px] bg-gray-50 rounded-lg p-5 hover:bg-blue-100 ease-in-out duration-500 transition-all">
        {image && (
          <div className="w-full flex justify-center p-5">
            <div className="flex justify-center bg-white w-[80%] rounded-lg">
              <img className={styles.featureSvg} src={image} role="img" />
            </div>
          </div>
        )}
        <div className="text--center padding-horiz--md h-[100px]">
          {title && <h3 className="text-lg">{title}</h3>}
          {description && <p className="text-sm">{description}</p>}
        </div>
      </div>
    </Link>
  );
};

export const Posts = ({ data, index }) => {
  return (
    <section key={index} className="w-full flex justify-center">
      <div className="w-[80%] flex justify-center">
        <div className="flex flex-wrap justify-center gap-5">
          {data.items.map((props, idx) => (
            <Post key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};
