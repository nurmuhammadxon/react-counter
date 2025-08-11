function Btn({ btnClick, title }) {
  return (
    <button className="btn" onClick={btnClick}>
      {title}
    </button>
  );
}

export default Btn;
