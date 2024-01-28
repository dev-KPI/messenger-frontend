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

  const [image, setImage] = useState<File | undefined>()

  const [preview, setPreview] = useState<string | undefined>()

  const [isDragging, setIsDragging] = useState<boolean>(false)

  function clearSelectFile() {
    setImage(undefined)
    setPreview(undefined)
  }

  function handleSelectFile() {
    fileInputRef.current?.click()
  }

  const handleImageLoad = (file: File) => {
    setImage(file)

    const fileReader = new FileReader()

    fileReader.readAsDataURL(file)

    fileReader.onprogress = (progress) => {
      console.log('progress', progress)
    }

    fileReader.onload = () => {
      setPreview(fileReader.result as string)
    }
  }

  function handleImageChange(event: FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLElement & {
      files: FileList
    }

    console.log(event.target)

    if (target.files.length > 0) {
      handleImageLoad(target.files[0])
    }
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('handleDragLeave')
    event.preventDefault()

    // setTimeout(function () {
    setIsDragging(false)
    // }, 100);
  }

  const handleDropFile = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('handleDropFile')
    event.preventDefault()
    setIsDragging(false)
    console.log(event)
    if (event.dataTransfer.files.length > 0) {
      handleImageLoad(event.dataTransfer.files[0])
    }
  }

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('allowDrop')
    event.preventDefault()
    setIsDragging(true)
    event.dataTransfer.dropEffect = 'copy'
  }

  return (
    <div className="relative">
      <div
        className="absolute flex justify-center items-center h-[155%] w-full -top-[27.5%] z-[1000] rounded-3xl"
        onDragLeave={handleDragLeave}
        onDragOver={allowDrop}
        onDrop={handleDropFile}
      ></div>
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

          {isDragging && (
            <div className="absolute flex justify-center items-center h-full w-full top-0 z-[100] bg-white opacity-50 rounded-3xl">
              Drop image here
            </div>
          )}
        </div>
      </ImageCard>
    </div>
  )
}

export default FileInput
