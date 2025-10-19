import type { BookmarkType } from "@/types/BookmarkTypes";

export default function DashboardBookmarksContent(props: {
  bookmarks: BookmarkType[];
}) {
  return (
    <div className="font-orbitron flex-column align-content-center align-items-center squish-64">
      <section
        className="display-flex flex-column gap-32 align-items-center"
        style={{ gridRowStart: 2 }}
      >
        <h1 className="stack-24 flex-row justify-content-center">Bookmarks</h1>
        <hr
          className="border-color-cyan dim-70 border-bottom-width-1 border-top-width-0 border-style-solid stack-16 drop-0 raised-2"
          style={{ height: 1 }}
        />
        <section className="flex-column gap-24 stack-24" id="posts-list">
          {props.bookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className="flex-row gap-48 justify-content-space-between squeeze-24 squish-16 border-rounded-16 raised-1 border-style-outset border-width-1 border-color-cyan"
            >
              <span className="display-inline-block">
                <p>post: {bookmark.post.title}</p>
                <p>from: {bookmark.user.username}</p>
              </span>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
