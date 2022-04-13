import"./post.css"
import{MoreVert,ThumbDown,ThumbUp,Comment,Save,Share} from "@material-ui/icons"
import { Users } from "../../dummyData";

export default function Post({post}) {
    const user=Users.filter(u=>u.id===1)
    console.log(user[0].username)
    return (
      <div className="post">
          <div className="postWrapper">
                <div className="postLeft">
                    <div className="postLeftTop">
                        <div className="postLeftTopLeft">
                            <img 
                                className="postProfileImg" 
                                src={Users.filter(u=>u.id===post.userId)[0].profilePicture} 
                                alt="" 
                            />
                            <span className="postUsername">
                                {Users.filter(u=>u.id===post.userId)[0].username}
                            </span>
                            <span className="postDate"> {post.date}</span>
                        </div>
                        <div className="postLeftTopRight">
                            <MoreVert/>
                        </div>
                    </div>
                    <div className="postLeftCenter">
                        <span className="postText">{post?.desc}</span>
                    </div>
                    <div className="postLeftBottom">
                        <div className="play">
                            <button className="playButton"> <img className="playImg" src="/assets/like.jpg"/></button>
                        </div>
                        <span className="songLink">https://thelink.com</span>
                    </div>
                </div>
                <div className="postRight">
                    <div className="postRightTop">
                        <img className="albumImg" src={post.photo} alt="" />
                    </div>
                    <div className="postRightBottom">
                        <div className="interactButton">
                            <ThumbUp style={{fontSize: 50}}/>
                            <span className="interactButtonText">Like</span>
                            <span className="postLikeCounter">{post.like}</span>
                        </div>
                        <div className="interactButton">
                            <ThumbDown style={{fontSize: 50}}/>
                            <span className="interactButtonText">Dislike</span>
                            <span className="postDislikeCounter">{post.dislike}</span>
                        </div>
                        <div className="interactButton">
                            <Comment style={{fontSize: 50}}/>
                            <span className="interactButtonText">Comment</span>
                            <span className="postCommentCounter">{post.comment}</span>
                        </div>
                        <div className="interactButton">
                            <Save style={{fontSize: 50}}/>
                            <span className="interactButtonText">Save</span>
                        </div>
                        <div className="interactButton">
                            <Share style={{fontSize: 50}}/>
                            <span className="interactButtonText">Share</span>
                        </div>
                    </div>
                </div>
          </div>
      </div>
    )
  }
/*
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
                <div className="postCenterBottom">
                    <hr className="postCenterBottomHr" />
                    <div className="play">
                        <button className="playButton"> <img className="playImg" src="/assets/like.jpg"/></button>
                    </div>
                    <span className="songLink">https://thelink.com</span>
                    <div className="albumCover">
                        <img className="albumImg" src="/assets/post/Women20Holding20iPhone20620Mockup2028129.jpg" alt="" />
                        <div className="albumBottom">
                            <div className="interactButton">
                                <ThumbUp style={{fontSize: 50}}/>
                                <span className="interactButtonText">Like</span>
                            </div>
                            <div className="interactButton">
                                <ThumbDown style={{fontSize: 50}}/>
                                <span className="interactButtonText">Dislike</span>
                            </div>
                            <div className="interactButton">
                                <Comment style={{fontSize: 50}}/>
                                <span className="interactButtonText">Comment</span>
                            </div>
                            <div className="interactButton">
                                <Save style={{fontSize: 50}}/>
                                <span className="interactButtonText">Save</span>
                            </div>
                            <div className="interactButton">
                                <Share style={{fontSize: 50}}/>
                                <span className="interactButtonText">Share</span>
                            </div>
                        </div>
                    </div>
                </div>
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
*/
