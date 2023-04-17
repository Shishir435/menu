

const Categories = ({ categories, filterItems }) => {
    return (
        <div className="btn-container">
            {categories.map((category) => {
                return <button key={category} onClick={() => filterItems(category)} type="button" className="btn">{category}</button>
            })}
        </div>
    )
}
export default Categories