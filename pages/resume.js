import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";
import PdfViewer from "../components/PdfViewer";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(false);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {data.showCursor && <Cursor />}
      {/* <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      > */}
      <Header isBlog />
      <div style={{ height: "100vh", width: "100%" }}>
        <iframe src="college_resume.pdf" width="100%" height="100%" />
      </div>
      {/* </div> */}
    </>
  );
};

export default Resume;
