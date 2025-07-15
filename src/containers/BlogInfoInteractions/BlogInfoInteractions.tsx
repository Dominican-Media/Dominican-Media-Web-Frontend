"use client";

import Comment from "@/assets/SvgIcons/Comment";
import Like from "@/assets/SvgIcons/Like";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Loader from "@/components/Loader/Loader";
import TextArea from "@/components/Textarea/Textarea";
import { useToast } from "@/context/ToastContext";
import { capitalize } from "@/helpers/capitalize";
import { inputChangeHandler } from "@/helpers/inputChangeHandler";
import { requestHandler } from "@/helpers/requestHandler";
import { useBlogsComments } from "@/hooks/useBlogs";
import useError from "@/hooks/useError";
import { blogItemType, requestType, usersCommentType } from "@/utils/types";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { mutate } from "swr";
import classes from "./BlogInfoInteractions.module.css";

type Props = {
  data: blogItemType;
};

const BlogInfoInteractions: React.FC<Props> = ({ data }) => {
  // States
  const [openComments, setOpenComments] = useState(false);
  const [requestState, setRequestState] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });
  const [isLiked, setisLiked] = useState(false);
  const [commentData, setCommentData] = useState({
    userName: "",
    comment: "",
  });

  // Router
  const { blogId } = useParams();

  // Hooks
  const { errorFlowFunction } = useError();
  const { showToast } = useToast();

  // Requests
  const { isLoading, data: commentsRequestData } = useBlogsComments(
    blogId as string
  );

  const handleBlogLikes = () => {
    requestHandler({
      url: `/blogs/like/${blogId}`,
      data: {
        action: isLiked ? "unlike" : "like",
      },
      method: "PATCH",
      state: requestState,
      setState: setRequestState,
      requestCleanup: true,
      successFunction(res) {
        setisLiked(true);
        mutate(`/blogs/${blogId}`);
        showToast(res?.data?.message);
      },
      errorFunction(err) {
        errorFlowFunction(err);
      },
      id: "like",
    });
  };

  const handleComments = () => {
    requestHandler({
      url: `/blogs/comments/${blogId}`,
      data: commentData,
      method: "POST",
      state: requestState,
      setState: setRequestState,
      requestCleanup: true,
      successFunction(res) {
        setCommentData({
          userName: "",
          comment: "",
        });
        mutate(`/blogs/comments/${blogId}`);
        showToast(res?.data?.message);
      },
      errorFunction(err) {
        errorFlowFunction(err);
      },
      id: "comment",
    });
  };

  // Memos
  const comments: usersCommentType[] = useMemo(() => {
    return commentsRequestData?.data?.comments;
  }, [commentsRequestData]);

  return (
    <section className={classes.container}>
      <div>
        <div>
          <Like
            isActive={isLiked}
            onClick={() => {
              handleBlogLikes();
            }}
            isLoading={requestState?.isLoading && requestState?.id === "like"}
          />
          <span>{data?.likeCount || 0}</span>
        </div>

        <div>
          <Comment
            isActive={openComments}
            onClick={() => {
              setOpenComments((prevState) => !prevState);
            }}
          />
          <span>{comments?.length || 0}</span>
        </div>
      </div>

      <div
        className={classes.commentContainer}
        style={openComments ? { maxHeight: "400px" } : { maxHeight: "0px" }}
      >
        <Input
          label="Name"
          placeholder="Eg: John Doe"
          name="userName"
          value={commentData?.userName}
          onChange={(e) => inputChangeHandler(e, setCommentData)}
        />
        <TextArea
          label="Comment"
          placeholder="Eg: Great piece!"
          name="comment"
          value={commentData?.comment}
          onChange={(e) => inputChangeHandler(e, setCommentData)}
        />
        <Button
          disabled={!commentData?.comment}
          onClick={handleComments}
          loading={requestState?.isLoading && requestState?.id === "comment"}
        >
          Comment
        </Button>
      </div>

      {comments?.length > 0 && (
        <div className={classes.comments}>
          <h4>Comments</h4>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {comments?.map((data) => {
                return (
                  <p key={data?._id}>
                    <span>{capitalize(data?.userName || "Anonymous")}: </span>
                    {data?.comment}
                  </p>
                );
              })}
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default BlogInfoInteractions;
