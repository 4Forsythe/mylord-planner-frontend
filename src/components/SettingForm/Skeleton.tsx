export const Skeleton = () => {
  return (
    <div className='max-w-[614px]'>
      <div className='gap-3.5 flex flex-col'>
        <div className='w-full mb-5 gap-3.5 flex items-center'>
          <div className='w-full gap-2.5 flex flex-col'>
            {[...new Array(3)].map((item, index) => (
              <div
                className='gap-1.5 flex flex-col'
                key={index}
              >
                <span className='w-4/12 h-6 pl-2 bg-border rounded-md animate-pulse' />
                <span className='w-9/12 h-10 bg-border rounded-md animate-pulse' />
              </div>
            ))}
          </div>
        </div>
        <div className=' gap-2.5 flex items-center'>
          <div className='w-3/12 h-10 bg-border rounded-md animate-pulse' />
          <div className='w-3/12 h-10 bg-border rounded-md animate-pulse' />
        </div>
      </div>
    </div>
  )
}
