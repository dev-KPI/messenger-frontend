'use client'

import ImageCard from '@/components/pages/auth/image-card'
import { Icons } from '@/components/ui/icons'
import { classnames } from '@/utils'
import { FC, FormEvent, SyntheticEvent, useRef, useState } from 'react'

type FileInputProps = { className?: string }

const FileInput: FC<FileInputProps> = ({ className }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [image, setImage] = useState<File | undefined>()

  const [preview, setPreview] = useState<ArrayBuffer | null | string>(null)

  function handleSelectFile() {
    alert('click!')
    fileInputRef.current?.click()
  }

  function handleImageChange(event: FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLElement & {
      files: FileList
    }
    console.log(target.files)
    setImage(target.files[0])

    //

    const fileReader = new FileReader()

    fileReader.onprogress = (progress) => {
      console.log('progress', progress)
    }

    fileReader.onload = () => {
      setPreview(fileReader.result)
    }

    fileReader.readAsDataURL(target.files[0])
  }

  return (
    <ImageCard
      className={classnames(
        '-my-[4.375rem] flex-shrink-0 hidden sm:flex items-center justify-center py-32 px-[3.25rem]',
        className
      )}
    >
      <div className="relative">
        <Icons.photo_profile className="fill-[#F0F2F8] dark:fill-[#1C1D1F]" />
        <div
          className="absolute -bottom-4 right-1/2 translate-x-1/2"
          onClick={handleSelectFile}
        >
          <Icons.mingcute_camera className="fill-white dark:fill-[#7F92DC]" />
        </div>
        <input
          // className='absolute h-[calc(100%+1.125rem)] w-full top-0 z-10 opacity-0 cursor-pointer rounded-3xl'
          className="hidden"
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
