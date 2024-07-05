import CustomCardWithDialog from "../components/CustomCardWithDialog";

const MachineLearningBox = ({id}) => {
  return (
    <CustomCardWithDialog title="Machine Learning" id={id}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <img src="https://github.com/muratg98/beyond-blackbox/blob/main/linear_regression_beyondblackbox/images/mld.jpg?raw=true" alt="Machine Learning" style={{ width: '60%', height: 'auto', margin: '10px auto' }} />
        <p>In other words: "giving computers the ability to learn without explicitly being programmed" - <a href="https://www.cs.unh.edu/~mpetrik/teaching/intro_ml_17_files/class1.pdf">Arthur Samuel (1959)</a></p>
        <p>The key is developing an algorithm capable of learning functions/patterns within a given dataset to make predictions. When it comes to learning, there are fundamentally
            two types, <strong><i>supervised</i></strong> and <strong><i>unsupervised</i></strong>. Either we know objective outputs and thus derive a function using our knowledge of the inputs and outputs, or we are trying to
            find patterns and their association within a dataset.
        </p>
      </div>
    </CustomCardWithDialog>
  );
}

export default MachineLearningBox;
