import { FC } from 'react'

export type PasswordProps = {
  inputPassword: string
}

const PasswordProcessBar: FC<PasswordProps> = ({ inputPassword }: PasswordProps) => {
  const calculatePasswordStrength = (password: string): number => {
    const strength = password.length
    return strength
  }

  const getPasswordStrengthColor = (strength: number): string => {
    if (strength === 0) {
      return 'bg-passwordBarDefault'
    }
    if (strength < 6) {
      return 'bg-passwordBarWeak'
    }
    if (strength < 10) {
      return 'bg-passwordBarFair'
    }
    return 'bg-passwordBarStrong'
  }

  const passwordStrength = calculatePasswordStrength(inputPassword)
  const strengthColor = getPasswordStrengthColor(passwordStrength)

  const getLabel = (): string => {
    if (strengthColor === 'bg-passwordBarWeak') {
      return 'Weak'
    }
    if (strengthColor === 'bg-passwordBarFair') {
      return 'Fair'
    }
    return 'Strong'
  }

  const getLabelColor = (): string => {
    if (strengthColor === 'bg-passwordBarWeak') {
      return 'text-passwordBarWeak'
    }
    if (strengthColor === 'bg-passwordBarFair') {
      return 'text-passwordBarFair'
    }
    if (strengthColor === 'bg-passwordBarStrong') {
      return 'text-passwordBarStrong'
    }
    return 'text-gray-500'
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className={`bg-gray-300 h-2 w-1/3 rounded-full mr-1 ${strengthColor}`} />
        <div
          className={`bg-gray-300 h-2 w-1/3 rounded-full mr-1 ${
            // eslint-disable-next-line no-nested-ternary
            strengthColor === 'bg-passwordBarFair'
              ? 'bg-passwordBarFair'
              : strengthColor === 'bg-passwordBarStrong'
              ? 'bg-passwordBarStrong'
              : 'bg-passwordBarDefault'
          }`}
        />
        <div
          className={`bg-gray-300 h-2 w-1/3 rounded-full ${
            strengthColor === 'bg-passwordBarStrong' ? 'bg-passwordBarStrong' : 'bg-passwordBarDefault'
          }`}
        />
      </div>
      {passwordStrength > 0 ? (
        <div className="flex justify-end h-10">
          <p className={`text-sm mt-2 ${getLabelColor()}`}>{getLabel()}</p>
        </div>
      ) : (
        <div className="h-10" />
      )}
    </div>
  )
}

export default PasswordProcessBar
