import ResultsList from '@/components/ResultsList'
import { getFetchUrl } from '@/lib/getFetchUrl'
import { PageResult, SearchParams } from '@/typings'
import { redirect } from 'next/navigation'
import { FC } from 'react'

export const revalidate = 300

interface SearchPageProps {
  searchParams: SearchParams
  params: {
    term: string
  }
}

const SearchPage: FC<SearchPageProps> = async ({
  searchParams,
  params: { term },
}) => {
  if (!term) {
    redirect('/')
  }

  // fetch from API...
  const response = await fetch(getFetchUrl('api/search'), {
    method: 'POST',
    body: JSON.stringify({ searchTerm: term, ...searchParams }),
  })

  const results = (await response.json()) as PageResult[]

  console.log(results)

  return (
    <div>
      <ResultsList results={results} term={term} />
    </div>
  )
}

export default SearchPage
