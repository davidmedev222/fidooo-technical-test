import { RotateCcwIcon } from 'lucide-react'

function ProcessLoader() {
  return (
    <div className='absolute left-0 top-0 z-10 flex size-full items-center justify-center bg-gray-200/50'>
      <RotateCcwIcon className='animate-spin' />
    </div>
  )
}

export { ProcessLoader }
