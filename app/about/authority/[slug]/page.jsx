import authorityData from "@/app/data/authorityData";
function ExpandableCardDemo({ params }) {
  const { slug } = params;
  const authority = authorityData.find((item) => item.slug === slug);
  const cards = authority.member.map((member) => ({
    title: member.name,
    description: member.title,
    src: member.image,
  }));

  return (
    <>
      <div className="relative md:h-screen md:bg-cover h-[290px] mb-16 bg-cover bg-center" style={{ backgroundImage: `url('${authority.image}')` }}></div>
      <ul className="mx-auto w-full grid grid-cols-1 md:grid-cols-4 items-start">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className="p-4 flex flex-col hover:bg-neutral-50 cursor-pointer rounded-[30px] mb-16"
          >
            <div className="flex gap-4 flex-col w-full">
              <div>
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-contain object-top"
                />
              </div>
              <div className="flex justify-center items-center flex-col">
                <h3 className="font-medium text-black text-center md:text-left text-base">
                  {card.title}
                </h3>
                <p className="text-black text-center md:text-left text-base">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
export default ExpandableCardDemo;
