import"./post.css"
import{MoreVert} from "@material-ui/icons"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/profile/template_3.jpg" alt="" />
                    <span className="postUsername"> Safak Kocaolu </span>
                    <span className="postDate"> 5mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert></MoreVert>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! It's my first post</span>
                <img className="postImg" src="/assets/post/Women20Holding20iPhone20620Mockup2028129.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/like.jpg" alt="" />
                    <img className="likeIcon" src="/assets/dislike.jpg" alt="" />
                    <span className="postLikeCounter">32 people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
