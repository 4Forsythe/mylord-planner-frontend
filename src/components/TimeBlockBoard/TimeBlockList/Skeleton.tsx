export const Skeleton = () => {
  return (
    <div className='p-4 gap-2.5 flex flex-col'>
      <div className='p-3 gap-2.5 flex flex-col'>
        <span className='w-full h-16 bg-border rounded-md animate-pulse' />
        <span className='w-full h-16 bg-border rounded-md animate-pulse' />
        <span className='w-full h-16 bg-border rounded-md animate-pulse' />
      </div>
      <span className='w-3/12 h-8 ml-8 bg-border rounded-md animate-pulse' />
    </div>
  )
}
