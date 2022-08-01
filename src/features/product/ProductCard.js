import LabelToggle from "../../components/LabelToggle"

const ProductCard = (props) => {
    const {data} = props
    console.log(data);
    return(
        <div>
            <p>
                <b>ID</b> {data.productId}
            </p>
            <p>
                <b>Name</b> <LabelToggle title={data.productName}></LabelToggle>
            </p>
        </div>
    )
}

export default ProductCard;