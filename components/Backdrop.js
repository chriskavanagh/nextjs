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
          pointer-events: none;
        `}
      </style>
    </div>
  );
};

//  pointer-events: none; lets btn click 'fall through' Backdrop/Overlay
// and work correctly. Otherwise btn click won't work.

export default Backdrop;
