export const Skeleton = () => {
  return (
    <div className='px-3 flex items-center'>
      <div className='w-10 h-10 mr-3 flex items-center justify-center bg-border rounded animate-pulse' />
      <div className='gap-1.5 flex flex-col'>
        <span className='w-28 h-4 bg-border rounded-md animate-pulse' />
        <span className='w-36 h-4 bg-border rounded-md animate-pulse' />
      </div>
    </div>
  )
}
