import CustomCardWithDialog from "../components/CustomCardWithDialog";


const ConvertToNumpyBox = ({id}) => {

return (
    <CustomCardWithDialog title="Convert To Numpy" id={id}>
        Prior to conducting major mathematical calculations (e.g., during pre-processing for standardization or for machine learning), 
        it is best to convert your data to a format compatible working with Python NumPy library to conduct Machine Learning code. Why?
        <ul>
            <li><strong>Efficiency/Optimization:</strong> NumPy arrays are highly optimized for numerical operations, resulting in faster computation times compared to Python lists.</li>
            <li><strong>Vectorization:</strong> NumPy supports vectorized operations, allowing for efficient element-wise computations without the need for explicit loops.</li>
            <li><strong>Compatibility:</strong> Many machine learning libraries and frameworks, such as scikit-learn and TensorFlow, are designed to work seamlessly with NumPy arrays, ensuring compatibility with a wide range of tools and functionalities.</li>
        </ul>
    </CustomCardWithDialog>
    )
}

export default ConvertToNumpyBox;