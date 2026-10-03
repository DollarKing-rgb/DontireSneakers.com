import { ArrowIcon, BrandMark } from "../layouts/StorefrontLayout";

const previewProducts = [
  {
    name: "Court Classic",
    type: "Everyday sneakers",
    price: "KES 6,500",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "The City Runner",
    type: "Sports shoes",
    price: "KES 7,800",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Terrain Lace-Up",
    type: "Boots",
    price: "KES 9,200",
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Clean Line Loafer",
    type: "Official shoes",
    price: "KES 8,400",
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=85",
  },
];

function CollectionsPage() {
  const category = new URLSearchParams(window.location.search).get("category");
  const pageTitle = category ? `${category} collection` : "All collections";

  return (
    <main className="min-h-screen bg-[#f3eee9] pb-20 text-[#241812]">
      <header className="mx-auto grid max-w-[112rem] grid-cols-[1fr_auto_1fr] items-center px-[clamp(1.35rem,5vw,5.6rem)] py-6 max-md:grid-cols-[1fr_auto]">
        <a aria-label="Back to Dontire Sneakers home" className="inline-flex items-center gap-3 justify-self-start text-[.72rem] font-bold uppercase tracking-[.1em] text-[#866752] max-md:row-start-2 max-md:mt-[1.4rem]" href="/">
          <span aria-hidden="true" className="text-[1.1rem] font-normal leading-none">←</span>
          Back to home
        </a>

        <a aria-label="Dontire Sneakers home" className="col-start-2 inline-flex items-center gap-2 font-[Manrope,sans-serif] text-[.9rem] font-bold tracking-[.2em] max-md:col-span-2 max-md:col-start-1 max-md:row-start-1 max-md:justify-self-center" href="/">
          <BrandMark size={28} />
          <span>DONTIRE</span>
        </a>

        <span className="justify-self-end text-[.72rem] font-bold uppercase tracking-[.1em] text-[#866752] max-md:row-start-2 max-md:mt-[1.4rem]">04 styles</span>
      </header>

      <section className="mx-auto max-w-[112rem] px-[clamp(1.35rem,8vw,8.5rem)] pb-[clamp(3rem,6vw,5.5rem)] pt-[clamp(5rem,11vw,10rem)] max-md:pt-[5.2rem]">
        <p className="mb-4 text-[.72rem] font-bold uppercase tracking-[.18em] text-[#9b7962]">Curated for your rotation</p>
        <h1 className="m-0 max-w-[65rem] font-[Manrope,sans-serif] text-[clamp(3.4rem,8vw,8.2rem)] font-medium capitalize leading-[.9] tracking-[-.085em]">{pageTitle}</h1>
        <p className="mt-7 max-w-[25rem] text-[clamp(.95rem,1.3vw,1.1rem)] leading-[1.55] text-[#866752]">
          Find the right pair for workdays, weekends and every move in between.
        </p>
      </section>

      <section aria-label="Collection tools" className="mx-auto flex max-w-[112rem] items-center justify-between border-y border-[#241812]/15 px-[clamp(1.35rem,8vw,8.5rem)] py-4 max-md:flex-col max-md:items-start max-md:gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[.74rem] text-[#9b7962]">Showing</span>
          <strong>{category ?? "Every category"}</strong>
        </div>
        <button className="rounded-full border border-[#241812]/20 bg-transparent px-4 py-3 text-[.72rem] text-[#241812] opacity-60" disabled type="button">
          Filters &amp; sorting coming next
        </button>
      </section>

      <section aria-label={`${pageTitle} products`} className="mx-auto grid max-w-[112rem] grid-cols-2 gap-[clamp(1.2rem,2vw,2rem)] px-[clamp(1.35rem,8vw,8.5rem)] pb-16 pt-[clamp(2rem,4vw,3.8rem)] min-[981px]:grid-cols-4">
        {previewProducts.map((product) => (
          <article className="group" key={product.name}>
            <div className="aspect-[.82] overflow-hidden bg-[#dfd7d0]">
              <img alt={product.name} className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]" loading="lazy" src={product.image} />
            </div>
            <div className="flex items-end justify-between gap-4 pt-4">
              <div>
                <p className="mb-2 text-[.68rem] font-bold uppercase tracking-[.12em] text-[#9b7962]">{product.type}</p>
                <h2 className="m-0 font-[Manrope,sans-serif] text-[1.05rem] font-semibold tracking-[-.035em]">{product.name}</h2>
              </div>
              <strong className="whitespace-nowrap text-[.82rem]">{product.price}</strong>
            </div>
          </article>
        ))}
      </section>

      <a className="mx-auto flex w-fit items-center gap-3 border-b border-[#241812]/35 pb-2 text-[.78rem] font-bold transition-[border-color,gap] duration-200 hover:gap-4 hover:border-[#241812]" href="/">
        Return to the home collection
        <ArrowIcon />
      </a>
    </main>
  );
}

export default CollectionsPage;
