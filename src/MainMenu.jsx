function MainMenu(props){
    return (
        <>
        <a href={props.href}>
            <img src={props.img} alt="mainMenuItem" className="mainMenuIcon" />
        </a>
        </>
    )
}
export default MainMenu;