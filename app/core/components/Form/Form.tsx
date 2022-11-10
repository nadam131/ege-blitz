import { useState, ReactNode, PropsWithoutRef, useEffect } from "react"
import { FormProvider, useForm, UseFormProps } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { DevTool } from "@hookform/devtools"
import { Alert, Button, Snackbar, Stack } from "@mui/material"
import { isEmpty } from "lodash"

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  children?: ReactNode
  submitText?: string
  clearValues?: boolean
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
  clearValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  const [formError, setFormError] = useState<string | null>(null)
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false)
  const ctx = useForm<z.infer<S>>({
    mode: "all",
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: initialValues,
  })

  const {
    getValues,
    reset,
    formState: { isValid, isDirty, isSubmitSuccessful, isSubmitting },
  } = ctx

  useEffect(() => {
    if (isSubmitSuccessful && isEmpty(formError)) {
      clearValues ? reset() : reset(getValues())

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
      setShowSnackbar(true)
    }
  }, [isSubmitSuccessful, clearValues, formError, getValues, reset])

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
        {showSnackbar && (
          <Snackbar open={true} autoHideDuration={2000} onClose={() => setShowSnackbar(false)}>
            <Alert severity="success" sx={{ width: "100%" }}>
              This is a success message!
            </Alert>
          </Snackbar>
        )}
        <DevTool control={ctx.control} />
      </FormProvider>
    </>
  )
}

export default Form
