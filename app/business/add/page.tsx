'use client'

import { useBusiness } from '@/context/business'

interface InputField {
  name: string
  type: string
  label: string
  required?: boolean
  accept?: string
}

const inputFields: InputField[] = [
  {
    name: 'name',
    label: 'Business Name',
    type: 'text',
    required: true,
  },
  {
    name: 'category',
    label: 'Category',
    type: 'text',
    required: true,
  },
  {
    name: 'address',
    label: 'Address',
    type: 'text',
    required: true,
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    name: 'website',
    label: 'Website',
    type: 'url',
  },
  {
    name: 'hours',
    label: 'Opening Hours',
    type: 'text',
  },
  {
    name: 'businessNumber',
    label: 'Business Number',
    type: 'number',
  },
  {
    name: 'logo',
    label: 'logo',
    type: 'file',
    accept: 'image/*'
  },
]

export default function AddBusinessPage() {
  const { business} = useBusiness()

  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <div className='flex flex-col lg:w-1/2 p-4 lg:order-last lg:flex lg:justify-center lg:items-center'>Preview</div>
      <div className='flex flex-col lg:w-1/2 p-4 lg:order-first lg:flex lg:justify-center lg:items-center'>
        <pre>{JSON.stringify(business, null, 4)}</pre>
      </div>
    </div>
  )
}