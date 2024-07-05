import CustomCardWithDialog from "../components/CustomCardWithDialog";


const PreProcssingBox = ({id}) => {

return (
    <CustomCardWithDialog title="Pre-processing" id={id} >
        <p>Data preprocessing in machine learning involves turning messy raw data into a format that machines can understand. This includes organizing and formatting text, images, and other data types so that they can be analyzed effectively. By doing this, we make the data neat and ready for the algorithms to process. This step is crucial because machines work best with well-structured information.</p>
      
        <p>Here we will be talking about four main data pre-processing techniques that is necessary across most ML projects: Data cleaning, transformation, integration and reduction.</p>
          </CustomCardWithDialog>
    )
}

export default PreProcssingBox;