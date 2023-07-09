import { FC } from 'react'
import { getFetchUrl } from '@/lib/getFetchUrl'
import { StarIcon } from '@heroicons/react/24/solid'
import { notFound } from 'next/navigation'

interface ProductPageProps {
  params: {
    id: string
  }
}

export const revalidate = 300

const ProductPage: FC<ProductPageProps> = async ({ params: { id } }) => {
  // API Endpoint
  const response = await fetch(getFetchUrl(`api/shopping/product/${id}`))

  return <div>ProductPage</div>
}

export default ProductPage
