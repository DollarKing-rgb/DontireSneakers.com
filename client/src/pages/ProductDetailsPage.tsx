import { ArrowIcon, BrandMark } from "../layouts/StorefrontLayout";
import { allProducts } from "../data/products";

type ProductDetailsPageProps = {
  slug: string;
};

function ProductDetailsPage({ slug }: ProductDetailsPageProps) {
  const product = allProducts.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#f3eee9] px-[clamp(1.35rem,5vw,5.6rem)] py-10 text-[#241812]">
        <a
          className="inline-flex items-center gap-3 text-[.78rem] font-bold"
          href="/collections"
        >
          <span aria-hidden="true">←</span>
          Back to collections
        </a>
        <h1 className="mt-20 font-[Manrope,sans-serif] text-[clamp(2.8rem,7vw,6rem)] font-medium tracking-[-.07em]">
          Product not found.
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f3eee9] pb-20 text-[#241812]">
      <header className="mx-auto grid max-w-[112rem] grid-cols-[1fr_auto_1fr] items-center px-[clamp(1.35rem,5vw,5.6rem)] py-6 max-md:grid-cols-[1fr_auto]">
        <a
          className="inline-flex items-center gap-3 justify-self-start text-[.72rem] font-bold uppercase tracking-[.1em] text-[#866752]"
          href="/collections"
        >
          <span
            aria-hidden="true"
            className="text-[1.1rem] font-normal leading-none"
          >
            ←
          </span>
          Back to collections
        </a>
        <a
          aria-label="Dontire Sneakers home"
          className="col-start-2 inline-flex items-center gap-2 font-[Manrope,sans-serif] text-[.9rem] font-bold tracking-[.2em] max-md:col-span-2 max-md:col-start-1 max-md:row-start-1 max-md:justify-self-center"
          href="/"
        >
          <BrandMark size={28} />
          <span>DONTIRE</span>
        </a>
        <span className="justify-self-end text-[.72rem] font-bold uppercase tracking-[.1em] text-[#866752] max-md:hidden">
          Product details
        </span>
      </header>

      <section className="mx-auto grid max-w-[112rem] grid-cols-[minmax(0,1.1fr)_minmax(18rem,.9fr)] gap-[clamp(2rem,7vw,8rem)] px-[clamp(1.35rem,8vw,8.5rem)] pt-[clamp(3rem,8vw,7rem)] max-md:grid-cols-1">
        <a
          aria-label={`View larger image of ${product.name}`}
          className="flex aspect-[1.1] items-center justify-center overflow-hidden rounded-[1.2rem] border border-[#241812]/15 bg-[#fbfaf8] p-[clamp(1.5rem,5vw,5rem)]"
          href={product.image}
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt={product.name}
            className="h-full w-full object-contain mix-blend-multiply"
            src={product.image}
          />
        </a>

        <div className="flex flex-col justify-center">
          <p className="mb-4 text-[.72rem] font-bold uppercase tracking-[.18em] text-[#9b7962]">
            {product.type}
          </p>
          <h1 className="m-0 font-[Manrope,sans-serif] text-[clamp(3rem,6vw,6rem)] font-medium leading-[.9] tracking-[-.075em]">
            {product.name}
          </h1>
          <p className="mt-8 font-[Manrope,sans-serif] text-[1.5rem] font-semibold tracking-[-.04em]">
            {product.price}
          </p>
          <p className="mt-6 max-w-[31rem] leading-[1.7] text-[#866752]">
            {product.description}
          </p>

          <div className="mt-9 border-t border-[#241812]/15 pt-6">
            <p className="mb-4 text-[.72rem] font-bold uppercase tracking-[.14em] text-[#9b7962]">
              Available sizes
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <span
                  className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-[#241812]/20 px-3 text-[.8rem]"
                  key={size}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <a
            className="mt-10 inline-flex w-fit items-center gap-3 border-b border-[#241812]/35 pb-2 text-[.78rem] font-bold transition-[border-color,gap] duration-200 hover:gap-4 hover:border-[#241812]"
            href={`/collections?category=${encodeURIComponent(product.type)}`}
          >
            Continue shopping
            <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  );
}

export default ProductDetailsPage;
