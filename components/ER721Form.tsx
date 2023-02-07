import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from './button'
import clsx from 'clsx'

export default function ER721Form() {
  const validationSchema = z.object({
    note: z
      .string()
      .min(10, { message: 'Your note need to be longer than 10 characters' })
  })

  type ValidationSchema = z.infer<typeof validationSchema>
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema)
  })

  const onSubmit: SubmitHandler<ValidationSchema> = (data) =>
    window.alert(data.note)

  return (
    <div className="py-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          className="mb-2 block text-sm font-bold text-gray-200"
          htmlFor="note"
        >
          Upload note to decentralized node system
        </label>
        <textarea
          className={clsx(
            `focus:shadow-outline mb-4 w-full appearance-none rounded border border-white border-opacity-5 bg-white bg-opacity-5 px-3 py-2 text-sm leading-tight text-gray-200 focus:outline-none`,
            errors.note && 'border-red-500'
          )}
          id="note"
          placeholder="Enter your note here..."
          {...register('note')}
        />
        {errors.note ? (
          <p className="mt-2 text-xs italic text-red-500">
            {errors.note.message}
          </p>
        ) : null}
        <Button type="submit" className="w-full">
          Save
        </Button>
      </form>
    </div>
  )
}
