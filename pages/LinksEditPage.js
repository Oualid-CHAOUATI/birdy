import React from "react";
import LinkAddForm from "../components/LinkAddForm/LinkAddForm";
import LinksUpdateSection from "../components/LinksUpdateSection/LinksUpdateSection";


export default function LinksEditPage({links}) {
  return (
    <div>
      <LinkAddForm/>
      <LinksUpdateSection links={links} />
    </div>
  );
}
