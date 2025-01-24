
export default function ProductSorter({ products, activeSort, onSortChange, asLinks = false }) {
    const handleClick = (item) => {
        if (asLinks) {
            window.location.href = item.url;
        } else {
            onSortChange(item.id, item.alt, item.url);
        }
    };

    const containerClass = asLinks ? "products-sort home" : "products-sort";

    return (
        <div className={containerClass}>
            {products.map((item) => (
                <div key={item.id}
                     className={item.id === activeSort ? "products-item selected" : "products-item"}
                     onClick={() => handleClick(item)}>
                    <img src={item.img} alt={item.alt}/>
                    <p>{item.alt}</p>
                </div>
            ))}
        </div>
    );
}
