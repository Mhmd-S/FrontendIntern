import ChangeInfoField from "./ChangeInfoField"

const ChangeInformation = () => {

  return (
    <div className='w-full h-full flex flex-col overflow-y-scroll py-2 items-center justify-evenly bg-[#1E293B] rounded-b-xl md:rounded-none md:rounded-r-xl shadow-[inset_5px_5px_15px_10px_#fafafa05]'>

        <ul className={`w-full flex px-4 flex-col items-center h-full [&>li]:my-6 [&>li]:rounded-md [&>li]:border-[1px] [&>li]:border-sky-500 [&>li]:w-full [&>li]:md:w-2/3 `}>

          <li className='flex p-8 shadow-[inset_5px_5px_15px_10px_#fafafa10] flex-col items-center'>
            <h1 className='w-full font-bold text-4xl'>
              Settings
            </h1>
            <p className='w-full'>
              Modify your profile settings.
            </p>
          </li>
  
            <li>
                <ChangeInfoField name='First Name' />
            </li>
  
            <li>
                <ChangeInfoField name='Last Name' />
            </li>
  
            <li>
                <ChangeInfoField name='Phone Number' />
            </li>
  
            <li>
                <ChangeInfoField name='Email' />
            </li>
          
        </ul>
        
      </div>
  
  )
}

export default ChangeInformation