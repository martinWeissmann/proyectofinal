import dynamic from 'next/dynamic'
 
const DynamicComponentWithNoSSR = dynamic(
  () => import('./Chart'),
  { ssr: false }
)
 
export default function Page() {
  return (
      <DynamicComponentWithNoSSR />
  )
}