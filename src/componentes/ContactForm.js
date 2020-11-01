import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "../styles/Form.css";

const ContactForm = ({ submit }) => {
  // Crear una referencia - asociado al input del formulario
  // const valuesContact = React.createRef();

  return (
    <div className="form-wrapper">
      <h1>Mis contactos</h1>
      <Formik
        //******* DECLARAMOS LOS VALORES INICIALES DEL FORMULARIO ***** */
        initialValues={{
          name: "",
          surnames: "",
          phone: "",
          email: "",
          company: "",
          sector: "",
        }}
        //******* DECLARAMOS LA FUNCIÓN QUE SE DEBE EJECUTAR EN EL ONSUBMIT DEL FORMULARIO ***** */
        onSubmit={(values) => {
          // event.preventDefault(); // evitamos que se recargue la página
          console.log(values);
          submit(
            values.name,
            values.surnames,
            values.phone,
            values.email,
            values.company,
            values.sector
          ); // ejecutamos la función de TodoFormContainer
        }}
        // ****** VALIDACIÓN DE CAMPOS A TRAVÉS DE YUP ********
        // Creamos un esquema del aspecto que tendrá el objeto formulario y sus campos
        // además de las validaciones que se requieran
        validationSchema={Yup.object().shape({
          name: Yup.string().required("El nombre es obligatorio"),
          surnames: Yup.string().required("Los apellidos son obligatorios"),
          phone: Yup.string().required("El teléfono es obligatorio"),
          email: Yup.string()
            .email("El email no es válido")
            .required("El campo email es obligatorio"),
          company: Yup.string(),
          sector: Yup.string(),
        })}
      >
        {/* ****** PASAMOS PROPS al FORMULARIO QUE VAMOS A PINTAR
            
            - values: valores del formulario
            - touched: nos dice si un campo ha sido tocado por el usuario o no
            - errors: nos lista los errores del formulario
            - isSubmitting: nos dice si se está ejecutando el Submit del formulario
            - handleChange: manejar cambios en los campos del formulario
            - handleBlur: manejar cuando se pierde el foco de un campo
            - handleSubmit: manejador para ejecutar la función de onSubmit de Formik */}

        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleSubmit,
            handleBlur,
            resetForm,
          } = props;

          return (
            <form onSubmit={handleSubmit}>
              {/* NOMBRE DEL CONTACTO */}
              <label htmlFor="name">Nombre</label>
              <input
                name="name"
                type="text"
                placeholder="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name && touched.name && "error"}
              />
              {/* Mostramos los errores relacionados con el nombre */}
              {errors.name && touched.name && (
                <div className="input-error">
                  {/* Errores que hemos personalizado en YUP */}
                  {errors.name}
                </div>
              )}
              {/* APELLIDOS DEL CONTACTO */}
              <label htmlFor="surnames">Apellidos</label>
              <input
                name="surnames"
                type="text"
                placeholder="surnames"
                value={values.surnames}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.surnames && touched.surnames && "error"}
              />
              {/* Mostramos los errores relacionados con el apellidos */}
              {errors.surnames && touched.surnames && (
                <div className="input-error">
                  {/* Errores que hemos personalizado en YUP */}
                  {errors.surnames}
                </div>
              )}
              {/* EMAIL DEL CONTACTO */}
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
              />
              {/* Mostramos los errores relacionados con el email */}
              {errors.email && touched.email && (
                <div className="input-error">
                  {/* Errores que hemos personalizado en YUP */}
                  {errors.email}
                </div>
              )}

              {/* TELÉFONO DEL CONTACTO */}
              <label htmlFor="phone">Teléfono</label>
              <input
                name="phone"
                type="text"
                placeholder="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone && touched.phone && "error"}
              />
              {/* Mostramos los errores relacionados con el email */}
              {errors.phone && touched.phone && (
                <div className="input-error">
                  {/* Errores que hemos personalizado en YUP */}
                  {errors.phone}
                </div>
              )}

              {/* EMPRESA DEL CONTACTO */}
              <label htmlFor="company">Empresa</label>
              <input
                name="company"
                type="text"
                placeholder="company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.company && touched.company && "error"}
              />
              {/* Mostramos los errores relacionados con el email */}
              {errors.company && touched.company && (
                <div className="input-error">
                  {/* Errores que hemos personalizado en YUP */}
                  {errors.company}
                </div>
              )}

              {/* SECTOR */}
              <label htmlFor="sector">Sector</label>
              <select
                name="sector"
                value={values.sector}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.sector && touched.sector && "error"}
              >
                <option value="Tecnología">Tecnología</option>
                <option value="Agricultura">Agricultura</option>
                <option value="Investigación">Investigación</option>
              </select>
              {/* Mostramos los errores relacionados con el pais */}
              {errors.sector && touched.sector && (
                <div className="input-error">
                  {/* Errores que hemos personalizado en YUP */}
                  {errors.sector}
                </div>
              )}

              <div className="buttons-container">
                {" "}
                {/* Botón para realizar el Submit del formulario */}
                <button type="submit" disabled={isSubmitting}>
                  Añadir
                </button>
                {/* Botón para resetear los campos del formulario */}
                <button onClick={resetForm}>Resetear</button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactForm;
