import FormFieldError from './FormFieldError';
import RemoveIcon from '../icons/RemoveIcon';
import LoadingIcon from '../icons/LoadingIcon';
import useFileUploadField from './hooks/useFileUploadField';
import FolderIcon from '../icons/FolderIcon';
import UploadIcon from '../icons/UploadIcon';

const FileUploadField = ({
  name,
  register,
  errors,
  setError,
  validationRules,
  usersPicture,
  resetField,
  ...inputProps
}) => {

  const { 
    imageFile, 
    isLoading, 
    handleFileChange, 
    handleRemoveImage 
  } = useFileUploadField({ name, setError, resetField, usersPicture });

  return (
    <div className={`h-2/5 w-2/5 p-2 relative flex justify-center items-center border-2 bg-transparent rounded-lg ${errors[name] ? 'border-pink-600' : 'border-[#3B82F6]'}`}>

      { isLoading ? <LoadingIcon /> : null }

      {/* The icon for adding an image */}
      <label htmlFor={name}  className={`h-full w-full flex flex-col p-2 text-center items-center justify-center absolute ${imageFile && 'hidden'} `}>

        <UploadIcon />
        {/* <FormFieldError name={name} errors={errors} /> */}

      </label>

      {/* The remove button for an image */}
      {imageFile && 
        <div className='w-full h-full flex flex-col items-center justify-evenly'>
          <div className='z-10'>
            <RemoveIcon color='red' handleClick={()=>{handleRemoveImage()}} />
          </div>
          <FolderIcon/>
          <p className='w-full truncate text-[#3B82F6]'>
            {imageFile.name}
          </p>
        </div> 
      }

      <input
        type='file'
        name={name}
        accept='image/png, image/gif, image/jpeg'
        {...register(name, validationRules)}
        onInput={handleFileChange}
        className={`opacity-0 absolute w-full h-full ${imageFile && 'hidden'}`}
      />

    </div>
  );
};

export default FileUploadField;