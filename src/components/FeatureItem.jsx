function FeatureItem({ img, title, text }) {
  return (
    <div className="flex flex-col items-center space-y-2 md:w-1/2">
      <div className="flex items-center justify-center h-24 mb-6">
        <img src={img} alt="" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="max-w-md">{text}</p>
    </div>
  );
}

export default FeatureItem;
