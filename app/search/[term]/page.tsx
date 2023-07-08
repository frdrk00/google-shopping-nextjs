import { redirect } from 'next/navigation'
import { FC } from 'react'

interface SearchPageProps {
  searchParams: any
  params: {
    term: string
  }
}

const SearchPage: FC<SearchPageProps> = ({
  searchParams,
  params: { term },
}) => {
  if (!term) {
    redirect('/')
  }

  // fetch from API...
  return <div>{/* Results List */}</div>
}

export default SearchPage
