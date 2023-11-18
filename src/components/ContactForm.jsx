import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [isSubmitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setSubmitting(true);

      try {
        // test our try catch
        // await new Promise((resolve, reject) =>
        //   setTimeout(() => reject(new Error("Simulated error")), 3000)
        // );
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // After the request is complete,  show an alert
        Swal.fire({
          icon: "success",
          title: "Thank You For Contacting Us! We Appreciate You",
          showConfirmButton: false,
          timer: 3000,
        });

        // Clear form fields
        resetForm();
      } catch (error) {
        // Handle errors during the submission
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: error.message,
        });
        // Clear form fields
        resetForm();
      } finally {
        // Ensure that setSubmitting(false) is called in all cases
        setSubmitting(false);
      }
    },
  });

  return (
    <form className="flex-1 px-10" onSubmit={formik.handleSubmit}>
      <Input
        label="Full Name"
        type="text"
        id="name"
        placeholder="Full Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="text-red-500">{formik.errors.name}</div>
      ) : null}

      <Input
        label="Email Address"
        type="email"
        id="email"
        placeholder="Example@domain.com"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="text-red-500">{formik.errors.email}</div>
      ) : null}

      <Input
        label="Subject"
        type="text"
        id="subject"
        placeholder="Enter Your Subject"
        value={formik.values.subject}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.subject && formik.errors.subject ? (
        <div className="text-red-500">{formik.errors.subject}</div>
      ) : null}

      <div className="mb-5">
        <label className="block mb-3 font-medium" htmlFor="message">
          Message :
        </label>
        <textarea
          id="message"
          className="border resize-none focus:border-blue-500 border-slate-200 outline-none text-gray-500 md:w-2/3 w-full p-3 rounded-md"
          cols="30"
          rows="5"
          placeholder="Write Your Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>
        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-500">{formik.errors.message}</div>
        ) : null}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-10 rounded-md hover:bg-blue-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
