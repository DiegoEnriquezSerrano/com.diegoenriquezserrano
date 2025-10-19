import type { CommentType } from "@/types/CommentTypes";

export default function DashboardCommentsContent(props: {
  comments: CommentType[];
}) {
  return (
    <div className="font-orbitron flex-column align-content-center align-items-center squish-64">
      <section className="flex-column">
        <h1 className="flex-row justify-content-center stack-48 drop-0 text-extra-large line-height-extra-large">
          Comments
        </h1>
        <section
          className="flex-column gap-24 stack-24 squeeze-24"
          id="posts-list"
        >
          {props.comments.map((comment) => (
            <div
              key={comment.id}
              className="flex-column gap-24 justify-content-space-between squeeze-24 squish-16 border-rounded-16 raised-1 border-style-outset border-width-1 border-color-cyan"
            >
              <p className="display-inline-block">Post: {comment.post_title}</p>
              <p className="display-inline-block">
                {comment.profile.username}: {comment.body}
              </p>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
