'use client'

import OtpInput from '@/components/pages/verification/otp-input'
import { Button } from '@/components/ui/button'
import { LENGTH_OTP } from '@/constants'
import { cn } from '@/lib/utils'
import { FC, useState } from 'react'

type ControlOtpProps = { className?: string }

const MOCK_OTP = '12345' // TODO: remove

const ControlOtp: FC<ControlOtpProps> = ({ className }) => {
  const [otp, setOtp] = useState<string>('')
  const [otpIsInvalid, setOtpIsInvalid] = useState<boolean>(false)

  const otpIncomplete = otp.length < LENGTH_OTP

  const otpChange = (value: string) => {
    if (otpIsInvalid) {
      setOtpIsInvalid(false)
    }
    setOtp(value.trim())
  }

  const validateOtp = () => {
    if (otp !== MOCK_OTP) {
      setOtpIsInvalid(true)
      return
    }

    // TODO: send otp to server
  }

  return (
    <div className={cn('lg:pr-28', className)}>
      <p
        className={cn(
          'cursor-default text-base-gray-6',
          otpIsInvalid && 'text-bright-red'
        )}
      >
        {otpIsInvalid
          ? 'The code is not correct. Try again'
          : 'Paste dynamically generated code'}
      </p>
      <OtpInput
        className="mt-3"
        isError={otpIsInvalid}
        length={LENGTH_OTP}
        onChange={otpChange}
        otpValue={otp}
      />
      <button className="block mt-4 text-bright-orange">
        Didn&apos;t get anything? Resend me code.
      </button>
      <Button
        className="w-full mt-3"
        disabled={otpIncomplete}
        onClick={validateOtp}
        variant={otpIncomplete ? 'disabled' : 'default'}
      >
        Next
      </Button>
    </div>
  )
}

export default ControlOtp
