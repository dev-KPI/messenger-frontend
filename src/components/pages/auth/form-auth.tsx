'use client'

import OtpInput from '@/components/pages/auth/otp-input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LENGTH_OTP } from '@/constants'
import { classnames } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

type FormAuthProps = { className?: string }

const formSchema = z.object({
  agreement: z.boolean().default(false),
  email: z.string().email(),
})

const AuthForm: FC<FormAuthProps> = ({ className }) => {
  const [otp, setOtp] = useState<string>('')

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      agreement: false,
      email: '',
    },
    resolver: zodResolver(formSchema),
  })

  const otpChange = (value: string) => setOtp(value.trim())

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(JSON.stringify({ ...values, otp }))
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        className={classnames('space-y-8', className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">
                Confirm your email and get dynamically generated code
              </FormLabel>
              <FormControl>
                <Input id="email" placeholder="Email" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <OtpInput length={LENGTH_OTP} onChange={otpChange} otpValue={otp} />
        <FormField
          control={form.control}
          name="agreement"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  id="agreement"
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="!mt-0">
                <FormLabel htmlFor="agreement">
                  I agree to Terms & Conditions and Privacy Policy
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button className="!mt-3 w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default AuthForm
