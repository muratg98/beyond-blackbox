import CustomCardWithDialog from "../components/CustomCardWithDialog";


const DataCollectionBox = ({id}) => {

return (
    <CustomCardWithDialog title="Data Collection" id={id}>
        You've acquired your dataset - now it's time to analyse how to go about understanding what the data represents. And most importantly, how can we develop a machine learning model to accurately extrapolate the dataset to make predictions on data we havn't seen.
    </CustomCardWithDialog>
    )
}

export default DataCollectionBox;