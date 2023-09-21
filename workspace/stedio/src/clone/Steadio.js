import React from "react";
import TagContainer from "./container/TagContainer";
import ProfileContainer from "./container/ProfileContainer";
import { TagProvider } from "./context/TagContext";
import { ContentProvider } from "./context/ContentContext";

const Steadio = () => {
  console.log("들어옴");
  return (
    <div>
      <section>
        <TagProvider>
          <TagContainer />
        </TagProvider>
        <ContentProvider>
          <ProfileContainer />
        </ContentProvider>
      </section>
    </div>
  );
};

export default Steadio;
