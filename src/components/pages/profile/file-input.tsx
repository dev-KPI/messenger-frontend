'use client'

import ImageCard from '@/components/pages/auth/image-card'
import { Icons } from '@/components/ui/icons'
import { classnames } from '@/utils'
import { FC, FormEvent, useRef, useState } from 'react'

type FileInputProps = {
  className?: string
}

const FileInput: FC<FileInputProps> = ({ className }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [_, setImage] = useState<File | undefined>()

  const [preview, setPreview] = useState<string | undefined>()

  function clearSelectFile() {
    setPreview(undefined)
  }

  function handleSelectFile() {
    fileInputRef.current?.click()
  }

  const handleImageLoad = (file: File) => {
    setImage(file)

    const fileReader = new FileReader()

    fileReader.readAsDataURL(file)

    // TODO: implement shadcn/ui progress component on image upload
    // fileReader.onprogress = (progress) => {
    //   console.log('progress', progress)
    // }

    fileReader.onload = () => {
      setPreview(fileReader.result as string)
    }
  }

  function handleImageChange(event: FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLElement & {
      files: FileList
    }

    if (target.files.length > 0) {
      handleImageLoad(target.files[0])
    }
  }

  return (
    <ImageCard
      className={classnames(
        '-my-[4.375rem] flex-shrink-0 hidden sm:flex items-center justify-center py-32 px-[3.25rem]',
        className
      )}
    >
      <div className="relative">
        {preview ? (
          <div>
            <img className="w-[144px] h-[144px] rounded-3xl" src={preview} />
            <Icons.cross
              className="absolute z-10 top-4 right-4 fill-[#F0F2F8] dark:fill-[#1C1D1F]"
              onClick={clearSelectFile}
            />
          </div>
        ) : (
          <div>
            <Icons.photo_profile className="fill-[#F0F2F8] dark:fill-[#1C1D1F]" />
          </div>
        )}
        <div
          className="absolute -bottom-4 right-1/2 translate-x-1/2"
          onClick={handleSelectFile}
        >
          <Icons.mingcute_camera className="fill-white dark:fill-[#7F92DC]" />
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
