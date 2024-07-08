export const Skeleton = () => {
  return (
    <div className='gap-1.5 flex flex-col items-center'>
      <div className='w-48 h-48 bg-border rounded-md animate-pulse' />
      <span className='w-10 h-4 bg-border rounded-md animate-pulse' />
    </div>
  )
}
