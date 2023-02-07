import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from './button'
import clsx from 'clsx'

export default function ER721Form() {
  const validationSchema = z.object({
    file: z
      .instanceof(FileList)
      .refine((val) => val.length > 0, 'You need to select a file.'),
    displayName: z.string().min(5, { message: 'You need to add display name' }),
    symbol: z.string().min(1, { message: 'You need to add symbol' }),
    description: z.string().min(1).optional(),
    shortUri: z
      .string()
      .min(4, { message: 'You have to add uri with min 4 characters' })
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
    window.alert(data.file)

  const inputClassNames =
    'focus:shadow-outline mb-4 w-full appearance-none rounded-[16px] min-h-[48px] bg-white bg-opacity-[0.04] px-[14px] font-[14px] py-2 text-sm leading-tight text-gray-200 focus:outline-none placeholder:font-bold placeholder:text-gray-500'

  return (
    <div className="py-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="100px"
            viewBox="0 0 80 80"
            version="1.1"
          >
            <defs>
              <linearGradient
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                id="751976694578"
              >
                <stop stop-color="rgb(255, 0, 115)" offset="0%" />
                <stop stop-color="rgb(115, 255, 0)" offset="100%" />
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect
                id="Rectangle"
                fill="url(#751976694578)"
                x="0"
                y="0"
                width="80"
                height="80"
              />
            </g>
          </svg>
          <div className="ml-4 flex flex-col">
            <label
              className=" mb-2 block text-xs font-bold text-gray-200 text-opacity-60"
              htmlFor="file"
            >
              At least 300x300 pixels, max. size 5MB, GIF, JPEG or PNG
            </label>
            <input
              className={clsx(inputClassNames, errors.file && 'border-red-500')}
              id="file"
              type="file"
              placeholder="Upload your file..."
              {...register('file')}
            />
          </div>
        </div>
        {errors.file ? (
          <p className="mt-2 text-xs italic text-red-500">
            {errors.file.message}
          </p>
        ) : null}

        <label
          className="mb-2 block text-sm font-bold text-gray-200"
          htmlFor="displayName"
        >
          Display Name
        </label>
        <input
          className={clsx(
            inputClassNames,
            errors.displayName && 'border-red-500'
          )}
          id="displayName"
          type="text"
          placeholder="Enter collection name"
          {...register('displayName')}
        />
        {errors.displayName ? (
          <p className="mt-2 text-xs italic text-red-500">
            {errors.displayName.message}
          </p>
        ) : null}
        <label
          className="mb-2 block text-sm font-bold text-gray-200"
          htmlFor="symbol"
        >
          Symbol
        </label>
        <input
          className={clsx(inputClassNames, errors.symbol && 'border-red-500')}
          id="symbol"
          type="text"
          placeholder="Enter token symbol"
          {...register('symbol')}
        />
        {errors.symbol ? (
          <p className="mt-2 text-xs italic text-red-500">
            {errors.symbol.message}
          </p>
        ) : null}
        <label
          className="mb-2 block text-sm font-bold text-gray-200"
          htmlFor="description"
        >
          Description
        </label>
        <input
          className={clsx(
            inputClassNames,
            errors.description && 'border-red-500'
          )}
          id="description"
          type="text"
          multiple={true}
          placeholder="Spread some words about your token collection"
          {...register('description')}
        />
        {errors.description ? (
          <p className="mt-2 text-xs italic text-red-500">
            {errors.description.message}
          </p>
        ) : null}
        <label
          className="mb-2 block text-sm font-bold text-gray-200"
          htmlFor="shortUri"
        >
          Short Url
        </label>
        <input
          className={clsx(inputClassNames, errors.shortUri && 'border-red-500')}
          id="shortUri"
          type="text"
          placeholder="Enter shor url"
          {...register('shortUri')}
        />
        {errors.shortUri ? (
          <p className="mt-2 text-xs italic text-red-500">
            {errors.shortUri.message}
          </p>
        ) : null}
        <Button type="submit" className="w-full">
          Create collection
        </Button>
      </form>
    </div>
  )
}
