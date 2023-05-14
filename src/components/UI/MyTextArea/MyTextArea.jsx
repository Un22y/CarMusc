import classes from "./MyTextArea.module.css";

const MyTextArea = ({ label, value, callback }) => {
  return (
    <div className={classes.postform__inputForm}>
      <textarea
        value={value}
        onChange={(event) => callback(event.target.value)}
        defaultValue={label}
        className={classes.custom_texarea}
      />
    </div>
  );
};

export default MyTextArea;
