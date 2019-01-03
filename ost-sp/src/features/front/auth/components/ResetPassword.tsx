// import * as React from "react";
// import { StatelessComponent } from "react";
// import { Link } from "react-router-dom";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardGroup,
//   Col,
//   Container,
//   Form,
//   Input,
//   InputGroup,
//   InputGroupAddon,
//   InputGroupText,
//   Row,
//   FormFeedback
// } from "reactstrap";
// import { connect, MapDispatchToProps } from "react-redux";
// import "./Auth.css";
// import { ThunkDispatch } from "redux-thunk";
// import * as Actions from "../actions";
// import { IState } from "src/shared/store";
// import ILoginCredentials, {
//   validationSchema
// } from "../../../../data/LoginCredential";
// import {
//   withFormik,
//   FormikValues,
//   FormikErrors,
//   FormikProps,
//   Field
// } from "formik";

// interface DispatchProps {
//   onSubmit: (
//     loginCredientials: ILoginCredentials
//   ) => Promise<FormikErrors<FormikValues>> | void;
// }

// type Props = DispatchProps & FormikProps<ILoginCredentials>;

// // const cred = {
// //   email : "chamso@gmail.com",
// //   password : "12345678"
// // }

// const Reset: StatelessComponent<Props> = ({
//   values,
//   handleChange,
//   handleBlur,
//   handleSubmit,
//   touched,
//   errors
// }) => (
//   <div className="app  flex-row align-items-center">
//     <Container>
//       <Row className="justify-content-center">
//         <Col md="8">
//           <CardGroup>
//             <Card className="p-4">
//               <CardBody>
//                 <Form onSubmit={handleSubmit}>
//                   <h1>Login</h1>
//                   <p className="text-muted">Sign In to your account</p>
//                   <InputGroup className="mb-3">
//                     <InputGroupAddon addonType="prepend">
//                       <InputGroupText>
//                         <i className="icon-user" />
//                       </InputGroupText>
//                     </InputGroupAddon>
//                     <Input
//                       tag={Field}
//                       invalid={Boolean(errors.email && touched.email)}
//                       value={values.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       name="email"
//                       type="text"
//                       placeholder="Username"
//                       autoComplete="username"
//                     />
//                     <FormFeedback tooltip={true}>{errors.email}</FormFeedback>
//                   </InputGroup>
//                   <InputGroup className="mb-4">
//                     <InputGroupAddon addonType="prepend">
//                       <InputGroupText>
//                         <i className="icon-lock" />
//                       </InputGroupText>
//                     </InputGroupAddon>
//                     <Input
//                       value={values.password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       name="password"
//                       type="password"
//                       placeholder="Password"
//                       autoComplete="current-password"
//                     />
//                   </InputGroup>
//                   <Row>
//                     <Col xs="6">
//                       <Button color="primary" className="px-4" type="submit">
//                         Login
//                       </Button>
//                     </Col>
//                     <Col xs="6" className="text-right">
//                       <Link to="/auth/forgot">
//                         <Button color="link" className="px-0">
//                           Forgot password?
//                         </Button>
//                       </Link>
//                     </Col>
//                   </Row>
//                 </Form>
//               </CardBody>
//             </Card>
//             <Card
//               className="text-white bg-primary py-5 d-md-down-none"
//               style={{ width: "44%" }}
//             >
//               <CardBody className="text-center">
//                 <div>
//                   <h2>Sign up</h2>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                     sed do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua.
//                   </p>
//                   <Link to="/auth/register">
//                     <Button
//                       color="primary"
//                       className="mt-3"
//                       active={true}
//                       tabIndex={-1}
//                     >
//                       Register Now!
//                     </Button>
//                   </Link>
//                 </div>
//               </CardBody>
//             </Card>
//           </CardGroup>
//         </Col>
//       </Row>
//     </Container>
//   </div>
// );

// const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
//   dispatch: ThunkDispatch<IState, void, Actions.All>
// ) => ({
//   onSubmit: (IReset: IReset) => {
//     dispatch(Actions.login(IReset));
//   }
// });

// const ResetWithFormik = withFormik<DispatchProps, IReset>({
//   validationSchema,
//   mapPropsToValues: () => ({ email: "", password: "" }),
//   handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
//     const errors = await props.onSubmit(values);
//     if (errors) {
//       setErrors(errors);
//     }
//   }
// })(Reset);

// export default connect(
//   null,
//   mapDispatchToProps
// )(ResetWithFormik);