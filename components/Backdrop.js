const Backdrop = () => {
  return (
    <div>
      <style jsx>
        {`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          z-index: 100;
        `}
      </style>
    </div>
  );
};

export default Backdrop;
