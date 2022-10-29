import { useState, ReactNode, PropsWithoutRef } from "react"
import { FormProvider, useForm, UseFormProps } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { DevTool } from "@hookform/devtools"
import { Button, Stack } from "@mui/material"

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  children?: ReactNode
  submitText?: string
  schema?: S
  onSubmit: (values: z.infer<S>) => Promise<void | OnSubmitResult>
  initialValues?: UseFormProps<z.infer<S>>["defaultValues"]
}

interface OnSubmitResult {
  FORM_ERROR?: string
  [prop: string]: any
}

export const FORM_ERROR = "FORM_ERROR"

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  const ctx = useForm<z.infer<S>>({
    mode: "all",
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: initialValues,
  })
  const [formError, setFormError] = useState<string | null>(null)
  const {
    formState: { isValid, isDirty, isSubmitting },
  } = ctx

  console.log(isDirty, "isDirty")

  const isSubmitDisabled = !isValid || isSubmitting || !isDirty
  return (
    <>
      <FormProvider {...ctx}>
        <form
          onSubmit={ctx.handleSubmit(async (values) => {
            const result = (await onSubmit(values)) || {}
            for (const [key, value] of Object.entries(result)) {
              if (key === FORM_ERROR) {
                setFormError(value)
              } else {
                ctx.setError(key as any, {
                  type: "submit",
                  message: value,
                })
              }
            }
          })}
          className="form"
          {...props}
        >
          <Stack spacing={2}>
            {children}
            {formError && (
              <div role="alert" style={{ color: "red" }}>
                {formError}
              </div>
            )}
            {submitText && (
              <Button
                variant="contained"
                size="large"
                fullWidth
                type="submit"
                disabled={isSubmitDisabled}
              >
                {submitText}
              </Button>
            )}
          </Stack>
        </form>
        <DevTool control={ctx.control} />
      </FormProvider>
    </>
  )
}

export default Form
