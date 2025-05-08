"use client";

import Comment from "@/assets/SvgIcons/Comment";
import Like from "@/assets/SvgIcons/Like";
import Input from "@/components/Input/Input";
import TextArea from "@/components/Textarea/Textarea";
import { useState } from "react";
import classes from "./BlogInfoInteractions.module.css";

const BlogInfoInteractions = () => {
  // States
  const [openComments, setOpenComments] = useState(false);

  return (
    <section className={classes.container}>
      <div>
        <div>
          <Like isActive={false} />
          <span>120</span>
        </div>

        <div>
          <Comment
            isActive={openComments}
            onClick={() => {
              setOpenComments((prevState) => !prevState);
            }}
          />
          <span>120</span>
        </div>
      </div>

      <div
        className={classes.commentContainer}
        style={openComments ? { maxHeight: "300px" } : { maxHeight: "0px" }}
      >
        <Input label="Name" placeholder="Eg: John Doe" />
        <TextArea label="Comment" placeholder="Eg: Great piece!" />
      </div>

      <div className={classes.comments}>
        <h4>Comments</h4>
        <p>
          <span>Richard Brennan: </span>is the Regional Emergency Director of
          the World Health Organization (WHO) Eastern Mediterranean Region.
        </p>

        <p>
          <span>Richard Brennan: </span>is the Regional Emergency Director of
          the World Health Organization (WHO) Eastern Mediterranean Region.
        </p>

        <p>
          <span>Richard Brennan: </span>is the Regional Emergency Director of
          the World Health Organization (WHO) Eastern Mediterranean Region.
        </p>
      </div>
    </section>
  );
};

export default BlogInfoInteractions;
