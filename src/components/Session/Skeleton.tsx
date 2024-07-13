export const Skeleton = () => {
  return (
    <div className='gap-2.5 inline-flex flex-col'>
      <div className='w-[330px] h-[200px] bg-border rounded-lg animate-pulse' />
      <span className='w-8/12 h-4 self-center bg-border rounded-md animate-pulse' />
    </div>
  )
}
