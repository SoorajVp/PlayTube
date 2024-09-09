
const ErrorComp = ({ error }: {error: string}) => {
  return (
      <div className='flex justify-center items-center mt-32'>
          <div className='text-center w-1/2 dark:text-neutral-300'>
              {error}
          </div>
      </div>
  )
}

export default ErrorComp