import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId } from "react"
import * as Yup from "yup";


const ContactForm = ({onSubmit}) => {

const nameId = useId();
const numberId = useId();

const contactFormSchema = Yup.object({
    username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.number().min(3, "Too Short!").max("50", "Too Long!").required("Required")
})

    return (
        <Formik initialValues = {{
            username: "",
            number: "",
                }}   

                onSubmit={(values, actions) => {
                    onSubmit(values);
                    actions.resetForm();
                }}

                validationSchema={contactFormSchema}
                >

        <Form className={css.form}>
            <label htmlFor={nameId} className={css.label}>Name</label>
        <Field type="text" name="username" className={css.name} id={nameId}></Field>
        <ErrorMessage name="username" component="span" className={css.error} />

            <label htmlFor={numberId} className={css.label}>Number</label>
        <Field type="number" name="number" className={css.name} id={numberId}></Field>
        <ErrorMessage name="number" component="span" className={css.error} />

        <button type="submit" className={css.button}>Add contact</button>
        </Form>
        
        </Formik>
            )}



export default ContactForm;