import React from "react";
import projects from "./projects.json";

export default function Project({ name, website, description, images }) {
  return (
    <div>
      {name} {website}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const project = projects.filter(({ name }) => {
    return name === params.name;
  })[0];
  return {
    props: { ...project }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const paths = projects.map(({ name }) => ({ params: { name } }));
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}
