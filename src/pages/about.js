import Layout from "../components/layout";
import * as React from "react";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};
export const Head = () => <title>About Me</title>;
export default AboutPage;
