"use client";

import dynamic from "next/dynamic";
import React from "react";

const WritePageContent = dynamic(
  () => import("../../components/writePageContent/WritePageContent"),
  { ssr: false }
);

const WritePage = () => {
  return <WritePageContent />;
};

export default WritePage;
