export type CollectionForm = {
  name: string,
  description: string,
  image: FileList
}

export type InitialState = {
  form: {
    isOpen: boolean
  }
}