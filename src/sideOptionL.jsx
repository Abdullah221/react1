function SideOptionL(props) {
    return (
        <button className="sideOptionL">
            <a href="">
            <img src={props.icon} alt="optionIcon" />
            <p>{props.option}</p></a>
        </button>
    )
}
export default SideOptionL;