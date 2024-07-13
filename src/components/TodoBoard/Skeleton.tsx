export const Skeleton = () => {
  return (
    <div className='px-2.5 pb-2.5 gap-2.5 flex flex-col'>
      <div className='mb-5 gap-2 inline-flex items-center'>
        <span className='w-[72px] h-10 bg-border rounded-md animate-pulse' />
        <span className='w-[72px] h-10 bg-border rounded-md animate-pulse' />
      </div>
      {[...new Array(3)].map((item, index) => (
        <div
          className='my-2.5 gap-2.5 flex flex-col'
          key={index}
        >
          <span className='w-3/12 h-10 bg-border rounded-md animate-pulse' />
          <div className='w-9/12 h-16 bg-border rounded-md animate-pulse' />
        </div>
      ))}
    </div>
  )
}
