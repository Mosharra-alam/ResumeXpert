

const Title = ({ title, description }) => {
  return (
    <div className='text-center mt-6 text-scale-700'>

      <h2 className="text-center mt-6 text-slate-700">{title}</h2>
      <p className="max-w-2xl mt-4 text-slate-500">{description}</p>

    </div>
  )
}

export default Title
