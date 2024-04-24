function TestimonialsItems({ content, img, name, position }) {
  return (
    <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
      <p className="text-sm leading-5 md:text-lg">{content}</p>
      <div className="flex space-x-4">
        <img src={img} alt="" className="w-10 h-10 rounded-full" />
        <div>
          <h5 className="text-sm font-semibold">{name}</h5>
          <p className="text-xs font-extralight">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsItems;
