import React from "react";
import { Helmet } from "react-helmet-async";
import Beneficits from "../sections/beneficts";
import CallToAction from "../sections/callToAction/index";
import Cover from "../sections/cover/index";
import Operation from "../sections/operation/index";
import Testimonials from "../sections/testimonials/index";

// --------------------------------------------------------------

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Home - Cativa Fidelidade</title>
      </Helmet>

      <Cover />

      <Operation />

      <Beneficits />

      <Testimonials />

      <CallToAction />
    </>
  );
}
