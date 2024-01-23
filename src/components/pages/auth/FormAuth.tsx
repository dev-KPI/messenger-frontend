'use client'

import { Button } from '@/components/ui/button'
import Form from '@/components/ui/form/Form'
import FormCheckbox from '@/components/ui/form/FormCheckbox'
import FormControl from '@/components/ui/form/FormControl'
import FormInput from '@/components/ui/form/FormInput'
import FormLabel from '@/components/ui/form/FormLabel'
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