import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from './button'
import clsx from 'clsx'

export default function ER1155Form() {
  const validationSchema = z.object({
    file: z
      .instanceof(FileList)
      .refine((val) => val.length > 0, 'You need to select a file.')
  })

  type ValidationSchema = z.infer<typeof validationSchema>
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema)
  })

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    window.alert(data)
    console.log(data)
  }

  return (
    <div className="py-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          className="mb-2 block text-sm font-bold text-gray-200"
          htmlFor="file"
        >
          Upload file to decentralized node system
        </label>
        <input
          className={clsx(
            `focus:shadow-outline mb-4 w-full appearance-none rounded border border-white border-opacity-5 bg-white bg-opacity-5  px-3 py-2 text-sm leading-tight text-gray-200 focus:outline-none`,
            errors.file && 'border-red-500'
          )}
          id="file"
          type="file"
          placeholder="Upload your file..."
          {...register('file')}
        />
        {errors.file ? (
          <p className="mt-2 text-xs italic text-red-500">
            {errors.file.message}
          </p>
        ) : null}
        <Button type="submit" className="w-full">
          Save
        </Button>
      </form>
    </div>
  )
}
