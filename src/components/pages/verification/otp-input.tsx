import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { isNumeric } from '@/utils'
import { ChangeEvent, FC, FocusEvent, KeyboardEvent, useMemo } from 'react'

type OtpInputProps = {
  className?: string
  isError?: boolean
  length: number
  onChange: (value: string) => void
  otpValue: string
}

const getOtpDigits = (otp: string, length: number) => {
  const otpItems = otp.split('')
  const digitsArray: string[] = []

  for (let i = 0; i < length; i++) {
    const element = otpItems[i]
    const elementIsDigit = isNumeric(element)

    digitsArray.push(elementIsDigit ? element : '')
  }

  return digitsArray
}

const OtpInput: FC<OtpInputProps> = ({
  className,
  isError,
  length,
  onChange,
  otpValue,
}) => {
  const otpDigits = useMemo(
    () => getOtpDigits(otpValue, length),
    [otpValue, length]
  )

  const focusNext = (target: HTMLInputElement) => {
    const { nextElementSibling } = target
    if (nextElementSibling instanceof HTMLInputElement) {
      nextElementSibling.focus()
    }
  }

  const focusPrev = (target: HTMLInputElement) => {
    const { previousElementSibling } = target
    if (previousElementSibling instanceof HTMLInputElement) {
      previousElementSibling.focus()
    }
  }

  const onChangeInternal = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { target } = e
    const { nextElementSibling } = target
    let targetValue = target.value.trim()

    const isTargetValueDigit = isNumeric(targetValue)

    if (!isTargetValueDigit && targetValue !== '') {
      return
    }

    if (
      !isTargetValueDigit &&
      nextElementSibling instanceof HTMLInputElement &&
      nextElementSibling.value !== ''
    ) {
      return
    }

    targetValue = isTargetValueDigit ? targetValue : ' '

    const targetValueLength = targetValue.length

    if (targetValueLength === 1) {
      const newValue =
        otpValue.substring(0, index) +
        targetValue +
        otpValue.substring(index + 1)

      onChange(newValue)

      if (!isTargetValueDigit) {
        return
      }

      focusNext(target)
    } else if (targetValueLength === length) {
      onChange(targetValue)
      target.blur()
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key, target } = e

    if (target instanceof HTMLInputElement) {
      const { value } = target

      if (key === 'ArrowRight' || key === 'ArrowDown') {
        e.preventDefault()
        return focusNext(target)
      }

      if (key === 'ArrowLeft' || key === 'ArrowUp') {
        e.preventDefault()
        return focusPrev(target)
      }

      target.setSelectionRange(0, value.length)

      if (key !== 'Backspace' || value !== '') {
        return
      }

      focusPrev(target)
    }
  }

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    const { target } = e
    const { previousElementSibling, value } = target

    if (
      previousElementSibling instanceof HTMLInputElement &&
      previousElementSibling.value === ''
    ) {
      return previousElementSibling.focus()
    }

    target.setSelectionRange(0, value.length)
  }

  return (
    <div className={cn('inline-flex gap-2', className)}>
      {otpDigits.map((digit, index) => (
        <Input
          autoComplete="one-time-code"
          className={cn(
            'flex-shrink-0 max-w-[3.125rem] text-center font-title py-5 text-[1.75rem] leading-[2.125rem] focus:border-bright-blue font-medium tracking-[0.0225rem] vs:max-w-[3.75rem]',
            isError && 'text-bright-red'
          )}
          inputMode="numeric"
          key={index + 1}
          onChange={(e) => onChangeInternal(e, index)}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          pattern="\d{1}"
          type="text"
          value={digit}
        />
      ))}
    </div>
  )
}

export default OtpInput
