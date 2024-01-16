'use client'

import Button from '@/components/UI/Button'
import Form from '@/components/UI/Form/Form'
import FormCheckbox from '@/components/UI/Form/FormCheckbox'
import FormControl from '@/components/UI/Form/FormControl'
import FormInput from '@/components/UI/Form/FormInput'
import FormLabel from '@/components/UI/Form/FormLabel'
import { FC, FormEvent } from 'react'

const AuthForm: FC = () => {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) =>
    console.log(e.target)

  return (
    <Form className="mt-5" onSubmit={handleFormSubmit}>
      <FormControl>
        <FormLabel htmlFor="email">
          Confirm your email and get dynamically generated code
        </FormLabel>
        <FormInput id="email" name="email" placeholder="Email" type="text" />
      </FormControl>
      <FormControl className="mt-10" horizontal>
        <FormCheckbox id="agreement" name="agreement">
          I agree to Terms & Conditions and Privacy Policy
        </FormCheckbox>
      </FormControl>
      <Button className="mt-3 w-full" type="submit">
        Next
      </Button>
    </Form>
  )
}

export default AuthForm
