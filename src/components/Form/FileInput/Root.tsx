'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

interface RootProps extends ComponentProps<'div'> {}

interface FileInputContextType {
  id: string
  files: File[]
  onFilesSelected(files: File[], multiple: boolean): void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()

  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...files])

      return
    }

    setFiles(files)
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export function useFileInput() {
  return useContext(FileInputContext)
}
