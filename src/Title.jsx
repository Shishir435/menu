


const Title = ({ text }) => {
    return (
        <div className="title">
            {/* <input type="color" /> */}
            <h2>{text || 'default title'}</h2>
            <div className="title-underline"></div>
        </div>

    )
}
export default Title