const Background = () => {
    return (
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #e5e7eb 0 2px, transparent 2px 40px)",
        }}
      ></div>
    );
};

export default Background;