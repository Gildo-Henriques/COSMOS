import Image from "next/image";
export default function Depoimentos() {
  return (
    <section className="w-full relative overflow-hidden flex flex-col bg-[#080808] mt-20 lg:px-32 md:px-20 px-5 lg:py-20 py-10">
      <Image
        src="/depoimentos.svg"
        className="lg:size-[500px] size-72 absolute -top-16 lg:right-10 -right-10"
        width={100}
        height={100}
        alt="depoimentos-logo"
      />
      <div className="w-full flex lg:flex-row flex-col gap-y-5 justify-between">
        <h2 className="lg:text-3xl text-2xl z-20">
          Eles conquistaram seus objetivos de <br className="lg:flex hidden" />
          carreira e transformaram suas vidas
        </h2>
        <span className="lg:text-xl text-lg z-20">O próximo depoimento pode ser seu</span>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-5 z-20 justify-between lg:mt-20 mt-10">
        <div className="flex z-20 flex-col *:bg-[#0d0d0d] *:rounded-md *:border-full-card space-y-5">
          <article className="w-auto h-72 flex flex-col p-5 justify-between text-white/50">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit corporis voluptate vero sed, dolorem repellendus in mollitia, natus quam nesciunt eveniet consequatur dolor. Sequi cumque asperiores rerum dolor perspiciatis?</p>
          </article>
          <article className="w-auto h-52 flex flex-col p-5 justify-between text-white/50">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit corporis voluptate vero sed, dolorem repellendus in mollitia, natus quam nesciunt eveniet consequatur dolor. Sequi cumque asperiores rerum dolor perspiciatis?</p>
          </article>
        </div>
        <div className="flex flex-col *:bg-[#0d0d0d] *:rounded-md *:border-full-card space-y-5">
          <article className="w-auto h-52 flex flex-col p-5 justify-between text-white/50">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit corporis voluptate vero sed, dolorem repellendus in mollitia, natus quam nesciunt eveniet consequatur dolor. Sequi cumque asperiores rerum dolor perspiciatis?</p>
          </article>
          <article className="w-auto h-72 flex flex-col p-5 justify-between text-white/50">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit corporis voluptate vero sed, dolorem repellendus in mollitia, natus quam nesciunt eveniet consequatur dolor. Sequi cumque asperiores rerum dolor perspiciatis?</p>
          </article>
        </div>
        <div className="flex flex-col *:bg-[#0d0d0d] *:rounded-md *:border-full-card space-y-5">
          <article className="w-auto h-72 flex flex-col p-5 justify-between text-white/50">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit corporis voluptate vero sed, dolorem repellendus in mollitia, natus quam nesciunt eveniet consequatur dolor. Sequi cumque asperiores rerum dolor perspiciatis?</p>
          </article>
          <article className="w-auto h-52 flex flex-col p-5 justify-between text-white/50">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit corporis voluptate vero sed, dolorem repellendus in mollitia, natus quam nesciunt eveniet consequatur dolor. Sequi cumque asperiores rerum dolor perspiciatis?</p>
          </article>
        </div>

        
      </div>
    </section>
  );
}
