function Search(props){
    return (
        <>
        <div className="search">
            <img src={props.icon} alt="searchIcon" className="searchIcon" />
            <input type="text" name="" id="searchBox" placeholder="search here" />
        </div>
        </>
    )
}
export default Search;