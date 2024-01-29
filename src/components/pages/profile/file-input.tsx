'use client'

import ImageCard from '@/components/pages/auth/image-card'
import { Icons } from '@/components/ui/icons'
import { Progress } from '@/components/ui/progress'
import { PROGRESS_TIMEOUT_DELAY } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC, FormEvent, useRef, useState } from 'react'

type FileInputProps = {
  className?: string
}

const FileInput: FC<FileInputProps> = ({ className }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [_, setImage] = useState<File | undefined>()

  const [preview, setPreview] = useState<string | undefined>()

  const [progress, setProgress] = useState<number>(0)

  const clearSelectFile = () => {
    setPreview(undefined)
  }

  const handleSelectFile = () => {
    fileInputRef.current?.click()
  }

  const handleImageLoad = (file: File) => {
    setImage(file)

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onloadstart = () => {
      setProgress(0)
    }
    fileReader.onprogress = (progress) => {
      setProgress((progress.loaded / progress.total) * 100)
    }
    fileReader.onload = () => {
      setPreview(fileReader.result as string)
      setTimeout(() => setProgress(0), PROGRESS_TIMEOUT_DELAY)
    }
  }

  const handleImageChange = (event: FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLElement & {
      files: FileList
    }

    if (target.files.length > 0) {
      handleImageLoad(target.files[0])
    }
  }

  return (
    <ImageCard
      className={cn(
        '-my-[4.375rem] flex-shrink-0 hidden sm:flex items-center justify-center py-32 px-[3.25rem]',
        className
      )}
    >
      <div className="relative">
        {preview ? (
          <div>
            <Image
              alt="avatar"
              className="w-[144px] h-[144px] rounded-3xl"
              src={preview}
            />
            <Icons.cross
              className="absolute z-10 top-4 right-4 text-base-white dark:text-base-black"
              onClick={clearSelectFile}
            />
          </div>
        ) : (
          <div>
            <Icons.photo_profile className="text-base-gray-2 dark:text-base-black" />
          </div>
        )}
        <div
          className="absolute -bottom-4 right-1/2 translate-x-1/2"
          onClick={handleSelectFile}
        >
          <Icons.mingcute_camera className="text-white dark:text-bright-indigo" />
        </div>

        <div
          className={cn(
            'absolute z-[11] top-1/2 left-1/2 w-full',
            !progress && 'w-0'
          )}
        >
          <Progress
            className="w-5/6 relative mx-auto transition-[width] duration-500 ease-in-out -left-1/2"
            value={progress}
          />
        </div>

        <input
          className="absolute block h-full w-full top-0 opacity-0 rounded-3xl"
          name="image"
          onChange={handleImageChange}
          ref={fileInputRef}
          type="file"
        />
        <span className="sr-only">File input</span>
      </div>
    </ImageCard>
  )
}

export default FileInput
