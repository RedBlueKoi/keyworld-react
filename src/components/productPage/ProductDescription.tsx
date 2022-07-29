import { FC } from "react"

const ProductDescription: FC = () => {
  return (
    <div className="basis-full lg:basis-1/2 text-left p-10 text-primary">
      <div className="flex justify-between ">
        <p className="text-4xl">Sneakers</p>
        <p className="text-4xl">$50.00</p>
      </div>
      <p className="text-2xl pt-8">Product Description:</p>
      <p className="text-l pt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima eius,
        consequatur suscipit ea optio eaque saepe laudantium ipsam officia,
        earum nobis, aliquam odio. Harum iure perferendis nostrum error?
        Similique, rerum tempore iure accusamus atque non debitis ut temporibus
        quibusdam delectus.
      </p>
      <p className="text-2xl pt-4">Specs:</p>
      <p className="text-l pt-4">Type: Mechanical.</p>
      <p className="text-2xl pt-4">Perks:</p>
      <ul className="list-disc ml-5">
        <li className="text-l pt-1">Lorem ipsum dolor</li>
        <li className="text-l pt-1">Lorem ipsum dolor</li>
        <li className="text-l pt-1">Lorem ipsum dolor</li>
        <li className="text-l pt-1">Lorem ipsum dolor</li>
      </ul>
      <button className="bg-primary text-white p-2 px-12 mt-4 rounded shadow-md shadow-black">
        Add to basket
      </button>
    </div>
  )
}

export default ProductDescription
