import { Input } from '@/components/ui/input'
import { DIGIT_RE } from '@/constants'
import { cn } from '@/lib/utils'
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
    const elementIsDigit = DIGIT_RE.test(element)

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
    if (nextElementSibling) {
      ;(nextElementSibling as HTMLInputElement).focus()
    }
  }

  const focusPrev = (target: HTMLInputElement) => {
    const { previousElementSibling } = target
    if (previousElementSibling) {
      ;(previousElementSibling as HTMLInputElement).focus()
    }
  }

  const onChangeInternal = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { target } = e
    const { nextElementSibling } = target
    let targetValue = target.value.trim()

    const isTargetValueDigit = DIGIT_RE.test(targetValue)

    if (!isTargetValueDigit && targetValue !== '') {
      return
    }

    if (
      !isTargetValueDigit &&
      nextElementSibling &&
      (nextElementSibling as HTMLInputElement).value !== ''
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
    const { value } = target as HTMLInputElement

    if (key === 'ArrowRight' || key === 'ArrowDown') {
      e.preventDefault()
      return focusNext(target as HTMLInputElement)
    }

    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      e.preventDefault()
      return focusPrev(target as HTMLInputElement)
    }

    ;(target as HTMLInputElement).setSelectionRange(0, value.length)

    if (key !== 'Backspace' || value !== '') {
      return
    }

    focusPrev(target as HTMLInputElement)
  }

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    const { target } = e
    const { previousElementSibling, value } = target

    if (
      previousElementSibling &&
      (previousElementSibling as HTMLInputElement).value === ''
    ) {
      return (previousElementSibling as HTMLInputElement).focus()
    }

    target.setSelectionRange(0, value.length)
  }

  return (
    <div className={cn('inline-flex gap-2', className)}>
      {otpDigits.map((digit, index) => (
        <Input
          autoComplete="one-time-code"
          className={cn(
            'max-w-[3.5rem] text-center font-title py-5 text-[1.75rem] leading-[2.125rem] focus:border-bright-blue font-medium tracking-[0.0225rem]',
            isError && 'text-bright-red'
          )}
          inputMode="numeric"
          key={index + 1}
          maxLength={length}
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