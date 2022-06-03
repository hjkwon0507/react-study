import Comment from "./Comment";

const comments = [
    {
        name: "권혜진",
        comment: "안녕하세요, 첫번째 댓글입니다.",
    },
    {
        name: "유재석",
        comment: "안녕하세요, 두번째 댓글입니다.",
    },
    {
        name: "조세호",
        comment: "안녕하세요, 세번째 댓글입니다.",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    );
}

export default CommentList;