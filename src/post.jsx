import Button from './postButton'
function Post(props){
    return (
        <>
        <div className="post col-8">
            <div className="d-flex postHeader justify-content-between">
                <div className="id d-flex">
                    <img src={props.userImg} alt={props.alt} />
                    <div className="userId">
                        <h5>{props.userID}</h5>
                        <p>{props.timeP}</p>
                    </div>
                </div>
                <div className="otherOptions d-flex">
                    <img src={props.icon1} alt="moreIcon" />
                    <img src={props.icon2} alt="cancelIcon" />
                </div>
            </div>
            <div className="mainPost">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, accusamus iusto quasi rerum quos cupiditate amet laudantium. Pariatur deleniti temporibus sapiente veniam? Laboriosam quas ea voluptatum aut rerum, esse animi?</p>
                <img src={props.postImg} alt={props.postAlt} />
            </div>
            <div className="postFooter">
            <Button title="Like"/>
            <Button title="Comment"/>
            <Button title="Share"/>
            </div>
        </div>
        </>
    )
}
export default Post;