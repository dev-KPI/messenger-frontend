'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PROFILE_NAME_LENGTH } from '@/constants'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

type FormProfileProps = { className?: string }

const formSchema = z.object({
  profileName: z
    .string()
    .min(PROFILE_NAME_LENGTH, 'The field must not be empty'),
})

const ProfileForm: FC<FormProfileProps> = ({ className }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      profileName: '',
    },
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(JSON.stringify(values))
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        className={cn(
          'space-y-8 xs:max-w-[343px] md:max-w-none md:pr-16 lg:pr-[9.75rem]',
          className
        )}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="profileName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="md:min-w-[343px]"
                  id="profile_name"
                  placeholder="Profile Name"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="!mt-[5.75rem] w-full md:!mt-8" type="submit">
          Done
        </Button>
      </form>
    </Form>
  )
}

export default ProfileForm
