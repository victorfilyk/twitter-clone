import { Formik, Form, Field, ErrorMessage } from "formik"
import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Meta from "../components/Meta"
import { validationSchema } from "../utils/validation-schema"

interface InitialLoginFormValues {
  username: string
  password: string
}

const Login: NextPage<{}> = () => {
  const initialValues: InitialLoginFormValues = { username: "", password: "" }

  return (
    <>
      <Meta></Meta>
      <div>
        <Image
          src="/images/twitter-logo.svg"
          width="45"
          height="45"
          draggable={false}
          css={`
            filter: invert(52%) sepia(73%) saturate(1754%) hue-rotate(175deg)
              brightness(95%) contrast(101%);
          `}
        ></Image>
        <h2>Log in to Twitter</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema.login}
          onSubmit={values => {
            console.log(JSON.stringify(values, null, 2))
          }}
        >
          {({ isValid, dirty }) => (
            <Form>
              <Field
                type="text"
                name="username"
                placeholder="Phone, email or username"
              />
              <ErrorMessage name="username" component="div" />
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={!(isValid && dirty)}>
                Log in
              </button>
            </Form>
          )}
        </Formik>
        <Link href="/reset-password">
          <a>Forgot password?</a>
        </Link>
        <span>*</span>
        <Link href="/signup">
          <a>Sign up for Twitter</a>
        </Link>
      </div>
    </>
  )
}

export default Login
